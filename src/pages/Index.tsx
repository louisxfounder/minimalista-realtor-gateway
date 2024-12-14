import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { FloatingContact } from "@/components/FloatingContact";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Testimonials />
      <Contact />
      <FloatingContact />
    </main>
  );
};

export default Index;