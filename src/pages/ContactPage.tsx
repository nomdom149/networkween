import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Contact } from "@/components/Contact";
import { PageHero } from "@/components/PageHero";

const ContactPage = () => {
  return (
    <main className="bg-midnight min-h-screen">
      <Navigation />
      <PageHero title="Manifester son intérêt" />
      <Contact showFooter={false} showTitle={false} />
      <Footer />
    </main>
  );
};

export default ContactPage;
