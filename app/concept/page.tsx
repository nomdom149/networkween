import type { Metadata } from "next";

export const metadata: Metadata = { title: "Le Concept — NetworKween" };

export default function Concept() {
  return (
    <div className="page">
      <h1 className="font-display">Le Concept</h1>
      <h2 className="font-display">Une intuition relationnelle</h2>
      <p>Chez NetworKween, on ne vient pas chercher des contrats.</p>
      <p>On vient poser une intention relationnelle.</p>
      <p>Être disponible à l&apos;échange.</p>
      <p>Écouter sans stratégie immédiate.</p>
      <p>Observer ce qui résonne.</p>
      <p>Laisser émerger.</p>
      <p>Les mises en relation sont privilégiées.</p>
      <p>Les contrats ne sont jamais un objectif.</p>

      <h2 className="font-display">Le cadre</h2>
      <p>Groupes volontairement restreints.</p>
      <p>Absence de pitch imposé.</p>
      <p>Temps long.</p>
      <p>Confidentialité des échanges.</p>
      <p className="accent">Ce cadre n&apos;est pas négociable.</p>

      <h2 className="font-display">Ce que NetworKween n&apos;est pas</h2>
      <p>NetworKween n&apos;est pas :</p>
      <ul>
        <li>un networking ouvert</li>
        <li>un espace de prospection</li>
        <li>un accélérateur de ventes</li>
        <li>un outil de visibilité</li>
      </ul>
      <p className="soft">
        Si c&apos;est ce que tu cherches,
        <br />
        ce lieu ne te conviendra pas.
      </p>
    </div>
  );
}
