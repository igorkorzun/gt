import styles from "./Advantages.module.css";

interface Advantage {
  text: string;
  path: string;
}

export default function Advantages() {
  const objList: Advantage[] = [
    { text: "Широкий спектр услуг", path: "/logo/1.png" },
    { text: "Быстрый Wi-Fi", path: "/logo/2.png" },
    { text: "Уютная клиентская зона", path: "/logo/3.png" },
    { text: "Зонты для прогулок в любую погоду", path: "/logo/4.png" },
    { text: "Удобное расположение рядом с GreenCity", path: "/logo/5.png" },
    { text: "Любой способ оплаты", path: "/logo/6.png" },
    { text: "Лучшие цены в сегменте", path: "/logo/7.png" },
    { text: "Большая парковка", path: "/logo/8.png" },
    { text: "Постоянные скидки и акции", path: "/logo/9.png" },
    { text: "Строгое соблюдение технологий мойки", path: "/logo/10.png" },
    { text: "Чистый туалет", path: "/logo/11.png" },
    { text: "Телевизор с любимыми шоу", path: "/logo/12.png" },
    { text: "Только лучшая автохимия", path: "/logo/13.png" },
    { text: "Круглосуточное видеонаблюдение", path: "/logo/14.png" },
    { text: "Круглосуточный режим работы", path: "/logo/15.png" },
    { text: "Чай и кофе для клиентов", path: "/logo/16.png" },
  ];

  return (
    <section className={styles["advantages"]}>
      <h2 className={styles["advantages__title"]}>НАШИ ПРЕИМУЩЕСТВА</h2>

      <div className={styles["advantages__description"]}>
        <p className={styles["advantages__text"]}>
          Мы используем самые современные и безопасные технологии по уходу за
          авто.
        </p>
        <p className={styles["advantages__text"]}>
          Мы не экономим на вашем авто! Используем в работе химию, аксессуары и
          расходные материалы.
        </p>
        <p className={styles["advantages__text"]}>
          Мы не просто отмываем грязь, а делаем это со знанием всех
          технологических процессов.
        </p>
        <p className={styles["advantages__text"]}>
          Мы предоставляем широкий перечень оказываемых услуг, где Вы точно
          найдете то, что Вам нужно.
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
