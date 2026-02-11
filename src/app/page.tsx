import Hero from "@/components/sections/Hero";
import ImpactTicker from "@/components/sections/ImpactTicker";
import ChainDiagram from "@/components/sections/ChainDiagram";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <ImpactTicker />
      <ChainDiagram />
    </main>
  );
}
