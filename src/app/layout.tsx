// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ian Santos — Portfolio",
  description: "Projects and work by Ian Santos",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-dvh flex flex-col bg-white dark:bg-black text-black dark:text-white">
        {/* Navbar and Footer REMOVED from here */}
        {children}
      </body>
    </html>
  );
}