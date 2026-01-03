import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Evacum",
  description: "Next.js + TypeScript + Tailwind App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-zinc-50 text-zinc-900 dark:bg-black dark:text-zinc-50">
        {children}
      </body>
    </html>
  );
}
