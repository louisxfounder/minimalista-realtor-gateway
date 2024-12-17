import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    toast.success("Thank you for your message! We'll be in touch soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section className="py-12 md:py-20 luxury-gradient" id="contact">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair mb-4 md:mb-6">Ready to Unlock Your Real Estate Potential?</h2>
          <p className="text-luxury-dark/80 leading-relaxed text-sm md:text-base">
            Take the first step toward confident and profitable investing by connecting with our team today. Whether you're just starting out or looking to expand your portfolio, we provide the guidance, resources, and market insights you need. Complete the form below to schedule your free strategy session, clarify your goals, and explore the opportunities that await you. Let's work together to achieve your real estate success.
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4 md:space-y-6">
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            <Input
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="w-full"
            />
            <Input
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="w-full"
            />
          </div>
          <Input
            placeholder="Phone Number"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            required
            className="w-full"
          />
          <Textarea
            placeholder="Your Message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
            className="min-h-[120px] w-full"
          />
          <Button type="submit" className="w-full md:w-auto bg-luxury-gold hover:bg-luxury-gold/90">
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
};