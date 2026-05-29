import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "agents-cli — the missing toolchain for CLI coding agents",
  description: "Website and docs for agents-cli."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
