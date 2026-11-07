"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Crown from "./Crown";

export const links = [
  { href: "/manifeste", label: "Manifeste" },
  { href: "/concept", label: "Concept" },
  { href: "/evenements", label: "Événements" },
  { href: "/selection", label: "Sélection" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  return (
    <header className="nav">
      <Link href="/" className="nav-logo">
        <Crown />
        <span className="font-display">NETWORKWEEN</span>
      </Link>
      <nav className="nav-links" aria-label="Navigation principale">
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            aria-current={pathname === l.href ? "page" : undefined}
          >
            {l.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
