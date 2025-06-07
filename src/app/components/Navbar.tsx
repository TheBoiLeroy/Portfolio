"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Download } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Timeline", href: "/timeline" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="w-full fixed top-0 left-0 backdrop-blur bg-white/30 text-gray-900 px-6 py-4 flex items-center justify-between z-50 shadow">
      <h1 className="font-mono text-2xl font-bold">Ian Santos</h1>

      <div className="flex items-center space-x-8">
          <ul className="flex items-center space-x-6 font-mono text-sm">
          {navItems.map(({ name, href }) => (
            <li key={href}>
              <Link
                href={href}
                  className={`hover:text-blue-600 transition-colors duration-150 ${pathname === href ? "text-blue-600" : ""}`}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>

          <Link
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-400 hover:border-gray-600 px-3 py-1 rounded-md text-sm flex items-center gap-2"
          >
            <Download size={16} /> Resume
          </Link>
      </div>
    </nav>
  );
}