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
    <section className="py-20 luxury-gradient" id="contact">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-playfair mb-4">Get in Touch</h2>
          <p className="text-luxury-dark/80">
            Ready to find your dream home? Let's start a conversation.
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Input
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
            <Input
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>
          <Input
            placeholder="Phone Number"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            required
          />
          <Textarea
            placeholder="Your Message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
            className="min-h-[120px]"
          />
          <Button type="submit" className="w-full bg-luxury-gold hover:bg-luxury-gold/90">
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
};