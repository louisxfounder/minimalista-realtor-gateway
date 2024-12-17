import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { removeBackground, loadImage } from "@/utils/imageProcessing";

export const Hero = () => {
  const [email, setEmail] = useState("");
  const [processedLogoUrl, setProcessedLogoUrl] = useState<string>("");

  useEffect(() => {
    const processLogo = async () => {
      try {
        // Fetch the new logo
        const response = await fetch('/lovable-uploads/f45b657b-fa49-4a82-aaa8-585e6f62ac87.png');
        const blob = await response.blob();
        
        // Load the image
        const img = await loadImage(blob);
        
        // Remove background
        const processedBlob = await removeBackground(img);
        
        // Create URL for the processed image
        const processedUrl = URL.createObjectURL(processedBlob);
        setProcessedLogoUrl(processedUrl);
      } catch (error) {
        console.error('Error processing logo:', error);
        // Fallback to original logo if processing fails
        setProcessedLogoUrl('/lovable-uploads/f45b657b-fa49-4a82-aaa8-585e6f62ac87.png');
      }
    };

    processLogo();

    // Cleanup
    return () => {
      if (processedLogoUrl) {
        URL.revokeObjectURL(processedLogoUrl);
      }
    };
  }, []);

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
      <div className="absolute inset-0 bg-black/50" />
      
      <div className="relative h-full container mx-auto px-4 flex flex-col justify-center items-center">
        <div className="max-w-2xl animate-fadeIn text-center px-4">
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-playfair text-white mb-4 md:mb-6">
            Unlocking the Doors to Real Estate Investing
          </h1>
          <p className="text-sm sm:text-base md:text-xl text-white/90 mb-6 md:mb-8">
            With the right guidance, anyone can invest confidently and build lasting wealth.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 w-full max-w-md mx-auto mb-8">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-white/90 border-0 w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button 
              type="submit" 
              className="bg-luxury-gold hover:bg-luxury-gold/90 whitespace-nowrap w-full sm:w-auto"
            >
              Get Started
            </Button>
          </form>

          <div className="flex flex-col items-center justify-center mt-4">
            <p className="text-white/80 text-sm mb-2">Powered by</p>
            <img 
              src={processedLogoUrl || '/lovable-uploads/f45b657b-fa49-4a82-aaa8-585e6f62ac87.png'}
              alt="Home Smart Logo" 
              className="h-12 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};