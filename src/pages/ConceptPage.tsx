import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Concept } from "@/components/Concept";
import { Cadre } from "@/components/Cadre";
import { NotFor } from "@/components/NotFor";
import { PageHero } from "@/components/PageHero";

const ConceptPage = () => {
  return (
    <main className="bg-midnight min-h-screen">
      <Navigation />
      <PageHero title="Le Concept" />
      <Concept showDivider={false} alternateTitle={true} />
      <Cadre showDivider={false} />
      <NotFor showDivider={false} />
      <Footer />
    </main>
  );
};

export default ConceptPage;
