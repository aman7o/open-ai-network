import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Blurs */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-gradient-pink rounded-full gradient-blur" />
      <div className="absolute top-40 right-20 w-[500px] h-[500px] bg-gradient-purple rounded-full gradient-blur" />
      <div className="absolute bottom-20 left-20 w-[400px] h-[400px] bg-gradient-yellow rounded-full gradient-blur" />
      <div className="absolute bottom-40 right-0 w-96 h-96 bg-gradient-blue rounded-full gradient-blur" />
      
      <div className="relative z-10 container mx-auto px-4 text-center max-w-5xl">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
          AI Power Should Belong to{" "}
          <span className="text-gradient">Everyone.</span>
        </h1>
        <p className="text-xl md:text-2xl mb-4 text-foreground/80 max-w-3xl mx-auto">
          Ritual makes AI open, verifiable, unstoppable.
        </p>
        <p className="text-base md:text-lg mb-12 text-muted-foreground max-w-2xl mx-auto">
          The future of artificial intelligence is too important to be controlled by three corporations.
        </p>
        <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-lg rounded-full">
          Get Started
        </Button>
      </div>
    </section>
  );
};
