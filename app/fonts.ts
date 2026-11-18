import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";

// The fonts of every page. The Russian layout adds a Cyrillic serif from
// app/ru/fonts.ts, kept apart so the other pages never preload a Cyrillic
// file. Geist's Cyrillic faces are declared here too (next/font declares every
// subset) but only the Latin files are preloaded.

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/** Also read by app/ru/layout.tsx, which puts the Cyrillic serif behind it. */
export const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

/** CSS variables the theme in globals.css reads, as classes for <html>. */
export const fontVariables = `${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable}`;
