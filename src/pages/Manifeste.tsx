import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Manifeste as ManifestSection } from "@/components/Manifeste";
import { PageHero } from "@/components/PageHero";

const ManifestePage = () => {
  return (
    <main className="bg-midnight min-h-screen">
      <Navigation />
      <PageHero title="Manifeste" />
      <ManifestSection showDivider={false} />
      <Footer />
    </main>
  );
};

export default ManifestePage;
