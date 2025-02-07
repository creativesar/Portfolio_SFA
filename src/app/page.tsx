
import About from "@/components/About";
import Hero from "@/components/Hero";
import PortfolioSection from "@/components/Portfolio";
import Services from "@/components/Services";
import TestimonialsSection from "@/components/Testiomonials";
import Image from "next/image";
import Form from "@/components/Form";

export default function Home() {
  return (
    <div>
     <Hero />
     <About />
     <Services />
     <PortfolioSection />
     <TestimonialsSection />
     <Form />
    </div>
  );
}
