"use client";
import { useState } from "react";
import Image from "next/image";

export default function ContactForm() {
  const [method, setMethod] = useState<'whatsapp' | 'telegram'>('whatsapp');
  const [value, setValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const isValid = method === 'whatsapp'
    ? /^\+?[0-9\s-]{10,20}$/.test(value.trim())
    : /^@[a-zA-Z0-9_]{4,}$/.test(value.trim());

  // Локальный backend endpoint
  const BACKEND_ENDPOINT = "http://localhost:4000/api/send";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);
    try {
      const res = await fetch(BACKEND_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          method: method === 'whatsapp' ? 'WhatsApp' : 'Telegram',
          value,
        }),
      });
      if (res.ok) {
        setSuccess(true);
        setValue('');
      } else {
        setError('Ошибка отправки. Попробуйте позже.');
      }
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