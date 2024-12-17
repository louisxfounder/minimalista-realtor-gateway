import { Button } from "@/components/ui/button";

export const About = () => {
  return (
    <section className="py-8 md:py-12 bg-luxury-beige">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center max-w-4xl mx-auto">
          <div className="space-y-3 md:space-y-4 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-playfair text-luxury-dark">
              Vickie Robles
            </h2>
            <p className="text-sm md:text-base text-luxury-dark/80 leading-relaxed">
              Real estate investing doesn't have to feel overwhelming. My team and I have spent years building successful portfolios—rental properties, Airbnbs, and house flips—and we've guided countless clients through every stage of the process. Whether you're buying your first property or expanding your investments, my team and I are here to simplify the journey.
            </p>
            <p className="text-sm md:text-base text-luxury-dark/80 leading-relaxed">
              We bring a transparent, numbers-driven approach and a trusted network of contractors, lenders, and property managers to the table. You'll always have the support you need, with clear communication and the confidence to make informed decisions. Let's unlock the doors to real estate investing together!
            </p>
            <Button className="bg-luxury-gold hover:bg-luxury-gold/90 text-sm px-6 py-2 h-auto">
              Schedule a Consultation
            </Button>
          </div>
          <div className="relative flex justify-center order-first md:order-last">
            <div className="relative w-full max-w-[240px] md:max-w-[280px] h-[320px] md:h-[380px]">
              <img
                src="/lovable-uploads/bcd7f3c2-6c48-4106-aff2-632b0d08acab.png"
                alt="Vickie Robles"
                className="w-full h-full object-cover object-center rounded-lg shadow-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};