
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

import Hero from "@/components/sections/hero";
import TrustBar from "@/components/sections/trust-bar";
import Services from "@/components/sections/services";
import SelectedWork from "@/components/sections/selected-work";
import Process from "@/components/sections/process";
import Stats from "@/components/sections/stats";
import CaseStudies from "@/components/sections/case-studies";
import ContactCTA from "@/components/sections/contact-cta";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <TrustBar />

      <Services />

      <SelectedWork />

      <Process />

      <Stats />

      <CaseStudies />

      <ContactCTA />

      <Footer />
    </>
  );
}
