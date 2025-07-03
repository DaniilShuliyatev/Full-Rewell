"use client";
import PromoModal from "./PromoModal";
import { useEffect } from "react";
import MainHeader from "./MainHeader";
import WhyUsSection from "./WhyUsSection";
import AboutSection from "./AboutSection";
import ServicesSection from "./ServicesSection";
import ContactSection from "./ContactSection";

export default function Home() {
  useEffect(() => {
    const aboutSection = document.getElementById("about");
    if (!aboutSection) return;
    const onScroll = () => {
      const rect = aboutSection.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        // aboutInView = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main>
      <MainHeader />
      <WhyUsSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
      <footer className="w-full py-6 flex justify-center mt-8 border-t border-gray-100 px-2 sm:px-4 min-w-0">
        <small className="text-xs text-white break-words">&copy; {new Date().getFullYear()} Full-Rewell. Все права защищены.</small>
      </footer>
      <PromoModal />
    </main>
  );
}
