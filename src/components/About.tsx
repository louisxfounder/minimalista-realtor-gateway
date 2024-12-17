import { Button } from "@/components/ui/button";

export const About = () => {
  return (
    <section className="py-12 md:py-20 bg-luxury-beige">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-4 md:space-y-6 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-playfair text-luxury-dark">
              Vickie Robles
            </h2>
            <p className="text-base md:text-lg text-luxury-dark/80">
              Real estate investing doesn't have to feel overwhelming. My team and I have spent years building successful portfolios—rental properties, Airbnbs, and house flips—and we've guided countless clients through every stage of the process. Whether you're buying your first property or expanding your investments, my team and I are here to simplify the journey.
            </p>
            <p className="text-base md:text-lg text-luxury-dark/80">
              We bring a transparent, numbers-driven approach and a trusted network of contractors, lenders, and property managers to the table. You'll always have the support you need, with clear communication and the confidence to make informed decisions. Let's unlock the doors to real estate investing together!
            </p>
            <Button className="bg-luxury-gold hover:bg-luxury-gold/90 w-full md:w-auto">
              Schedule a Consultation
            </Button>
          </div>
          <div className="relative flex justify-center order-first md:order-last">
            <div className="relative w-full max-w-[300px] md:max-w-[400px] h-[400px] md:h-[500px]">
              <img
                src="/lovable-uploads/bcd7f3c2-6c48-4106-aff2-632b0d08acab.png"
                alt="Vickie Robles"
                className="w-full h-full object-cover object-center rounded-[2rem]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};