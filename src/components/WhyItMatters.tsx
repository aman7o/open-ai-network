import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const WhyItMatters = () => {
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
    <section className="py-24 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-yellow rounded-full gradient-blur" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">Why This Matters</h2>
          <p className="text-xl text-muted-foreground">
            Ritual unlocks AI capabilities impossible with centralized infrastructure
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {useCases.map((useCase, index) => (
            <Card key={index} className="border-2 hover:border-accent transition-colors duration-300">
              <CardHeader>
                <div className="text-xs font-bold tracking-wider text-accent mb-2">
                  {useCase.tag}
                </div>
                <CardTitle className="text-2xl">{useCase.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base leading-relaxed">
                  {useCase.description}
                </CardDescription>
                <div className="pt-4 border-t">
                  <p className="text-sm font-semibold mb-2">Why it matters:</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{useCase.why}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
