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
              Vickie Robles is a dedicated real estate professional and active property investor who believes that everyone can unlock the doors to real estate investing. Drawing from firsthand experience building her own portfolio—rental properties, Airbnbs, and successful flips—Vickie guides clients through every stage of the process. Whether you're a first-timer or a seasoned buyer, her transparent, numbers-driven approach and trusted network of contractors, lenders, and property managers ensure you can invest with clarity and confidence. With Vickie by your side, you'll gain the knowledge, support, and peace of mind needed to turn your real estate dreams into a thriving reality.
            </p>
            <div className="flex gap-8 text-luxury-dark/80">
              <div>
                <p className="text-3xl font-playfair">150+</p>
                <p className="text-sm">Properties Sold</p>
              </div>
              <div>
                <p className="text-3xl font-playfair">$200M+</p>
                <p className="text-sm">In Sales</p>
              </div>
              <div>
                <p className="text-3xl font-playfair">15+</p>
                <p className="text-sm">Years Experience</p>
              </div>
            </div>
            <Button className="bg-luxury-gold hover:bg-luxury-gold/90">
              Schedule a Consultation
            </Button>
          </div>
          <div className="relative flex justify-center">
            <div className="relative w-[400px] h-[500px] overflow-hidden">
              <div 
                className="absolute top-0 left-0 right-0 h-[200px] rounded-t-[200px] border-8 border-white bg-white"
                style={{ boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
              ></div>
              <div 
                className="absolute top-[192px] left-0 right-0 bottom-0 border-x-8 border-b-8 border-white bg-white"
                style={{ boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
              ></div>
              <img
                src="/lovable-uploads/8755b63a-7d2f-4bac-a5e9-a01d8a2b0c47.png"
                alt="Vickie Robles"
                className="w-full h-full object-cover object-center relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};