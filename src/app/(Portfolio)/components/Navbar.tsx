"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Burger, Button } from "@mantine/core";
import { Download } from "lucide-react";
import styles from "./navbar.module.css";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Timeline", href: "/timeline" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    setOpened(false);
  }, [pathname]);

  const links = navItems.map(({ name, href }) => (
    <Link
      key={href}
      href={href}
      className={`${styles.navLink} ${pathname === href ? styles.active : ""}`}
    >
      {name}
    </Link>
  ));

  return (
    <nav className={styles.nav} aria-label="Primary navigation">
      <div className={styles.bar}>
        <Link href="/" className={styles.brand} aria-label="Ian Santos — home">
          <span className={styles.brandMark}>IS</span>
          <span>Ian Santos</span>
        </Link>

        <div className={styles.desktopNav}>
          {links}
          <Button
            component={Link}
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            radius="xl"
            leftSection={<Download size={15} />}
            className={styles.resumeButton}
          >
            Résumé
          </Button>
        </div>

        <Burger
          opened={opened}
          onClick={() => setOpened((value) => !value)}
          aria-label={opened ? "Close navigation" : "Open navigation"}
          color="white"
          size="sm"
          className={styles.burger}
        />
      </div>

      {opened && (
        <div className={styles.mobileMenu}>
          {links}
          <Button
            component={Link}
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            radius="xl"
            leftSection={<Download size={15} />}
            className={styles.mobileResume}
          >
            Open résumé
          </Button>
        </div>
      )}
    </nav>
  );
}
