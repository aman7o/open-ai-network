import { Header } from "@/components/Header";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Hero } from "@/components/Hero";
import { ProblemSolution } from "@/components/ProblemSolution";
import { HowItWorks } from "@/components/HowItWorks";
import { WhyItMatters } from "@/components/WhyItMatters";
import { Vision } from "@/components/Vision";
import { GetStarted } from "@/components/GetStarted";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <Header />
      <Hero />
      <ProblemSolution />
      <HowItWorks />
      <WhyItMatters />
      <Vision />
      <GetStarted />
      <Footer />
    </div>
  );
};

export default Index;
