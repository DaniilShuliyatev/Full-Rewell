"use client";
import { useState } from "react";
import Image from "next/image";

export default function ContactForm() {
  const [method, setMethod] = useState<'whatsapp' | 'telegram'>('whatsapp');
  const [value, setValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");

  const isValid =
    (method === "whatsapp"
      ? /^\+?[0-9\s-]{10,20}$/.test(value.trim())
      : /^@[a-zA-Z0-9_]{4,}$/.test(value.trim())) &&
    name.trim().length > 0 &&
    category.trim().length > 0 &&
    quantity.trim().length > 0;

  const GOOGLE_FORM_ACTION_URL = "https://docs.google.com/forms/d/e/1FAIpQLSe-B3yOdlI_HiBpotH5Gc29din2wOPfRvhkK8h0bubEtdSt4g/formResponse";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    const formData = new FormData();
    formData.append("entry.341911493", name);      // Имя
    formData.append("entry.1997542131", category);  // Категория товара
    formData.append("entry.526363893", quantity);  // Количество товаров в месяц
    formData.append("entry.1346523333", method);    // Способ связи
    formData.append("entry.1294791599", value);     // Контакт (номер телефона или ник)

    try {
      await fetch(GOOGLE_FORM_ACTION_URL, {
        method: "POST",
        mode: "no-cors", // Важно!
        body: formData,
      });
      setSuccess(true);
      setValue("");
      setName("");
      setCategory("");
      setQuantity("");
    } catch {
      setError('Ошибка отправки. Попробуйте позже.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 items-center bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-100 w-full max-w-md" style={{ background: 'var(--background)' }}>
      <div className="flex gap-4 w-full justify-center mb-2">
        <label className="flex items-center gap-1 cursor-pointer">
          <input type="radio" name="method" value="whatsapp" checked={method === 'whatsapp'} onChange={() => { setMethod('whatsapp'); setValue(''); }} />
          <Image src="/whatsapp.svg" alt="WhatsApp" width={36} height={36} className="w-9 h-9" />
          <span className="text-base">WhatsApp</span>
        </label>
        <label className="flex items-center gap-1 cursor-pointer">
          <input type="radio" name="method" value="telegram" checked={method === 'telegram'} onChange={() => { setMethod('telegram'); setValue(''); }} />
          <Image src="/telegram.svg" alt="Telegram" width={36} height={36} className="w-9 h-9" />
          <span className="text-base">Telegram</span>
        </label>
      </div>
      {method === 'whatsapp' ? (
        <input
          type="tel"
          required
          placeholder="Ваш номер телефона"
          value={value}
          onChange={e => setValue(e.target.value)}
          className="w-full px-3 py-2 border border-gray-200 rounded focus:outline-none focus:border-[var(--accent)] text-black text-base break-words"
          pattern="^\\+?[0-9\\s-]{10,20}$"
        />
      ) : (
        <input
          type="text"
          required
          placeholder="Ваш Telegram ник (например, @username)"
          value={value}
          onChange={e => setValue(e.target.value)}
          className="w-full px-3 py-2 border border-gray-200 rounded focus:outline-none focus:border-[var(--accent)] text-black text-base break-words"
          pattern="^@[a-zA-Z0-9_]{4,}$"
        />
      )}
      <input
        type="text"
        required
        placeholder="Имя"
        value={name}
        onChange={e => setName(e.target.value)}
        className="w-full px-3 py-2 border border-gray-200 rounded focus:outline-none focus:border-[var(--accent)] text-black text-base break-words"
      />
      <input
        type="text"
        required
        placeholder="Категория товара"
        value={category}
        onChange={e => setCategory(e.target.value)}
        className="w-full px-3 py-2 border border-gray-200 rounded focus:outline-none focus:border-[var(--accent)] text-black text-base break-words"
      />
      <input
        type="number"
        required
        min="1"
        placeholder="Количество товаров в месяц"
        value={quantity}
        onChange={e => setQuantity(e.target.value)}
        className="w-full px-3 py-2 border border-gray-200 rounded focus:outline-none focus:border-[var(--accent)] text-black text-base break-words"
      />
      <button
        type="submit"
        className="w-full py-2 px-4 rounded bg-[var(--accent)] text-white font-semibold transition hover:opacity-90 focus:outline-none text-base disabled:opacity-60"
        disabled={!isValid || loading}
      >
        {loading ? 'Отправка...' : 'Отправить'}
      </button>
      {success && <div className="text-green-600 text-sm">Заявка успешно отправлена!</div>}
      {error && <div className="text-red-600 text-sm">{error}</div>}
    </form>
  );
} 