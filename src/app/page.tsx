"use client";
import ServicesGrid from "./ServicesGrid";
import Image from "next/image";
import PromoModal from "./PromoModal";
import { useEffect, useState } from "react";
import ContactForm from "./ContactForm";

export default function Home() {
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
    <main>
      <header id="main" className="mx-auto w-full py-8 flex flex-col md:flex-row justify-between items-start md:items-center mt-20 scroll-m-20 px-2 sm:px-4 min-w-0 gap-6">
        <h1 className="text-2xl md:text-5xl font-bold text-left break-words" style={{ color: 'var(--accent)' }}>
          Full-Rewell — быстро и качественно подготовит ваш товар для продажи на Маркетплейсах
        </h1>
        <button
          className="w-full md:w-auto mt-4 md:mt-0 px-6 py-3 rounded-lg bg-[var(--accent)] text-white font-extrabold text-base md:text-lg uppercase tracking-wider shadow-lg transition hover:scale-105 hover:bg-orange-600 focus:outline-none cursor-pointer whitespace-nowrap text-center"
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Узнать стоимость
        </button>
      </header>

      <section className="mx-auto px-2 sm:px-4 py-6 text-center flex flex-col items-center min-h-[400px] min-w-0 w-full">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 break-words text-white drop-shadow">Почему выбирают нас?</h2>
        {(() => {
          const reasons = [
            {
              icon: "/star-solid.svg",
              title: "Улучшить качество обслуживания клиентов",
              desc: "Мы обеспечиваем более высокий уровень обслуживания клиентов, что улучшает репутацию магазина и повышает лояльность клиентов."
            },
            {
              icon: "/clock-solid.svg",
              title: "Экономить время и ресурсы",
              desc: "Фулфилмент берёт на себя многие аспекты управления инвентаризацией, упаковки и доставки товаров. Это освобождает время и ресурсы для других важных задач, таких как маркетинг и продвижение продукта."
            },
            {
              icon: "/truck-fast-solid.svg",
              title: "Расширить географию и увеличить скорость доставки",
              desc: "Мы поставляем товары в любые города и обеспечиваем быструю доставку благодаря опыту и ресурсам для управления процессом логистики."
            },
          ];
          return (
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full mb-6 text-base md:text-xl">
              {reasons.map((item) => (
                <li
                  key={item.title}
                  className="flex flex-col items-center text-center gap-6 p-8 w-full min-w-0 bg-gradient-to-br from-[#23272f]/90 via-[#18181b]/95 to-[#23272f]/90 border border-[var(--accent)]/30 rounded-xl shadow-lg shadow-black/40 backdrop-blur-md text-white"
                >
                  <span className="mb-2"><Image src={item.icon} alt="Star" width={44} height={44} className="max-w-full h-auto"/></span>
                  <b className="text-xl md:text-2xl font-semibold leading-tight w-full text-center break-words text-white">{item.title}</b>
                  <span className="text-lg md:text-xl font-medium leading-relaxed w-full text-center break-words text-white">{item.desc}</span>
                </li>
              ))}
            </ul>
          );
        })()}
      </section>

      <section id="about" className="max-w-4xl mx-auto px-2 sm:px-4 py-8 flex flex-col items-center min-h-[550px] scroll-m-20 min-w-0 w-full">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center break-words">О нас</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full min-w-0">
          <li className={`w-full min-h-[100px] flex items-center gap-6 bg-gradient-to-br from-[#23272f]/80 via-[#18181b]/90 to-[#23272f]/80 border-l-4 border-[var(--accent)]/60 rounded-lg shadow p-6 transition-all duration-700 ease-out text-white
            ${aboutInView ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}
            `} style={{transitionDelay: '0ms'}}>
            <div className="flex justify-center w-full">
              <span className="font-semibold text-lg text-white">Удобное логистическое плечо</span>
            </div>
          </li>
          <li className={`w-full min-h-[100px] flex items-center gap-6 bg-gradient-to-br from-[#23272f]/80 via-[#18181b]/90 to-[#23272f]/80 border-l-4 border-[var(--accent)]/60 rounded-lg shadow p-6 transition-all duration-700 ease-out text-white
            ${aboutInView ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}
            `} style={{transitionDelay: '100ms'}}>
            <div className="flex justify-center w-full">
              <span className="font-semibold text-lg text-white">Работаем с WMS — удобный и точный учет</span>
            </div>
          </li>
          <li className={`w-full min-h-[100px] flex items-center gap-6 bg-gradient-to-br from-[#23272f]/80 via-[#18181b]/90 to-[#23272f]/80 border-l-4 border-[var(--accent)]/60 rounded-lg shadow p-6 transition-all duration-700 ease-out text-white
            ${aboutInView ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}
            `} style={{transitionDelay: '200ms'}}>
            <div className="flex justify-center w-full">
              <span className="font-semibold text-lg text-white">Наш адрес: Верхние Поля 52с1</span>
            </div>
          </li>
          <li className={`w-full min-h-[100px] flex items-center gap-6 bg-gradient-to-br from-[#23272f]/80 via-[#18181b]/90 to-[#23272f]/80 border-l-4 border-[var(--accent)]/60 rounded-lg shadow p-6 transition-all duration-700 ease-out text-white
            ${aboutInView ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}
            `} style={{transitionDelay: '300ms'}}>
            <div className="flex justify-center w-full">
              <span className="font-semibold text-lg text-white">Забор товара от 0 рублей</span>
            </div>
          </li>
          <li className={`w-full min-h-[100px] flex items-center gap-6 bg-gradient-to-br from-[#23272f]/80 via-[#18181b]/90 to-[#23272f]/80 border-l-4 border-[var(--accent)]/60 rounded-lg shadow p-6 transition-all duration-700 ease-out text-white
            ${aboutInView ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}
            `} style={{transitionDelay: '400ms'}}>
            <div className="flex justify-center w-full">
              <span className="font-semibold text-lg text-white">Ближайшее расположение к Карго Садовод Южные ворота ТЯК</span>
            </div>
          </li>
          <li className={`w-full min-h-[100px] flex items-center gap-6 bg-gradient-to-br from-[#23272f]/80 via-[#18181b]/90 to-[#23272f]/80 border-l-4 border-[var(--accent)]/60 rounded-lg shadow p-6 transition-all duration-700 ease-out text-white
            ${aboutInView ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}
            `} style={{transitionDelay: '500ms'}}>
            <div className="flex justify-center w-full">
              <span className="font-semibold text-lg text-white">Доставка по всей России</span>
            </div>
          </li>
        </ul>
      </section>

      <section id="services" className="mx-auto px-2 sm:px-4 py-8 flex flex-col items-center min-h-[550px] scroll-m-20 min-w-0 w-full">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-center break-words">Услуги</h2>
        <ServicesGrid />
        <p className="text-base md:text-xl text-center mt-8 break-words">
          Также у нас есть большое количество дополнительных услуг. Для получения подробной информации вы можете оставить заявку и мы с вами свяжемся в ближайшее время.
        </p>
      </section>

      <section id="contact" className="max-w-xl mx-auto px-2 sm:px-4 py-8 text-center flex flex-col items-center justify-center min-h-[550px] scroll-m-20 min-w-0 w-full">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-center break-words">Обратная связь</h2>
        <p className="text-base md:text-xl text-center mb-4 break-words">
          Для получения дополнительной информации воспользуйтесь формой обратной связи.
        </p>
        <ContactForm />
      </section>

      <footer className="w-full py-6 flex justify-center mt-8 border-t border-gray-100 px-2 sm:px-4 min-w-0">
        <small className="text-xs text-white break-words">&copy; {new Date().getFullYear()} Full-Rewell. Все права защищены.</small>
      </footer>
      <PromoModal />
    </main>
  );
}
