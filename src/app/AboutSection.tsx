"use client";
import { useEffect, useState } from "react";

export default function AboutSection() {
  const [aboutInView, setAboutInView] = useState(false);

  useEffect(() => {
    const aboutSection = document.getElementById("about");
    if (!aboutSection) return;
    const onScroll = () => {
      const rect = aboutSection.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        setAboutInView(true);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="about" className="max-w-4xl mx-auto px-2 sm:px-4 py-8 flex flex-col items-center min-h-[550px] scroll-m-20 min-w-0 w-full">
      <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center break-words">О нас</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full min-w-0">
        <li className={`w-full min-h-[100px] flex items-center gap-6 bg-gradient-to-br from-[#23272f]/80 via-[#18181b]/90 to-[#23272f]/80 border-l-4 border-[var(--accent)]/60 rounded-lg shadow p-6 transition-all duration-700 ease-out text-white ${aboutInView ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`} style={{transitionDelay: '0ms'}}>
          <div className="flex justify-center w-full">
            <span className="font-semibold text-lg text-white">Удобное логистическое плечо.</span>
          </div>
        </li>
        <li className={`w-full min-h-[100px] flex items-center gap-6 bg-gradient-to-br from-[#23272f]/80 via-[#18181b]/90 to-[#23272f]/80 border-l-4 border-[var(--accent)]/60 rounded-lg shadow p-6 transition-all duration-700 ease-out text-white ${aboutInView ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`} style={{transitionDelay: '100ms'}}>
          <div className="flex justify-center w-full">
            <span className="font-semibold text-lg text-white">Работаем с WMS — удобный и точный учет.</span>
          </div>
        </li>
        <li className={`w-full min-h-[100px] flex items-center gap-6 bg-gradient-to-br from-[#23272f]/80 via-[#18181b]/90 to-[#23272f]/80 border-l-4 border-[var(--accent)]/60 rounded-lg shadow p-6 transition-all duration-700 ease-out text-white ${aboutInView ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`} style={{transitionDelay: '200ms'}}>
          <div className="flex justify-center w-full">
            <span className="font-semibold text-lg text-white">Наш адрес: Верхние Поля 52с1.</span>
          </div>
        </li>
        <li className={`w-full min-h-[100px] flex items-center gap-6 bg-gradient-to-br from-[#23272f]/80 via-[#18181b]/90 to-[#23272f]/80 border-l-4 border-[var(--accent)]/60 rounded-lg shadow p-6 transition-all duration-700 ease-out text-white ${aboutInView ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`} style={{transitionDelay: '300ms'}}>
          <div className="flex justify-center w-full">
            <span className="font-semibold text-lg text-white">Забор товара от 0 рублей.</span>
          </div>
        </li>
        <li className={`w-full min-h-[100px] flex items-center gap-6 bg-gradient-to-br from-[#23272f]/80 via-[#18181b]/90 to-[#23272f]/80 border-l-4 border-[var(--accent)]/60 rounded-lg shadow p-6 transition-all duration-700 ease-out text-white ${aboutInView ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`} style={{transitionDelay: '400ms'}}>
          <div className="flex justify-center w-full">
            <span className="font-semibold text-lg text-white">Ближайшее расположение к Рынкам и Карго:
            Садовод, Южные ворота, Садовод.</span>
          </div>
        </li>
        <li className={`w-full min-h-[100px] flex items-center gap-6 bg-gradient-to-br from-[#23272f]/80 via-[#18181b]/90 to-[#23272f]/80 border-l-4 border-[var(--accent)]/60 rounded-lg shadow p-6 transition-all duration-700 ease-out text-white ${aboutInView ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`} style={{transitionDelay: '500ms'}}>
          <div className="flex justify-center w-full">
            <span className="font-semibold text-lg text-white">Доставка по всей России.</span>
          </div>
        </li>
      </ul>
    </section>
  );
} 