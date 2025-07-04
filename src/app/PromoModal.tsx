"use client";
import { useEffect, useState } from "react";

export default function PromoModal() {
  const [open, setOpen] = useState(true);
  const [timeLeft, setTimeLeft] = useState(45 * 60);
  const [hydrated, setHydrated] = useState(false);
  const [showClose, setShowClose] = useState(false);

  useEffect(() => {
    // Только на клиенте!
    const saved = typeof window !== 'undefined' ? localStorage.getItem('promo-timer') : null;
    if (saved && !isNaN(Number(saved))) {
      setTimeLeft(Number(saved));
    }
    setHydrated(true);
    // Показать крестик через 5 секунд
    const timer = setTimeout(() => setShowClose(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!open || !hydrated) return;
    if (timeLeft <= 0) return;
    const interval = setInterval(() => {
      setTimeLeft(t => {
        const next = t - 1;
        localStorage.setItem('promo-timer', String(next));
        return next;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [open, timeLeft, hydrated]);

  useEffect(() => {
    if (timeLeft <= 0 && hydrated) {
      setTimeLeft(45 * 60);
      localStorage.setItem('promo-timer', String(45 * 60));
    }
  }, [timeLeft, hydrated]);

  if (!open || !hydrated) return null;
  const min = Math.floor(timeLeft / 60).toString().padStart(2, '0');
  const sec = (timeLeft % 60).toString().padStart(2, '0');
  const handleClick = () => {
    setOpen(false);
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed z-[100] bottom-3 right-3 sm:bottom-6 sm:right-6 max-w-[95vw] sm:max-w-xs w-full bg-white rounded-2xl shadow-2xl border-2 border-[var(--accent)] flex flex-col items-center p-3 sm:p-6">
      {showClose && (
        <button
          aria-label="Закрыть модалку"
          onClick={() => setOpen(false)}
          className="absolute top-2 right-2 text-gray-400 hover:text-black text-2xl font-bold cursor-pointer transition"
          style={{lineHeight: 1}}
        >
          &times;
        </button>
      )}
      <div className="flex items-center gap-2 mb-2">
        <span className="text-xl sm:text-2xl">🔥</span>
        <span className="text-base sm:text-lg font-extrabold text-[var(--accent)] uppercase drop-shadow">ВНИМАНИЕ!</span>
      </div>
      <div className="text-base sm:text-xl font-bold text-black mb-2 text-center">Только сегодня — <span className='text-[var(--accent)]'>эксклюзивная скидка на забор товара!</span></div>
      <div className="text-xs sm:text-base font-semibold text-red-600 mb-2 text-center uppercase">Осталось времени:</div>
      <div className="text-2xl sm:text-3xl font-mono font-bold text-[var(--accent)] mb-4 text-center">{min}:{sec}</div>
      <button
        className="w-full py-2 sm:py-3 px-3 sm:px-4 rounded-lg bg-[var(--accent)] text-white font-extrabold text-base sm:text-lg uppercase tracking-wider shadow-lg transition hover:scale-105 hover:bg-orange-600 focus:outline-none animate-pulse"
        onClick={handleClick}
      >
        Получить скидку
      </button>
    </div>
  );
} 