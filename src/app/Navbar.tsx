"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const NAVBAR_HEIGHT = 65;
const SCROLL_MARGIN_TOP = 80;

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("main");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["main", "about", "services", "contact"];
      const scrollPosition = window.scrollY + NAVBAR_HEIGHT + SCROLL_MARGIN_TOP;
      let current = "main";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const sectionTop = el.offsetTop;
          const sectionBottom = sectionTop + el.offsetHeight;
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            current = id;
          }
        }
      }
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 2) {
        current = 'contact';
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 border-b border-gray-100 shadow-sm backdrop-blur flex items-center justify-between min-h-[65px] px-4">
      <a href="#main" className="flex items-center gap-2 px-2 py-1" onClick={handleNavClick("main")}>
        <div className="h-[40px] w-[100px] overflow-hidden flex items-center">
          <Image src="/logo.svg" alt="Full-Rewell" width={100} height={100} />
        </div>
      </a>
      <div className="flex items-center justify-center gap-8 max-w-4xl w-full">
        <div className="flex items-center gap-2 md:gap-4 ml-4">
          <a href="#main" onClick={handleNavClick("main")} className={`flex items-center gap-1 px-3 py-2 rounded hover:bg-gray-50 transition font-medium text-base md:text-lg ${activeSection === "main" ? "text-[var(--accent)]" : ""}`}>Главная</a>
          <a href="#about" onClick={handleNavClick("about")} className={`flex items-center gap-1 px-3 py-2 rounded hover:bg-gray-50 transition font-medium text-base md:text-lg ${activeSection === "about" ? "text-[var(--accent)]" : ""}`}>О нас</a>
          <a href="#services" onClick={handleNavClick("services")} className={`flex items-center gap-1 px-3 py-2 rounded hover:bg-gray-50 transition font-medium text-base md:text-lg ${activeSection === "services" ? "text-[var(--accent)]" : ""}`}>Услуги</a>
          <a href="#contact" onClick={handleNavClick("contact")} className={`flex items-center gap-1 px-3 py-2 rounded hover:bg-gray-50 transition font-medium text-base md:text-lg ${activeSection === "contact" ? "text-[var(--accent)]" : ""}`}>Контакты</a>
        </div>
      </div>
    </nav>
  );
} 