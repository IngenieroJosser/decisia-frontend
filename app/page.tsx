import CallToActionFinal from "@/components/pages/home/CallToActionFinal";
import DecisionIntelligenceSection from "@/components/pages/home/DecisionIntelligenceSection";
import Footer from "@/components/pages/home/Footer";
import HeroSection from "@/components/pages/home/HeroSection";
import HowItWorksSection from "@/components/pages/home/HowItWorksSection";
import ProblemSection from "@/components/pages/home/ProblemSection";
import ProductPreviewSection from "@/components/pages/home/ProductPreviewSection";
import SolutionSection from "@/components/pages/home/SolutionSection";
import StrategicHeader from "@/components/pages/home/StrategicHeader";
// import TrustAndCredibilitySection from "@/components/pages/home/TrustAndCredibilitySection";
import UseCasesSection from "@/components/pages/home/UseCasesSection";

export default function Home() {
  return (
    <>
      <StrategicHeader />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ProductPreviewSection />
      <DecisionIntelligenceSection />
      <UseCasesSection />
      <HowItWorksSection />
      {/* <TrustAndCredibilitySection /> */}
      <CallToActionFinal />
      <Footer />
    </>
  );
}
