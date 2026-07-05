import { Hero } from "@/components/marketing/hero";
import { ProblemSolution } from "@/components/marketing/problem-solution";
import { HowItWorks } from "@/components/marketing/how-it-works";
import { PlatformShowcase } from "@/components/marketing/platform-showcase";
import { WhoItsFor } from "@/components/marketing/who-its-for";
import { Differentiator } from "@/components/marketing/differentiator";
import { AvailabilityCta } from "@/components/marketing/availability-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemSolution />
      <HowItWorks />
      <PlatformShowcase />
      <WhoItsFor />
      <Differentiator />
      <AvailabilityCta />
    </>
  );
}
