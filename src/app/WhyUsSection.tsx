import Image from "next/image";

export default function WhyUsSection() {
  const reasons = [
    {
      icon: "/star-solid.svg",
      title: "Мы — фулфилмент, который соблюдает стандарты WB и Ozon — и ваши сроки",
    },
    {
      icon: "/clock-solid.svg",
      title: "Надёжные отгрузки на маркетплейсы — вы продаёте, мы делаем остальное",
    },
    {
      icon: "/truck-fast-solid.svg",
      title: "Фулфилмент для продавцов: разгрузка ,приёмка, упаковка, логистика без ошибок",
    },
  ];
  return (
    <section className="mx-auto px-2 sm:px-4 py-6 text-center flex flex-col items-center min-h-[400px] min-w-0 w-full">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 break-words text-white drop-shadow">Почему выбирают нас?</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full mb-6 text-base md:text-xl">
        {reasons.map((item) => (
          <li
            key={item.title}
            className="flex flex-col items-center text-center gap-6 p-8 w-full min-w-0 bg-gradient-to-br from-[#23272f]/90 via-[#18181b]/95 to-[#23272f]/90 border border-[var(--accent)]/30 rounded-xl shadow-lg shadow-black/40 backdrop-blur-md text-white"
          >
            <span className="mb-2 flex items-center gap-3 justify-center">
              <Image src={item.icon} alt="Star" width={44} height={44} className="max-w-full h-auto"/>
            </span>
            <b className="text-xl md:text-2xl font-semibold leading-tight w-full text-center break-words text-white">{item.title}</b>
          </li>
        ))}
      </ul>
    </section>
  );
} 