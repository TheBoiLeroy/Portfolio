import "./globals.css";
import Navbar from "@/app/components/Navbar";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full text-gray-900">
        <div className="flex flex-col min-h-screen">
          <Navbar />

          <main className="flex-grow py-8">{children}</main>

          <footer className="bg-white/20 backdrop-blur text-gray-800 py-6 text-center mt-10">
            <p className="text-sm">
              © {new Date().getFullYear()} Ian Santos. All rights reserved.
            </p>
            <div className="mt-2 flex justify-center items-center gap-4 text-gray-600">
              <a href="https://github.com/TheBoiLeroy" target="_blank" rel="noopener noreferrer">
                <FaGithub size={18} className="hover:text-black transition" />
              </a>
              <a href="https://www.linkedin.com/in/santosian/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={18} className="hover:text-black transition" />
              </a>
              <a href="mailto:ian6502011@gmail.com">
                <FaEnvelope size={18} className="hover:text-black transition" />
              </a>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}