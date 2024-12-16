import { Button } from "@/components/ui/button";

export const About = () => {
  return (
    <section className="py-20 bg-luxury-beige">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-playfair text-luxury-dark">
              Vickie Robles
            </h2>
            <p className="text-lg text-luxury-dark/80">
              Vickie Robles is a dedicated real estate professional and active property investor who believes that everyone can unlock the doors to real estate investing. Drawing from firsthand experience building her own portfolio—rental properties, Airbnbs, and successful flips—Vickie guides clients through every stage of the process. Whether you're a first-timer or a seasoned buyer, her transparent, numbers-driven approach and trusted network of contractors, lenders, and property managers ensure you can invest with clarity and confidence.
            </p>
            <Button className="bg-luxury-gold hover:bg-luxury-gold/90">
              Schedule a Consultation
            </Button>
          </div>
          <div className="relative flex justify-center">
            <div className="relative w-[400px] h-[500px]">
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