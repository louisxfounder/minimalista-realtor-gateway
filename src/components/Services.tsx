import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

export const Services = () => {
  const services = [
    {
      title: "First-Time Home Buyers",
      description: "Buying your first home is a significant milestone—and an investment in your future. My team and I are here to make sure you find a home that not only fits your lifestyle but also has the potential to appreciate in value and build long-term equity.",
      benefits: [
        "Step-by-step guidance through the home-buying process",
        "Expert advice on finding homes with appreciation potential",
        "Support to secure equity at the time of purchase"
      ]
    },
    {
      title: "First-Time Investors",
      description: "Entering the world of real estate investment can be overwhelming, but with the right guidance, it can also be highly rewarding. Vickie helps you understand market conditions, assess risks, and ensure your financials are aligned to maximize profit.",
      benefits: [
        "Market analysis and risk assessment tailored for first-time investors",
        "Strategies to ensure profitability",
        "Real-world case studies for better preparation"
      ]
    },
    {
      title: "Experienced Investors",
      description: "When you're ready to scale your portfolio, Vickie offers speed, efficiency, and a sharp focus on market opportunities. With her expertise, you'll receive clear market analyses and property margin projections.",
      benefits: [
        "Detailed market analyses to identify the best opportunities",
        "Strategies for maximizing margins and returns",
        "Efficient, results-driven service"
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-playfair text-luxury-dark mb-6">Who We Serve</h2>
          <p className="text-lg text-luxury-dark/80">
            At Realty Homes, my team and I specialize in providing tailored real estate services to meet your unique needs. Whether you're buying your first home or growing your investment portfolio, we're here to guide you every step of the way. With personalized support and trusted expertise, we'll help you navigate the process with confidence.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-luxury-gold/20 hover:border-luxury-gold transition-colors duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-playfair text-luxury-dark">{service.title}</CardTitle>
                <CardDescription className="text-luxury-dark/70 mt-2">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <h4 className="font-semibold text-luxury-dark mb-4">Key Benefits:</h4>
                <ul className="space-y-3">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-luxury-gold shrink-0 mt-0.5" />
                      <span className="text-luxury-dark/80">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center mt-16">
          <h2 className="text-3xl font-playfair text-luxury-dark mb-6">Why Choose Vickie?</h2>
          <p className="text-lg text-luxury-dark/80">
            With years of experience in real estate and investment strategy, Vickie combines personalized service with market expertise to help you achieve your real estate goals. Whether you're buying your first home or expanding your portfolio, Vickie ensures your success.
          </p>
        </div>
      </div>
    </section>
  );
};