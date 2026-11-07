import type { Metadata } from "next";
import "@fontsource/cormorant-garamond/300.css";
import "@fontsource/cormorant-garamond/400.css";
import "@fontsource/cormorant-garamond/300-italic.css";
import "@fontsource-variable/inter";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://networkween.com"),
  title: "NetworKween — Cercle privé de femmes entrepreneures",
  description:
    "NetworKween est un cercle privé de femmes entrepreneures. Pensé pour celles qui privilégient la qualité relationnelle à l'exposition. Accès par sélection.",
  authors: [{ name: "NetworKween" }],
  openGraph: {
    title: "NetworKween — Cercle privé de femmes entrepreneures",
    description:
      "Un espace choisi. Les rencontres ne sont pas nombreuses. Elles sont justes.",
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "NetworKween",
    description: "Cercle privé de femmes entrepreneures. Accès par sélection.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
