const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = 4000; // Можно поменять порт

app.use(cors());
app.use(express.json());

// === НАСТРОЙКИ ЯНДЕКС ПОЧТЫ ===
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'fullrewellsender@gmail.com', // например, example@yandex.ru
    pass: 'vxfe dzvm gvmt qbpy', // не обычный пароль, а пароль приложения
  },
});

const TO_EMAIL = 'schulyatjev.daniil@yandex.ru'; // Куда отправлять заявки

// GET endpoint для проверки работы сервера
app.get('/', (req, res) => {
  res.send('Email server is running!');
});

app.post('/api/send', async (req, res) => {
  const { method, value } = req.body;
  if (!method || !value) {
    return res.status(400).json({ error: 'Некорректные данные' });
  }
  try {
    await transporter.sendMail({
      from: 'FullRewellSenderBot@yandex.ru',
      to: TO_EMAIL,
      subject: 'Новая заявка с сайта Full-Rewell',
      text: `Способ связи: ${method}\nДанные: ${value}`,
    });
    res.json({ success: true });
  } catch (err) {
    console.error('Ошибка при отправке письма:', err);
    res.status(500).json({ error: 'Ошибка отправки письма', details: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Email server started on http://localhost:${PORT}`);
}); 