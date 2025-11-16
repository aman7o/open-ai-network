export const ProblemSolution = () => {
  const problems = [
    {
      title: "Access locked behind paywalls",
      description: "Only well-funded companies and institutions can afford to train or run advanced AI models. Independent researchers and startups are priced out.",
    },
    {
      title: "Arbitrary censorship & control",
      description: "A handful of corporations decide who gets access, what models can do, and which applications are allowed to exist.",
    },
    {
      title: "Zero privacy guarantees",
      description: "Your data, prompts, and results are stored on corporate servers. You have no control over how it's used or who sees it.",
    },
  ];

  const solutions = [
    {
      title: "Open to anyone, anywhere",
      description: "Ritual is a permissionless network. Developers, researchers, and users worldwide can access AI models without approval or gatekeepers.",
    },
    {
      title: "Censorship-resistant by design",
      description: "Built on decentralized infrastructure, Ritual cannot be shut down, restricted, or controlled by any single entity.",
    },
    {
      title: "Cryptographically verifiable",
      description: "Every AI computation on Ritual comes with mathematical proof it was executed correctly. Trust through cryptography, not corporate promises.",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 max-w-7xl mx-auto">
          {/* Problem */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Today's AI Reality</h2>
            <div className="space-y-8 mt-12">
              {problems.map((problem, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="text-xl font-semibold">{problem.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Solution */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              The Ritual <span className="text-gradient">Solution</span>
            </h2>
            <div className="space-y-8 mt-12">
              {solutions.map((solution, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="text-xl font-semibold">{solution.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{solution.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
