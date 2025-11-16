import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState } from "react";

export const WhyItMatters = () => {
  const { ref, isVisible } = useScrollAnimation(0.4);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const useCases = [
    {
      tag: "DEFI INTELLIGENCE",
      title: "AI-Powered Smart Contracts",
      description: "Decentralized finance protocols can now use AI to make intelligent decisions on-chain. Risk assessment models can analyze borrower behavior, market conditions, and protocol health in real-time—all with cryptographic proof the analysis was performed correctly. Lending protocols can adjust interest rates dynamically. DEXs can optimize liquidity. Insurance protocols can automate claims processing.",
      why: "Traditional DeFi relies on simple rules and oracles. Ritual brings machine learning intelligence directly on-chain, creating truly adaptive protocols.",
    },
    {
      tag: "UNCENSORABLE CREATION",
      title: "Generative AI No One Can Shut Down",
      description: "Artists, writers, and creators can access powerful generative AI models without fear of arbitrary deplatforming. Create text, images, music, or video using open-source models hosted on decentralized infrastructure. No corporate content policies. No sudden API shutdowns. No geographic restrictions.",
      why: "Centralized AI providers have already demonstrated willingness to censor certain types of content and deny service to users in specific countries. Ritual makes creative AI unstoppable.",
    },
    {
      tag: "VERIFIABLE AGENTS",
      title: "Autonomous AI You Can Trust",
      description: "Deploy AI agents that can hold crypto wallets, execute transactions, and make decisions on your behalf—with mathematical proof of their actions. These agents can trade, manage portfolios, interact with DeFi protocols, or automate complex workflows. Every action is verifiable and auditable on-chain.",
      why: "Today's AI agents require blind trust. Ritual's verifiable execution means you can delegate significant responsibility to AI while maintaining cryptographic guarantees about their behavior.",
    },
  ];

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-yellow rounded-full gradient-blur animate-pulse" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">Why This Matters</h2>
          <p className="text-xl text-muted-foreground">
            Ritual unlocks AI capabilities impossible with centralized infrastructure
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {useCases.map((useCase, index) => (
            <Card 
              key={index} 
              className={`border-2 hover:border-accent transition-all duration-300 hover-tilt ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ 
                animationDelay: `${index * 0.2}s`,
                boxShadow: hoveredCard === index 
                  ? '0 8px 32px rgba(139, 124, 246, 0.25)' 
                  : '0 4px 12px rgba(0,0,0,0.1)'
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <CardHeader>
                <div className="text-xs font-bold tracking-wider text-accent mb-2">
                  {useCase.tag}
                </div>
                <CardTitle className={`text-2xl transition-all duration-300 ${
                  isVisible && hoveredCard === index ? 'animate-fade-in-up' : ''
                }`}>{useCase.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className={`text-base leading-relaxed transition-all duration-300 ${
                  isVisible ? 'animate-fade-in-up' : ''
                }`} style={{ animationDelay: `${index * 0.2 + 0.2}s` }}>
                  {useCase.description}
                </CardDescription>
                <div className={`pt-4 border-t transition-all duration-300 ${
                  isVisible ? 'animate-fade-in-up' : ''
                }`} style={{ animationDelay: `${index * 0.2 + 0.4}s` }}>
                  <p className="text-sm font-semibold mb-2">Why it matters:</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{useCase.why}</p>
                </div>
                <Button 
                  variant="ghost" 
                  className="w-full group hover:bg-accent/10 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
