import type { Metadata } from "next";
import { V2Page } from "./v2-client";

export const metadata: Metadata = {
  title: "V2",
  robots: { index: false, follow: false },
  // self-canonical: don't inherit the root's "/" canonical on a noindex page
  alternates: { canonical: "/v2" },
};

export default function V2() {
  return <V2Page />;
}
