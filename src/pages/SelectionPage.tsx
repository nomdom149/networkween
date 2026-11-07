import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ForWho } from "@/components/ForWho";
import { Selection } from "@/components/Selection";
import { PageHero } from "@/components/PageHero";

const SelectionPage = () => {
  return (
    <main className="bg-midnight min-h-screen">
      <Navigation />
      <PageHero title="La Sélection" />
      <ForWho showDivider={false} />
      <Selection showDivider={false} />
      <Footer />
    </main>
  );
};

export default SelectionPage;
