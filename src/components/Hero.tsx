import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "sonner";

export const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", email);
    toast.success("Thank you! We'll be in touch soon.");
    setEmail("");
  };

  return (
    <div className="relative h-[calc(100vh-4rem)] min-h-[500px] w-full">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/lovable-uploads/b961559b-14ad-47b1-9f1c-49bdd76ce49c.png')"
        }}
      />
      <div className="absolute inset-0 bg-black/50" /> {/* Increased opacity from 30% to 50% */}
      
      <div className="relative h-full container mx-auto px-4 flex flex-col justify-center items-center">
        <div className="max-w-2xl animate-fadeIn text-center">
          <h1 className="text-3xl md:text-6xl font-playfair text-white mb-4 md:mb-6">
            Unlocking the Doors to Real Estate Investing
          </h1>
          <p className="text-base md:text-xl text-white/90 mb-6 md:mb-8">
            With the right guidance, anyone can invest confidently and build lasting wealth.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 w-full max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-white/90 border-0"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button type="submit" className="bg-luxury-gold hover:bg-luxury-gold/90 whitespace-nowrap">
              Get Started
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};