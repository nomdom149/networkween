import type { Metadata } from "next";

export const metadata: Metadata = { title: "Manifeste — NetworKween" };

export default function Manifeste() {
  return (
    <div className="page">
      <h1 className="font-display">Manifeste</h1>
      <p>Certaines femmes n&apos;ont plus envie de se vendre.</p>
      <p>Ni de se justifier.</p>
      <p>Ni de surjouer.</p>
      <div className="divider" />
      <p>Elles savent écouter.</p>
      <p>Elles savent ressentir.</p>
      <p>Elles savent reconnaître une rencontre juste.</p>
      <div className="divider" />
      <p>NetworKween est né de cette posture.</p>
      <p>L&apos;intention relationnelle précède toute attente.</p>
      <p>La présence compte plus que la performance.</p>
      <p>La relation passe avant l&apos;opportunité.</p>
      <div className="divider" />
      <p className="accent">
        Tout n&apos;est pas dit.
        <br />
        Et c&apos;est volontaire.
      </p>
    </div>
  );
}
