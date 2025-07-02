"use client";
import ServicesGrid from "./ServicesGrid";
import Image from "next/image";
import { useEffect, useState } from "react";

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
      <header id="main" className="max-w-6xl mx-auto w-full py-8 flex justify-center mt-20 scroll-m-20 px-2 sm:px-4 min-w-0">
        <h1 className="text-2xl md:text-5xl font-bold text-center break-words" style={{ color: 'var(--accent)' }}>
          Full-Rewell — быстро и качественно подготовит ваш товар для продажи на Маркетплейсах
        </h1>
      </header>

      <section className="mx-auto px-2 sm:px-4 py-6 text-center flex flex-col items-center min-h-[400px] min-w-0 w-full">
        <h2 className="text-2xl md:text-4xl font-semibold mb-6 break-words">Почему выбирают нас?</h2>
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
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full mb-4 text-base md:text-xl" style={{ color: 'var(--text)' }}>
              {reasons.map((item) => (
                <li
                  key={item.title}
                  className="flex flex-col items-center text-center gap-4 p-6 w-full min-w-0 bg-black/70 rounded-lg shadow text-white"
                >
                  <span className="mb-2"><Image src={item.icon} alt="Star" width={40} height={40} className="max-w-full h-auto"/></span>
                  <b className="text-lg md:text-2xl leading-tight w-full text-center break-words">{item.title}</b>
                  <span className="text-base md:text-xl leading-snug w-full text-center break-words">{item.desc}</span>
                </li>
              ))}
            </ul>
          );
        })()}
      </section>

      <section id="about" className="max-w-4xl mx-auto px-2 sm:px-4 py-8 flex flex-col items-center min-h-[550px] scroll-m-20 min-w-0 w-full">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center break-words">О нас</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full min-w-0">
          <li className={`w-full min-h-[100px] flex items-center gap-6 bg-black/70 rounded-lg shadow p-6 border-l-4 border-[var(--accent)] transition-all duration-700 ease-out text-white
            ${aboutInView ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}
            `} style={{transitionDelay: '0ms'}}>
            <div className="flex justify-center w-full">
              <span className="font-semibold text-lg text-white">Удобное логистическое плечо</span>
            </div>
          </li>
          <li className={`w-full min-h-[100px] flex items-center gap-6 bg-black/70 rounded-lg shadow p-6 border-l-4 border-[var(--accent)] transition-all duration-700 ease-out text-white
            ${aboutInView ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}
            `} style={{transitionDelay: '100ms'}}>
            <div className="flex justify-center w-full">
              <span className="font-semibold text-lg text-white">Работаем с WMS — удобный и точный учет</span>
            </div>
          </li>
          <li className={`w-full min-h-[100px] flex items-center gap-6 bg-black/70 rounded-lg shadow p-6 border-l-4 border-[var(--accent)] transition-all duration-700 ease-out text-white
            ${aboutInView ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}
            `} style={{transitionDelay: '200ms'}}>
            <div className="flex justify-center w-full">
              <span className="font-semibold text-lg text-white">Наш адрес: Верхние Поля 52с1</span>
            </div>
          </li>
          <li className={`w-full min-h-[100px] flex items-center gap-6 bg-black/70 rounded-lg shadow p-6 border-l-4 border-[var(--accent)] transition-all duration-700 ease-out text-white
            ${aboutInView ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}
            `} style={{transitionDelay: '300ms'}}>
            <div className="flex justify-center w-full">
              <span className="font-semibold text-lg text-white">Забор товара от 0 рублей</span>
            </div>
          </li>
          <li className={`w-full min-h-[100px] flex items-center gap-6 bg-black/70 rounded-lg shadow p-6 border-l-4 border-[var(--accent)] transition-all duration-700 ease-out text-white
            ${aboutInView ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}
            `} style={{transitionDelay: '400ms'}}>
            <div className="flex justify-center w-full">
              <span className="font-semibold text-lg text-white">Ближайшее расположение к Карго Садовод Южные ворота ТЯК</span>
            </div>
          </li>
          <li className={`w-full min-h-[100px] flex items-center gap-6 bg-black/70 rounded-lg shadow p-6 border-l-4 border-[var(--accent)] transition-all duration-700 ease-out text-white
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
        <form className="flex flex-col gap-4 items-center bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-100 w-full max-w-md" style={{ background: 'var(--background)' }}>
          <label htmlFor="phone" className="sr-only">Телефон</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="Ваш номер телефона"
            className="w-full px-3 py-2 border border-gray-200 rounded focus:outline-none focus:border-[var(--accent)] text-black text-base break-words"
          />
          <button
            type="submit"
            className="w-full py-2 px-4 rounded bg-[var(--accent)] text-white font-semibold transition hover:opacity-90 focus:outline-none text-base"
          >
            Отправить
          </button>
        </form>
      </section>

      <footer className="w-full py-6 flex justify-center mt-8 border-t border-gray-100 px-2 sm:px-4 min-w-0">
        <small className="text-xs text-white break-words">&copy; {new Date().getFullYear()} Full-Rewell. Все права защищены.</small>
      </footer>
    </main>
  );
}
