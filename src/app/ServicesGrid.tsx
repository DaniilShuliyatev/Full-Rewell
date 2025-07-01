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
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-10 mt-8">
      {services.map((service, idx) => (
        <div
          key={service.title}
          className={
            `flex flex-col items-center text-center transition-transform duration-200 hover:scale-105 cursor-pointer` +
            (idx === 4 ? " sm:col-span-2 sm:justify-self-center" : "")
          }
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <Image src={service.icon} alt={service.title} width={40} height={40} className="mb-3" />
          <span className="font-semibold text-xl mb-2">{service.title}</span>
          <span className="text-base md:text-lg text-gray-700">{service.desc}</span>
        </div>
      ))}
    </div>
  );
} 