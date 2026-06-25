import Hero from "@/components/hero";
import About from "@/components/about";
import Work from "@/components/work";
import Services from "@/components/services";
import Experience from "@/components/experience";
import Pricing from "@/components/pricing";
import CTA from "@/components/cta";
export default function page() {
  return (
    <>
      <Hero />
      <About />
      <Work />
      <Services />
      <Experience />
      <Pricing />
      <CTA />
    </>
  );
}
