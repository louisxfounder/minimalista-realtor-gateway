import { Phone } from "lucide-react";
import { Button } from "./ui/button";

export const FloatingContact = () => {
  return (
    <a
      href="tel:+1234567890"
      className="fixed bottom-8 right-8 z-50 animate-fadeIn"
    >
      <Button className="bg-luxury-gold hover:bg-luxury-gold/90 rounded-full h-16 w-16 shadow-lg">
        <Phone className="h-6 w-6" />
      </Button>
    </a>
  );
};