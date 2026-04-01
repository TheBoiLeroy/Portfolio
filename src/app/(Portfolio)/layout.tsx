// app/(portfolio)/layout.tsx
import Navbar from "@/app/(Portfolio)/components/Navbar";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  const year = new Date().getFullYear();

  return (
    <>
      <Navbar />
      <main className="flex-1">{children}</main>
      <footer className="bg-gray-800 text-white py-4 text-center">
        <p className="text-sm">© {year} Ian Santos. All rights reserved.</p>
        <div className="mt-2 flex justify-center items-center gap-4 text-gray-400">
          <a href="https://github.com/TheBoiLeroy" target="_blank" rel="noopener"><FaGithub size={18} /></a>
          <a href="https://www.linkedin.com/in/santosian/" target="_blank" rel="noopener"><FaLinkedin size={18} /></a>
          <a href="mailto:ian6502011@gmail.com"><FaEnvelope size={18} /></a>
        </div>
      </footer>
    </>
  );
}