import ServicesGrid from "./ServicesGrid";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <header id="main" className="w-full py-8 flex justify-center mt-20" style={{scrollMarginTop: '5rem'}}>
        <h1 className="text-3xl md:text-5xl font-bold text-center" style={{ color: 'var(--accent)' }}>
          Full-Rewell — быстро и качественно подготовит ваш товар для продажи на Маркетплейсах
        </h1>
      </header>

      <section className="max-w-2xl mx-auto px-4 py-8 text-center flex flex-col items-center mt-12" style={{minHeight: '550px'}}>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Почему выбирают нас?</h2>
        <ul className="text-lg md:text-xl space-y-4 mb-8" style={{ color: 'var(--text)' }}>
          <li className="flex flex-col items-center gap-2 mt-8">
            <span className="mb-2"><Image src="/star-solid.svg" alt="Star" width={36} height={36}/></span>
            <b>Улучшить качество обслуживания клиентов</b>
            Мы обеспечиваем более высокий уровень обслуживания клиентов, что улучшает репутацию магазина и повышает лояльность клиентов.
          </li>
          <li className="flex flex-col items-center gap-2 mt-8">
            <span className="mb-2"><Image src="/clock-solid.svg" alt="Star" width={36} height={36}/></span>
            <b>Экономить время и ресурсы</b>
            Фулфилмент берёт на себя многие аспекты управления инвентаризацией, упаковки и доставки товаров. Это освобождает время и ресурсы для других важных задач, таких как маркетинг и продвижение продукта.
          </li>
          <li className="flex flex-col items-center gap-2 mt-8">
            <span className="mb-2"><Image src="/truck-fast-solid.svg" alt="Star" width={36} height={36}/></span>
            <b>Расширить географию и увеличить скорость доставки</b>
            Мы поставляем товары в любые города и обеспечиваем быструю доставку благодаря опыту и ресурсам для управления процессом логистики.
          </li>
        </ul>
      </section>

      <section id="about" className="max-w-2xl mx-auto px-4 py-8 flex flex-col items-center" style={{minHeight: '550px', scrollMarginTop: '5rem'}}>
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">О нас</h2>
        <ul className="w-full flex flex-col gap-6">
          <li className="flex items-start gap-4 bg-white/80 rounded-lg shadow p-4 border-l-4 border-[var(--accent)]">
            <div>
              <span className="font-semibold text-lg" style={{color: 'var(--accent)'}}>Открытая и честная коммуникация</span>
              <p className="text-base mt-1">Мы всегда стремимся к открытому диалогу и созданию долгосрочных партнёрских отношений.</p>
            </div>
          </li>
          <li className="flex items-start gap-4 bg-white/80 rounded-lg shadow p-4 border-l-4 border-[var(--accent)]">
            <div>
              <span className="font-semibold text-lg" style={{color: 'var(--accent)'}}>Профессионализм и опыт</span>
              <p className="text-base mt-1">Наша команда работает в сфере фулфилмента уже более трёх лет, пройдя путь от небольшого предприятия до крупного игрока на рынке.</p>
            </div>
          </li>
          <li className="flex items-start gap-4 bg-white/80 rounded-lg shadow p-4 border-l-4 border-[var(--accent)]">
            <div>
              <span className="font-semibold text-lg" style={{color: 'var(--accent)'}}>Высокое качество услуг</span>
              <p className="text-base mt-1">Наша основная задача — предоставлять клиентам высококачественные услуги по организации и управлению логистическими процессами.</p>
            </div>
          </li>
        </ul>
      </section>

      <section id="services" className="max-w-2xl mx-auto px-4 py-8 flex flex-col items-center" style={{minHeight: '550px', scrollMarginTop: '5rem'}}>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-center">Услуги</h2>
        <ServicesGrid />
        <p className="text-lg md:text-xl text-center mt-12">
          Также у нас есть большое количество дополнительных услуг. Для получения подробной информации вы можете связаться с нами удобным для вас способом.
        </p>
      </section>

      <section id="contact" className="max-w-xl mx-auto px-4 py-8 text-center flex flex-col items-center justify-center" style={{minHeight: '550px', scrollMarginTop: '5rem'}}>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-center">Обратная связь</h2>
        <p className="text-lg md:text-xl text-center mb-4">
          Для получения дополнительной информации воспользуйтесь формой обратной связи на сайте.
        </p>
        <form className="flex flex-col gap-4 items-center bg-white p-6 rounded-lg shadow-md border border-gray-100 w-full max-w-md" style={{ background: 'var(--background)' }}>
          <label htmlFor="phone" className="sr-only">Телефон</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="Ваш номер телефона"
            className="w-full px-4 py-2 border border-gray-200 rounded focus:outline-none focus:border-[var(--accent)] text-black"
          />
          <button
            type="submit"
            className="w-full py-2 px-4 rounded bg-[var(--accent)] text-white font-semibold transition hover:opacity-90 focus:outline-none"
          >
            Отправить
          </button>
        </form>
      </section>

      <footer className="w-full py-6 flex justify-center mt-12 border-t border-gray-100">
        <small className="text-xs text-gray-500">&copy; {new Date().getFullYear()} Full-Rewell. Все права защищены.</small>
      </footer>
    </main>
  );
}
