import type { Metadata } from "next";

export const metadata: Metadata = { title: "Contact — NetworKween" };

export default function Contact() {
  return (
    <div className="page">
      <h1 className="font-display">Manifester son intérêt</h1>
      <p>NetworKween n&apos;ouvre pas ses portes.</p>
      <p className="accent">Elle les entrouvre.</p>
      <div className="divider" />
      <p className="soft">
        Manifester son intérêt
        <br />
        ne garantit pas l&apos;accès.
      </p>
      <a className="btn" href="mailto:contact@networkween.com">
        Écrire
      </a>
    </div>
  );
}
