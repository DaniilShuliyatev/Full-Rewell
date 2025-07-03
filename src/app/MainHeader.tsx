"use client";
export default function MainHeader() {
  return (
    <header id="main" className="mx-auto w-full py-8 flex flex-col md:flex-row justify-between items-start md:items-center mt-20 scroll-m-20 px-2 sm:px-4 min-w-0 gap-6">
      <h1 className="text-3xl md:text-6xl font-bold text-left break-words text-white">
        <span className="whitespace-nowrap">
          <span className="text-[var(--accent)] font-extrabold">Full-Rewell</span> — фулфилмент, который <span className="text-[var(--accent)] font-extrabold">не подводит</span>.
        </span><br/>
        Ваше <span className="text-[var(--accent)] font-extrabold">спокойствие</span> — наша работа.<br/>
      </h1>
      <button
        className="w-full md:w-auto mt-4 md:mt-0 px-6 py-3 rounded-lg bg-[var(--accent)] text-white font-extrabold text-base md:text-lg uppercase tracking-wider shadow-lg transition hover:scale-105 hover:bg-orange-600 focus:outline-none cursor-pointer whitespace-nowrap text-center"
        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
      >
        Узнать стоимость
      </button>
    </header>
  );
} 