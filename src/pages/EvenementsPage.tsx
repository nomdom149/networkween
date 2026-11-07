import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Events } from "@/components/Events";
import { PageHero } from "@/components/PageHero";

const EvenementsPage = () => {
  return (
    <main className="bg-midnight min-h-screen">
      <Navigation />
      <PageHero title="Événements" />
      <Gallery showDivider={false} />
      <Events showDivider={false} />
      <Footer />
    </main>
  );
};

export default EvenementsPage;
