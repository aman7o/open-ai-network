import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export const GetStarted = () => {
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
      link: "https://discord.ritual.net",
    },
    {
      tag: "CONTRIBUTE",
      title: "Run a Node",
      description: "Have GPU hardware? Contribute compute power to the Ritual network and earn rewards. Help democratize AI infrastructure while generating passive income from your hardware.",
      button: "Node Setup Guide",
      link: "https://docs.ritual.net/nodes",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-purple rounded-full gradient-blur" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">Get Started with Ritual</h2>
          <p className="text-xl text-muted-foreground">
            Choose your path into the decentralized AI ecosystem
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          {paths.map((path, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
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
                  className="w-full group hover:bg-accent hover:text-accent-foreground hover:border-accent"
                  asChild
                >
                  <a href={path.link} target="_blank" rel="noopener noreferrer">
                    {path.button}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="text-center text-muted-foreground">
          New to Web3? Start with our{" "}
          <a href="#" className="underline hover:text-accent transition-colors">
            Beginner's Guide
          </a>{" "}
          to understand how decentralized AI works.
        </p>
      </div>
    </section>
  );
};
