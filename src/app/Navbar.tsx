"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const NAVBAR_HEIGHT = 65;
const SCROLL_MARGIN_TOP = 90;

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("main");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["main", "about", "services", "contact"];
      let current = "main";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= SCROLL_MARGIN_TOP + 1) {
            current = id;
          }
        }
      }
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 2) {
        current = "contact";
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleNavClick = (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
      setMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 border-b border-gray-100 shadow-sm backdrop-blur flex items-center justify-between min-h-[56px] px-2 sm:px-4">
      <a href="#main" className="flex items-center gap-2 px-2 py-1" onClick={handleNavClick("main")}> 
        <div className="h-[32px] w-[80px] sm:h-[40px] sm:w-[100px] overflow-hidden flex items-center">
          <Image src="/logo.svg" alt="Full-Rewell" width={100} height={100} className="max-w-full h-auto" />
        </div>
      </a>
      {/* Desktop nav */}
      <div className="hidden md:flex items-center justify-center gap-8 max-w-4xl w-full">
        <div className="flex items-center gap-2 md:gap-4 ml-4">
          <a href="#main" onClick={handleNavClick("main")} className={`flex items-center gap-1 px-2 sm:px-3 py-2 rounded hover:bg-gray-50 transition font-medium text-sm md:text-lg ${activeSection === "main" ? "text-[var(--accent)]" : "text-black"}`}>Главная</a>
          <a href="#about" onClick={handleNavClick("about")} className={`flex items-center gap-1 px-2 sm:px-3 py-2 rounded hover:bg-gray-50 transition font-medium text-sm md:text-lg ${activeSection === "about" ? "text-[var(--accent)]" : "text-black"}`}>О нас</a>
          <a href="#services" onClick={handleNavClick("services")} className={`flex items-center gap-1 px-2 sm:px-3 py-2 rounded hover:bg-gray-50 transition font-medium text-sm md:text-lg ${activeSection === "services" ? "text-[var(--accent)]" : "text-black"}`}>Услуги</a>
          <a href="#contact" onClick={handleNavClick("contact")} className={`flex items-center gap-1 px-2 sm:px-3 py-2 rounded hover:bg-gray-50 transition font-medium text-sm md:text-lg ${activeSection === "contact" ? "text-[var(--accent)]" : "text-black"}`}>Контакты</a>
        </div>
      </div>
      {/* Mobile burger */}
      <button className="md:hidden flex flex-col items-center justify-center p-2 ml-2 z-50 w-10 h-10 relative" aria-label="Открыть меню" onClick={() => setMenuOpen(v => !v)}>
        <span className={`absolute left-2 right-2 top-3 h-0.5 bg-black rounded transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`absolute left-2 right-2 top-5 h-0.5 bg-black rounded transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`}></span>
        <span className={`absolute left-2 right-2 top-7 h-0.5 bg-black rounded transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>
      {/* Overlay */}
      {menuOpen && <div className="fixed inset-0 bg-black/40 z-40" onClick={() => setMenuOpen(false)}></div>}
      {/* Mobile menu */}
      <div className={`fixed top-[56px] left-0 w-full bg-white/95 backdrop-blur z-50 flex flex-col items-center pt-8 gap-4 md:hidden transition-all duration-300 ${menuOpen ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0 pointer-events-none'}`} style={{minHeight: 'calc(100vh - 56px)'}}>
        <a href="#main" onClick={handleNavClick("main")} className={`w-full text-center py-3 text-lg font-medium ${activeSection === "main" ? "text-[var(--accent)]" : "text-black"}`}>Главная</a>
        <a href="#about" onClick={handleNavClick("about")} className={`w-full text-center py-3 text-lg font-medium ${activeSection === "about" ? "text-[var(--accent)]" : "text-black"}`}>О нас</a>
        <a href="#services" onClick={handleNavClick("services")} className={`w-full text-center py-3 text-lg font-medium ${activeSection === "services" ? "text-[var(--accent)]" : "text-black"}`}>Услуги</a>
        <a href="#contact" onClick={handleNavClick("contact")} className={`w-full text-center py-3 text-lg font-medium ${activeSection === "contact" ? "text-[var(--accent)]" : "text-black"}`}>Контакты</a>
      </div>
    </nav>
  );
} 