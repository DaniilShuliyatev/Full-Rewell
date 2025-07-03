import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section id="contact" className="max-w-xl mx-auto px-2 sm:px-4 py-8 text-center flex flex-col items-center justify-center min-h-[550px] scroll-m-20 min-w-0 w-full">
      <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-center break-words">Обратная связь</h2>
      <p className="text-base md:text-xl text-center mb-4 break-words">
        Для получения дополнительной информации воспользуйтесь формой обратной связи.
      </p>
      <ContactForm />
    </section>
  );
} 