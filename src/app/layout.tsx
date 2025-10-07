// app/layout.tsx
// @ts-ignore
import "./globals.css";
import Navbar from "@/app/components/Navbar"; // or "@/components/Navbar" if that's your alias
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ian Santos — Portfolio",
  description: "Projects and work by Ian Santos",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const year = new Date().getFullYear();

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-dvh flex flex-col bg-white dark:bg-black text-black dark:text-white">
        <Navbar />

        <main className="flex-1">{children}</main>

        <footer className="bg-gray-800 text-white py-4 text-center">
          <p className="text-sm">© {year} Ian Santos. All rights reserved.</p>
          <div className="mt-2 flex justify-center items-center gap-4 text-gray-400">
            <a
              href="https://github.com/TheBoiLeroy"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              title="GitHub"
            >
              <FaGithub size={18} className="hover:text-white transition" />
            </a>
            <a
              href="https://www.linkedin.com/in/santosian/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <FaLinkedin size={18} className="hover:text-white transition" />
            </a>
            <a href="mailto:ian6502011@gmail.com" aria-label="Email" title="Email">
              <FaEnvelope size={18} className="hover:text-white transition" />
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
