import HeroSection from "@/components/sections/HeroSection";
import WelcomeSection from "@/components/sections/WelcomeSection";
import ServicesSection from "@/components/sections/ServicesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import BeforeAfterSection from "@/components/sections/BeforeAfterSection";
import ContactFormSection from "@/components/sections/ContactFormSection";
import PromoModal from "@/components/common/PromoModal";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WelcomeSection />
      <ServicesSection />
      <TestimonialsSection />
      <BeforeAfterSection />
      <ContactFormSection />
      <PromoModal />
    </>
  );
}
