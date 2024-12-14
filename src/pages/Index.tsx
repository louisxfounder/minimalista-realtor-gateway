import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { FloatingContact } from "@/components/FloatingContact";
import { Navigation } from "@/components/Navigation";

const Index = () => {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-16">
        <Hero />
        <About />
        <Testimonials />
        <Contact />
        <FloatingContact />
      </main>
    </>
  );
};

export default Index;