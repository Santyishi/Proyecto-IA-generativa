import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { CoffeeGrid } from "@/components/sections/CoffeeGrid";
import { Prompts } from "@/components/sections/Prompts";
import { AudioSection } from "@/components/sections/AudioSection";
import { ModelSection } from "@/components/sections/ModelSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fbf5ea] text-[#2c1810]">
      <Navbar />

      <div className="flex flex-col">
        <Hero />
        <Features />
        <CoffeeGrid />
        <Prompts />
        <AudioSection />
        <ModelSection />
      </div>

      <Footer />
    </main>
  );
}
