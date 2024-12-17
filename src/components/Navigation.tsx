import { useState } from "react";
import { Menu, X, Home, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "Home", icon: <Home className="w-4 h-4" />, href: "/" },
    { label: "Contact", icon: <Mail className="w-4 h-4" />, href: "#contact" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-luxury-gold/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <span className="text-lg md:text-xl font-playfair text-luxury-dark">Vickie Robles</span>

          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center space-x-1 text-luxury-dark/80 hover:text-luxury-gold transition-colors"
              >
                {item.icon}
                <span>{item.label}</span>
              </a>
            ))}
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-luxury-dark hover:text-luxury-gold"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 animate-fadeIn">
            <div className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center space-x-2 text-luxury-dark/80 hover:text-luxury-gold transition-colors px-2 py-1"
                  onClick={() => setIsOpen(false)}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};