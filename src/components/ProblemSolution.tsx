import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export const ProblemSolution = () => {
  const { ref, isVisible } = useScrollAnimation(0.3);
  const [expandedProblem, setExpandedProblem] = useState<number | null>(null);
  const [expandedSolution, setExpandedSolution] = useState<number | null>(null);

  const problems = [
    {
      title: "Access locked behind paywalls",
      description: "Only well-funded companies and institutions can afford to train or run advanced AI models. Independent researchers and startups are priced out.",
      expanded: "Cutting-edge AI models cost millions to train and thousands per hour to run, creating an insurmountable barrier for smaller organizations and individuals.",
    },
    {
      title: "Arbitrary censorship & control",
      description: "A handful of corporations decide who gets access, what models can do, and which applications are allowed to exist.",
      expanded: "Corporate AI providers have demonstrated willingness to deny service based on geographic location, political views, or use cases they deem inappropriate.",
    },
    {
      title: "Zero privacy guarantees",
      description: "Your data, prompts, and results are stored on corporate servers. You have no control over how it's used or who sees it.",
      expanded: "Every prompt you send becomes training data. Your proprietary information passes through corporate infrastructure with no guarantee of confidentiality.",
    },
  ];

  const solutions = [
    {
      title: "Open to anyone, anywhere",
      description: "Ritual is a permissionless network. Developers, researchers, and users worldwide can access AI models without approval or gatekeepers.",
      expanded: "No API keys to request, no compliance forms to fill out, no credit checks. If you can connect to the blockchain, you can access state-of-the-art AI.",
    },
    {
      title: "Censorship-resistant by design",
      description: "Built on decentralized infrastructure, Ritual cannot be shut down, restricted, or controlled by any single entity.",
      expanded: "The network is distributed across thousands of nodes globally. No government, corporation, or individual can unilaterally restrict access or censor content.",
    },
    {
      title: "Cryptographically verifiable",
      description: "Every AI computation on Ritual comes with mathematical proof it was executed correctly. Trust through cryptography, not corporate promises.",
      expanded: "Zero-knowledge proofs and trusted execution environments ensure that you can verify AI outputs were computed honestly, even without trusting the hardware provider.",
    },
  ];

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 max-w-7xl mx-auto relative">
          {/* Problem */}
          <div className={`${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 opacity-90">Today's AI Reality</h2>
            <div className="space-y-8 mt-12">
              {problems.map((problem, index) => (
                <div 
                  key={index} 
                  className="space-y-2 p-4 rounded-lg transition-all duration-300 hover:bg-destructive/5 border-l-3 border-transparent hover:border-destructive/50 hover:opacity-70 cursor-pointer"
                  onClick={() => setExpandedProblem(expandedProblem === index ? null : index)}
                >
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-semibold flex-1">{problem.title}</h3>
                    {expandedProblem === index ? (
                      <Minus className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-1" />
                    ) : (
                      <Plus className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-1" />
                    )}
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
                  {expandedProblem === index && (
                    <p className="text-sm text-muted-foreground leading-relaxed pt-2 animate-fade-in-up">
                      {problem.expanded}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Arrow Divider */}
          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl text-gradient-pink">
            <span className="animate-pulse">→</span>
          </div>

          {/* Solution */}
          <div className={`${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              The Ritual <span className="text-gradient">Solution</span>
            </h2>
            <div className="space-y-8 mt-12">
              {solutions.map((solution, index) => (
                <div 
                  key={index} 
                  className="space-y-2 p-4 rounded-lg transition-all duration-300 hover:bg-gradient-purple/5 border-l-3 border-transparent hover:border-gradient-purple cursor-pointer"
                  onClick={() => setExpandedSolution(expandedSolution === index ? null : index)}
                >
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-semibold flex-1">{solution.title}</h3>
                    {expandedSolution === index ? (
                      <Minus className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-1" />
                    ) : (
                      <Plus className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-1" />
                    )}
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{solution.description}</p>
                  {expandedSolution === index && (
                    <p className="text-sm text-muted-foreground leading-relaxed pt-2 animate-fade-in-up">
                      {solution.expanded}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
