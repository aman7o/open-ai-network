import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Code, Users } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState } from "react";

export const GetStarted = () => {
  const { ref, isVisible } = useScrollAnimation(0.3);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const icons = [Code, Users];
  const paths = [
    {
      tag: "BUILD",
      title: "Start Building",
      description: "Integrate Ritual into your application in minutes. Access AI models from any blockchain or off-chain app using our SDK. Full documentation, code examples, and technical support.",
      button: "Developer Docs",
      link: "https://docs.ritual.net",
    },
    {
      tag: "JOIN",
      title: "Join the Community",
      description: "Connect with thousands of developers, researchers, and AI enthusiasts building the future of decentralized AI. Get support, share ideas, and stay updated on network developments.",
      button: "Discord Community",
      link: "https://discord.gg/ritual-net",
    },
  ];

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-purple rounded-full gradient-blur animate-pulse" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">Get Started with Ritual</h2>
          <p className="text-xl text-muted-foreground">
            Choose your path into the decentralized AI ecosystem
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {paths.map((path, index) => {
            const IconComponent = icons[index];
            return (
              <Card 
                key={index} 
                className={`flex flex-col transition-all duration-300 hover:scale-103 hover:-translate-y-2 hover:border-gradient-purple hover:shadow-2xl ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <CardHeader>
                  <IconComponent 
                    className={`w-10 h-10 mb-4 text-accent transition-all duration-300 ${
                      hoveredCard === index ? 'scale-115 rotate-3' : ''
                    }`}
                  />
                  <div className="text-xs font-bold tracking-wider text-accent mb-2">
                    {path.tag}
                  </div>
                  <CardTitle className="text-2xl">{path.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed mt-4">
                    {path.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <Button 
                    variant="outline" 
                    className="w-full group hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-300"
                    asChild
                  >
                    <a href={path.link} target="_blank" rel="noopener noreferrer">
                      {path.button}
                      <ArrowRight className={`ml-2 h-4 w-4 transition-transform ${
                        hoveredCard === index ? 'translate-x-2' : 'group-hover:translate-x-1'
                      }`} />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
