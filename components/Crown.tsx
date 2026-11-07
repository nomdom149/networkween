/** Couronne NetworKween (PNG détouré, fond transparent). */
export default function Crown({ className }: { className?: string }) {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src="/crown.png" alt="" aria-hidden="true" className={className} />;
}
