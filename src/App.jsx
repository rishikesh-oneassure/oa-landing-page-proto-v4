import Founder from "@/components/AboutNew/components/Founder";
import founderSection from "@/components/AboutNew/founder";
import TestimonialsTickerSection from "@/components/globals/DesignSystemV1/TestimonialsTickerSection";
import testimonialsSection from "@/components/globals/DesignSystemV1/testimonials";
import ProLayout from "@/layouts/ProLayout";
import Hero from "./components/OneAssureProPage/components/Hero";
import Impact from "./components/Impact/Impact";
import WhyOneAssure from "./components/WhyOneAssure/WhyOneAssure";
import WhatToExpect from "./components/WhatToExpect/WhatToExpect";
import BeReady from "./components/BeReady/BeReady";

export default function App() {
  return (
    <ProLayout>
      <Hero />
      <TestimonialsTickerSection
        {...testimonialsSection}
        className="md:!my-20"
      />
      <Founder {...founderSection} />
      <Impact />
      <WhyOneAssure />
      <WhatToExpect />
      <BeReady />
    </ProLayout>
  );
}
