import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

export const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Blurs with Parallax */}
      <div 
        className="absolute top-20 left-0 w-96 h-96 bg-gradient-pink rounded-full gradient-blur"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      />
      <div 
        className="absolute top-40 right-20 w-[500px] h-[500px] bg-gradient-purple rounded-full gradient-blur"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      />
      <div 
        className="absolute bottom-20 left-20 w-[400px] h-[400px] bg-gradient-yellow rounded-full gradient-blur"
        style={{ transform: `translateY(${scrollY * 0.4}px)` }}
      />
      <div 
        className="absolute bottom-40 right-0 w-96 h-96 bg-gradient-blue rounded-full gradient-blur"
        style={{ transform: `translateY(${scrollY * 0.35}px)` }}
      />

      {/* Floating Particles */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-foreground rounded-full floating-particle"
          style={{
            left: `${10 + i * 12}%`,
            opacity: 0.3,
            animationDelay: `${i * 1.5}s`,
            animationDuration: `${8 + i}s`,
          }}
        />
      ))}
      
      <div className="relative z-10 container mx-auto px-4 text-center max-w-5xl animate-fade-in-up">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
          AI Power Should Belong to{" "}
          <span className="text-gradient-glow">Everyone.</span>
        </h1>
        <p className="text-xl md:text-2xl mb-4 text-foreground/80 max-w-3xl mx-auto">
          Ritual makes AI open, verifiable, unstoppable.
        </p>
        <p className="text-base md:text-lg mb-12 text-muted-foreground max-w-2xl mx-auto">
          The future of artificial intelligence is too important to be controlled by three corporations.
        </p>
        <Button 
          size="lg" 
          className="group bg-accent hover:bg-accent/90 hover:scale-105 text-accent-foreground font-semibold px-8 py-6 text-lg rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Get Started
          <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </section>
  );
};
