import { Button } from "@/components/ui/button";

export const About = () => {
  return (
    <section className="py-20 bg-luxury-beige">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-playfair text-luxury-dark">
              Sarah Anderson
            </h2>
            <p className="text-lg text-luxury-dark/80">
              With over 15 years of experience in luxury real estate, I specialize in helping discerning clients find their perfect home. My deep knowledge of the local market and commitment to personalized service ensures a seamless experience from start to finish.
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
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
              alt="Sarah Anderson"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};