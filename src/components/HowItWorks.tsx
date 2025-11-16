import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Check, Info } from "lucide-react";
import { useState } from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export const HowItWorks = () => {
  const { ref, isVisible } = useScrollAnimation(0.3);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const steps = [
    {
      number: "1",
      title: "REQUEST",
      subtitle: "Submit Your AI Job",
      description: "A developer or application submits an AI task to the Ritual network—this could be running inference on a language model, generating an image, or fine-tuning a model. The request is broadcast to the network through a smart contract.",
      note: "Jobs can originate from any blockchain or off-chain application via Ritual's cross-chain SDK.",
    },
    {
      number: "2",
      title: "COMPUTE",
      subtitle: "Decentralized Processing",
      description: "A global network of GPU providers—from individuals with gaming rigs to data centers—compete to execute your task. The network routes jobs to available, qualified nodes based on hardware requirements, reputation, and price.",
      note: "Unlike centralized APIs, no single provider controls the infrastructure. If one node fails, another takes over.",
    },
    {
      number: "3",
      title: "VERIFY",
      subtitle: "Cryptographic Proof",
      description: "The compute node returns your result along with a cryptographic proof that the model ran honestly. This proof is verified on-chain, ensuring the computation was executed correctly without requiring you to trust the provider.",
      note: "Ritual uses a combination of Zero-Knowledge proofs, optimistic verification, and TEEs depending on the model type.",
      tooltip: "Verification means you can mathematically prove the AI model ran honestly—even if you don't trust the machine running it. This is impossible with traditional APIs like OpenAI, where you simply have to trust their servers.",
    },
  ];

  return (
    <section ref={ref} className="py-24 bg-secondary/50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-purple rounded-full gradient-blur animate-pulse" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-muted-foreground">
            Ritual enables trustless AI execution in three simple steps
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-16 relative">
          {/* Connecting Line */}
          {isVisible && (
            <div className="hidden md:block absolute left-[60px] top-[80px] bottom-[80px] w-1">
              <div 
                className="h-full bg-gradient-to-b from-accent via-gradient-purple to-gradient-pink animate-fade-in-up"
                style={{ animationDuration: '1.5s' }}
              />
            </div>
          )}

          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`grid md:grid-cols-[120px_1fr] gap-8 items-start hover-lift ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
              onMouseEnter={() => setHoveredStep(index)}
              onMouseLeave={() => setHoveredStep(null)}
            >
              <div className="flex items-center justify-center relative z-10">
                <div 
                  className={`w-20 h-20 rounded-full bg-accent flex items-center justify-center transition-all duration-300 ${
                    hoveredStep === index ? 'scale-110 rotate-360 shadow-lg shadow-accent/50' : ''
                  }`}
                >
                  {hoveredStep === index ? (
                    <Check className="w-10 h-10 text-accent-foreground" />
                  ) : (
                    <span className="text-4xl font-bold text-accent-foreground">{step.number}</span>
                  )}
                </div>
              </div>
              
              <div className={`space-y-4 p-6 rounded-lg transition-all duration-300 ${
                hoveredStep === index ? 'bg-card/50 shadow-xl border border-gradient-purple/30 -translate-y-2' : ''
              }`}>
                <div>
                  <div className={`text-sm font-semibold tracking-wider text-muted-foreground mb-1 transition-colors ${
                    hoveredStep === index ? 'text-gradient-purple' : ''
                  }`}>
                    {step.title}
                  </div>
                  <h3 className={`text-2xl md:text-3xl font-bold mb-3 transition-colors ${
                    hoveredStep === index ? 'text-gradient' : ''
                  }`}>{step.subtitle}</h3>
                </div>
                <p className="text-lg leading-relaxed text-foreground/90">{step.description}</p>
                {step.tooltip && (
                  <div className="p-4 bg-accent/10 rounded-lg border-l-4 border-accent relative">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Info className="w-4 h-4 text-accent absolute top-4 right-4 animate-pulse cursor-help" />
                        </TooltipTrigger>
                        <TooltipContent className="max-w-xs">
                          <p className="text-sm">{step.tooltip}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                    <p className="text-sm leading-relaxed text-foreground/80 pr-8">{step.tooltip}</p>
                  </div>
                )}
                <p className="text-sm italic text-muted-foreground">{step.note}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-20">
          <p className="text-xl font-medium">
            Trustless AI execution, powered by cryptography—not corporate promises.
          </p>
        </div>
      </div>
    </section>
  );
};
