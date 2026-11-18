#!/usr/bin/env node
/**
 * Generates public/.well-known/agent-skills/index.json from the SKILL.md files
 * next to it, per the Agent Skills Discovery RFC v0.2.0:
 * https://github.com/cloudflare/agent-skills-discovery-rfc
 *
 * Digests are SHA-256 over the raw artifact bytes, so the index can never drift
 * from the skills. Runs as `prebuild`; run `npm run skills:index` by hand after
 * editing a SKILL.md.
 */
import { createHash } from "node:crypto";
import { readFileSync, readdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const SCHEMA = "https://schemas.agentskills.io/discovery/0.2.0/schema.json";
const ROUTE = "/.well-known/agent-skills";
const DIR = join(process.cwd(), "public", ".well-known", "agent-skills");
const NAME_RE = /^[a-z0-9]+(-[a-z0-9]+)*$/;

/**
 * Minimal YAML front-matter reader — enough for the two required Agent Skills
 * fields. Handles `key: value`, quoted values, and folded (`>-`) blocks.
 */
function frontmatter(source, file) {
  const match = /^---\r?\n([\s\S]*?)\r?\n---(\r?\n|$)/.exec(source);
  if (!match) throw new Error(`${file}: missing YAML front matter`);

  const lines = match[1].split(/\r?\n/);
  const fields = {};

  for (let i = 0; i < lines.length; i++) {
    const entry = /^([A-Za-z0-9_-]+):[ \t]*(.*)$/.exec(lines[i]);
    if (!entry) continue;
    const [, key, rawValue] = entry;
    let value = rawValue.trim();

    if (value === ">" || value === ">-" || value === "|" || value === "|-") {
      const folded = value.startsWith(">");
      const block = [];
      while (i + 1 < lines.length && /^(\s+\S|\s*$)/.test(lines[i + 1])) {
        block.push(lines[++i].trim());
      }
      value = block.join(folded ? " " : "\n").trim();
    } else if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }

    if (value !== "") fields[key] = value;
  }

  return fields;
}

const skills = readdirSync(DIR, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name)
  .sort()
  .map((dir) => {
    const path = join(DIR, dir, "SKILL.md");
    const bytes = readFileSync(path);
    const { name, description } = frontmatter(bytes.toString("utf8"), `${dir}/SKILL.md`);

    if (!name) throw new Error(`${dir}/SKILL.md: front matter has no \`name\``);
    if (!description) throw new Error(`${dir}/SKILL.md: front matter has no \`description\``);
    if (name !== dir) throw new Error(`${dir}/SKILL.md: \`name\` is "${name}" but must match the directory name`);
    if (!NAME_RE.test(name) || name.length > 64) throw new Error(`${dir}: invalid skill name "${name}"`);
    if (description.length > 1024) throw new Error(`${dir}: description is ${description.length} chars, max is 1024`);

    return {
      name,
      type: "skill-md",
      description,
      url: `${ROUTE}/${dir}/SKILL.md`,
      digest: `sha256:${createHash("sha256").update(bytes).digest("hex")}`,
    };
  });

if (skills.length === 0) throw new Error(`no skills found under ${DIR}`);

writeFileSync(join(DIR, "index.json"), `${JSON.stringify({ $schema: SCHEMA, skills }, null, 2)}\n`);
console.log(`agent-skills: indexed ${skills.length} skills → ${ROUTE}/index.json`);
for (const skill of skills) console.log(`  ${skill.name}  ${skill.digest}`);
