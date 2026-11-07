import type { Metadata } from "next";

export const metadata: Metadata = { title: "La Sélection — NetworKween" };

export default function Selection() {
  return (
    <div className="page">
      <h1 className="font-display">La Sélection</h1>
      <h2 className="font-display">Pour qui</h2>
      <p>NetworKween s&apos;adresse aux femmes entrepreneures qui :</p>
      <ul>
        <li>préfèrent les petits cercles</li>
        <li>recherchent la profondeur</li>
        <li>n&apos;ont plus envie de forcer</li>
        <li>accordent de la valeur à la qualité humaine</li>
      </ul>
      <p className="soft">Ce cercle n&apos;est pas conçu pour tout le monde.</p>

      <h2 className="font-display">La sélection</h2>
      <p>NetworKween fonctionne par sélection.</p>
      <p>Il ne s&apos;agit pas de chiffre d&apos;affaires.</p>
      <p>Ni de notoriété.</p>
      <p>Ni de statut.</p>
      <p>Il s&apos;agit de posture.</p>
      <p>D&apos;intention.</p>
      <p>De cohérence.</p>
      <p className="accent">Toutes les demandes ne reçoivent pas de suite.</p>
    </div>
  );
}
