import Link from "next/link";
import Crown from "./Crown";

const footerLinks = [
  { href: "/manifeste", label: "Manifeste" },
  { href: "/concept", label: "Concept" },
  { href: "/evenements", label: "Événements" },
  { href: "/selection", label: "Sélection" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <Crown className="crown" />
      <nav aria-label="Navigation de pied de page">
        {footerLinks.map((l) => (
          <Link key={l.href} href={l.href}>
            {l.label}
          </Link>
        ))}
      </nav>
      <small>© 2026 NetworKween</small>
    </footer>
  );
}
