"use client";

import styles from "./Advantages.module.css";

interface Advantage {
  text: string;
  path: string;
}

export default function Advantages() {
  const objList: Advantage[] = [
    { text: "Полный спектр услуг", path: "/logo/1.png" },
    { text: "Быстрый и стабильный Wi-Fi", path: "/logo/2.png" },
    { text: "Комфортная зона ожидания", path: "/logo/3.png" },
    { text: "Зонты для прогулок в любую погоду", path: "/logo/4.png" },
    { text: "Удобное расположение рядом с GreenCity", path: "/logo/5.png" },
    { text: "Оплата любым удобным способом", path: "/logo/6.png" },
    { text: "Лучшие цены в своём сегменте", path: "/logo/7.png" },
    { text: "Просторная парковка", path: "/logo/8.png" },
    { text: "Постоянные акции и скидки", path: "/logo/9.png" },
    { text: "Чёткое соблюдение технологий мойки", path: "/logo/10.png" },
    { text: "Всегда чистый туалет", path: "/logo/11.png" },
    { text: "Телевизор с любимыми передачами", path: "/logo/12.png" },
    { text: "Только премиальная автохимия", path: "/logo/13.png" },
    { text: "Круглосуточное видеонаблюдение", path: "/logo/14.png" },
    { text: "Работаем 24/7", path: "/logo/15.png" },
    { text: "Чай и кофе для клиентов", path: "/logo/16.png" },
  ];

  return (
    <section className={styles["advantages"]} id="advantages">
      <h2 className={styles["advantages__title"]}>НАШИ ПРЕИМУЩЕСТВА</h2>

      <div className={styles["advantages__description"]}>
        <p className={styles["advantages__text"]}>
          <strong>Современные технологии.</strong> Мы применяем только
          проверенные и безопасные методы ухода за автомобилем, сохраняя его
          идеальное состояние.
        </p>
        <p className={styles["advantages__text"]}>
          <strong>Премиальные материалы.</strong> В работе используем
          профессиональную химию и аксессуары, на которых не экономим — ваш
          автомобиль заслуживает только лучшее.
        </p>
        <p className={styles["advantages__text"]}>
          <strong>Экспертный подход.</strong> Мы не просто моем машины, а
          следуем технологическим стандартам, чтобы каждая услуга приносила
          максимальный результат.
        </p>
        <p className={styles["advantages__text"]}>
          <strong>Широкий выбор услуг.</strong> От экспресс-мойки до
          комплексного ухода — у нас есть всё, чтобы ваш автомобиль всегда
          выглядел безупречно.
        </p>
      </div>

      <ul className={styles["advantages__list"]}>
        {objList.map((item, index) => (
          <li className={styles["advantages__item"]} key={index}>
            <div className={styles["advantages__card"]}>
              <div
                className={styles["advantages__card-front"]}
                style={{ backgroundImage: `url(${item.path})` }}
                aria-hidden="true"
              ></div>
              <div className={styles["advantages__card-back"]}>
                <p className={styles["advantages__card-text"]}>{item.text}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
