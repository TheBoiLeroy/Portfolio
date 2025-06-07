import "./globals.css";
import Navbar from "@/app/components/Navbar";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"; // from Font Awesome

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
      <div className="flex flex-col min-h-screen bg-white dark:bg-black text-black dark:text-white">
        <Navbar />
        
        <main className="flex-grow">{children}</main>

        <footer className="bg-gray-800 text-white py-4 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Ian Santos. All rights reserved.
          </p>
          <div className="mt-2 flex justify-center items-center gap-4 text-gray-400">
            <a href="https://github.com/TheBoiLeroy" target="_blank" rel="noopener noreferrer">
              <FaGithub size={18} className="hover:text-white transition" />
            </a>
            <a href="https://www.linkedin.com/in/santosian/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={18} className="hover:text-white transition" />
            </a>
            <a href="mailto:ian6502011@gmail.com">
              <FaEnvelope size={18} className="hover:text-white transition" />
            </a>
          </div>
          </footer>
        </div>
      </body>
    </html>
  );
}