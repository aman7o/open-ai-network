export const Vision = () => {
  const features = [
    {
      title: "Permissionless and open",
      description: "Anyone, anywhere can access state-of-the-art AI models. No API keys, no approval process, no corporate gatekeepers. If you can connect to the internet, you can use Ritual.",
    },
    {
      title: "Provably correct",
      description: "Unlike traditional APIs where you blindly trust the provider, Ritual gives you cryptographic proof your computation was executed honestly. Trust is replaced by mathematical certainty.",
    },
    {
      title: "Community-governed",
      description: "The network is owned and operated by its participants, not a corporation. Protocol decisions, fee structures, and model whitelisting are determined by the community through decentralized governance.",
    },
  ];

  return (
    <section className="py-24 bg-secondary/50 relative overflow-hidden">
      <div className="absolute top-0 left-20 w-[400px] h-[400px] bg-gradient-pink rounded-full gradient-blur" />
      <div className="absolute bottom-0 right-20 w-[400px] h-[400px] bg-gradient-blue rounded-full gradient-blur" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <blockquote className="text-4xl md:text-5xl font-bold text-center mb-12 leading-tight">
            "AI should be a public good, not a corporate monopoly."
          </blockquote>

          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground mb-12">
            <p>
              The most transformative technology of our generation is being controlled by a handful of companies. They decide who gets access, what you can build, and how much you'll pay. This concentration of power stifles innovation, enables censorship, and threatens the open internet.
            </p>
            <p className="font-semibold text-foreground">
              Ritual is building the infrastructure layer that changes this.
            </p>
          </div>

          <div className="space-y-8 mb-12">
            <h3 className="text-2xl font-bold">What Ritual enables:</h3>
            {features.map((feature, index) => (
              <div key={index} className="space-y-2">
                <h4 className="text-xl font-semibold">{feature.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          <p className="text-lg leading-relaxed text-foreground/90 border-l-4 border-accent pl-6">
            Ritual isn't just another AI platform. It's the foundation for an open, verifiable, and unstoppable AI ecosystem—built on the principles that made the internet great in the first place.
          </p>
        </div>
      </div>
    </section>
  );
};
