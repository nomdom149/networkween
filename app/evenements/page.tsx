import type { Metadata } from "next";

export const metadata: Metadata = { title: "Événements — NetworKween" };

export default function Evenements() {
  return (
    <div className="page">
      <h1 className="font-display">Événements</h1>
      <h2 className="font-display">Les rencontres</h2>
      <p>Formats confidentiels.</p>
      <p>Peu de participantes.</p>
      <p>Lieux choisis.</p>
      <p>Atmosphère calme.</p>
      <p>Les événements ne sont pas publics.</p>
      <p>Les invitations sont ciblées.</p>

      <h2 className="font-display">Événements à venir</h2>
      <p className="soft">Les prochains rendez-vous ne sont pas annoncés publiquement.</p>
      <p className="accent">
        Ils sont proposés directement
        <br />
        aux femmes invitées ou sélectionnées.
      </p>
    </div>
  );
}
