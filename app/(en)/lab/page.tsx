import type { Metadata } from "next";
import { LabPage } from "./lab-client";

export const metadata: Metadata = {
  title: "Shader lab",
  robots: { index: false, follow: false },
  // self-canonical: don't inherit the root's "/" canonical on a noindex page
  alternates: { canonical: "/lab" },
};

export default function Lab() {
  return <LabPage />;
}
