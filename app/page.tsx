import Crown from "@/components/Crown";

export default function Home() {
  return (
    <section className="hero">
      <Crown className="crown" />
      <h1 className="font-display">NETWORKWEEN</h1>
      <p className="tagline font-display">Un cercle privé de femmes entrepreneures.</p>
      <p className="lead">
        Pensé pour celles qui privilégient
        <br />
        la qualité relationnelle à l&apos;exposition.
      </p>
      <p className="access font-display">Accès par sélection.</p>
      <span className="scroll-line" aria-hidden="true" />
    </section>
  );
}
