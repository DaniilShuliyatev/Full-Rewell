import ServicesGrid from "./ServicesGrid";

export default function ServicesSection() {
  return (
    <section id="services" className="mx-auto px-2 sm:px-4 py-8 flex flex-col items-center min-h-[550px] scroll-m-20 min-w-0 w-full">
      <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-center break-words">Услуги</h2>
      <ServicesGrid />
      <p className="text-base md:text-xl text-center mt-8 break-words">
        Также у нас есть большое количество дополнительных услуг. Для получения подробной информации вы можете оставить заявку и мы с вами свяжемся в ближайшее время.
      </p>
    </section>
  );
} 