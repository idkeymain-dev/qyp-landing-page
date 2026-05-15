import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "qyp",
  description: "Simple manual spending tracker. Best budget tracker without bank linking.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
