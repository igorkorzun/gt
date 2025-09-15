export default function HomePage() {
  return (
    <div className="flex flex-col items-center text-center">
      {/* Hero */}
      <section className="relative w-full h-[80vh] flex items-center justify-center bg-[url('/images/hero-car.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-white max-w-2xl px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            КРУГЛОСУТОЧНАЯ АВТОМОЙКА В МИНСКЕ
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Полировка, мойка, уход за автомобилем — качество и скорость 24/7
          </p>
          <a
            href="tel:+375447987878"
            className="px-6 py-3 bg-orange-500 rounded-2xl shadow-lg hover:bg-orange-600 transition"
          >
            Записаться
          </a>
        </div>
      </section>

      {/* Преимущества */}
      <section className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-orange-500 mb-8">
          Наши преимущества
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-200">
          <div className="bg-neutral-800 p-6 rounded-2xl shadow">
            <h3 className="font-semibold mb-2">24/7 Работаем всегда</h3>
            <p>Мы доступны в любое время дня и ночи, без выходных.</p>
          </div>
          <div className="bg-neutral-800 p-6 rounded-2xl shadow">
            <h3 className="font-semibold mb-2">Качество</h3>
            <p>Используем профессиональную химию и оборудование.</p>
          </div>
          <div className="bg-neutral-800 p-6 rounded-2xl shadow">
            <h3 className="font-semibold mb-2">Скорость</h3>
            <p>Оптимизированные процессы позволяют экономить ваше время.</p>
          </div>
        </div>
      </section>

      {/* Заглушки блоков */}
      <section className="max-w-6xl mx-auto py-12 px-4 text-gray-400">
        <h2 className="text-2xl font-bold mb-4">Услуги</h2>
        <p>Здесь будет слайдер с услугами…</p>
      </section>

      <section className="max-w-6xl mx-auto py-12 px-4 text-gray-400">
        <h2 className="text-2xl font-bold mb-4">Хиты</h2>
        <p>Здесь будет слайдер популярных услуг…</p>
      </section>

      <section className="max-w-6xl mx-auto py-12 px-4 text-gray-400">
        <h2 className="text-2xl font-bold mb-4">О нас</h2>
        <p>Здесь появится текстовый блок с информацией о компании…</p>
      </section>

      <section className="max-w-6xl mx-auto py-12 px-4 text-gray-400">
        <h2 className="text-2xl font-bold mb-4">Вопрос-Ответ</h2>
        <p>Здесь будет аккордеон с часто задаваемыми вопросами…</p>
      </section>

      <section className="max-w-6xl mx-auto py-12 px-4 text-gray-400">
        <h2 className="text-2xl font-bold mb-4">Галерея</h2>
        <p>Здесь появится галерея фотографий…</p>
      </section>

      <section
        id="contacts"
        className="max-w-6xl mx-auto py-12 px-4 text-gray-400"
      >
        <h2 className="text-2xl font-bold mb-4">Контакты</h2>
        <p>Здесь будет карта и контактные данные…</p>
      </section>
    </div>
  );
}
