"use client";
import Image from "next/image";

const services = [
  {
    icon: "/dolly-solid.svg",
    title: "Разгрузка",
    desc: "Профессиональная разгрузка товаров с соблюдением стандартов безопасности."
  },
  {
    icon: "/barcode-solid.svg",
    title: "Приёмка товаров на склад",
    desc: "Тщательная проверка и учёт поступающих товаров."
  },
  {
    icon: "/box-solid.svg",
    title: "Обработка товара",
    desc: "Маркировка, переупаковка и подготовка товаров к продаже."
  },
  {
    icon: "/truck-fast-solid.svg",
    title: "Отгрузка",
    desc: "Своевременная и аккуратная отгрузка товаров для доставки клиентам."
  },
  {
    icon: "/clock-solid.svg",
    title: "Доставка",
    desc: "Быстрая и надёжная доставка товаров в любые города."
  },
];

export default function ServicesGrid() {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 mt-2 py-2">
      {services.map((service) => (
        <div
          key={service.title}
          className="flex flex-col items-center text-center transition-transform duration-200 hover:scale-105 cursor-pointer w-full p-8 gap-6 bg-gradient-to-br from-[#23272f]/90 via-[#18181b]/95 to-[#23272f]/90 border border-[var(--accent)]/30 rounded-xl shadow-lg shadow-black/40 backdrop-blur-md text-white"
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <Image src={service.icon} alt={service.title} width={56} height={56} className="mb-2" />
          <span className="font-semibold text-xl md:text-2xl mb-2 text-white">{service.title}</span>
          <span className="text-lg md:text-xl font-medium leading-relaxed text-white">{service.desc}</span>
        </div>
      ))}
    </div>
  );
} 