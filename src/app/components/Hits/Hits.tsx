"use client";

import styles from "./Hits.module.css";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

interface Hits {
  id: number;
  title: string;
  description: string;
  price: string;
  image: string;
  link: string;
}

const hits: Hits[] = [
  {
    id: 1,
    title: "МОЙКА ПЕРФЕКТО",
    description:
      "Трёхфазная мойка премиум-класса. Абсолютная чистота и бережная защита ЛКП от агрессивной среды. Ваш автомобиль сияет дольше и выглядит безупречно каждый день.",
    price: "ОТ 50 РУБЛЕЙ",
    image: "/hits/1.jpg",
    link: "#",
  },
  {
    id: 2,
    title: "МОЙКА PROTECTOR",
    description:
      "Глубокое очищение с консервацией премиальным полимером. Надёжная защита и восстановление керамических покрытий — идеальный выбор для тех, кто заботится о долговечности авто.",
    price: "ОТ 60 РУБЛЕЙ",
    image: "/hits/2.jpg",
    link: "#",
  },
  {
    id: 3,
    title: "ФИРМЕННАЯ МОЙКА GT",
    description:
      "Максимально деликатная мойка и бережная сушка с применением SIO₂-консерванта. Минимум химии и механики — максимум блеска и стойкий гидрофобный эффект.",
    price: "ОТ 105 РУБЛЕЙ",
    image: "/hits/3.jpg",
    link: "#",
  },
  {
    id: 4,
    title: "ЧИСТКА ЛКП + ПОЛИМЕР",
    description:
      "Эффективное удаление битума и стойких загрязнений с последующей обработкой полимером. До 3 месяцев защиты и сияния кузова.",
    price: "ОТ 380 РУБЛЕЙ",
    image: "/hits/4.jpg",
    link: "#",
  },
  {
    id: 5,
    title: "ЧИСТЫЙ КАЙФ",
    description:
      "Комплексная программа: удаление битума, мойка днища, антидождь для стёкол, глубокая уборка салона и защита кузова полимером. Ваш авто — идеально чистый и защищённый, а вы экономите более 20%.",
    price: "ОТ 590 РУБЛЕЙ",
    image: "/hits/5.jpg",
    link: "#",
  },
  {
    id: 6,
    title: "КОМПЛЕКС GT PRO",
    description:
      "Наш флагманский комплекс для настоящих ценителей. Детализированная мойка и уборка салона с премиальной химией и вниманием к каждой детали.",
    price: "ОТ 295 РУБЛЕЙ",
    image: "/hits/6.jpg",
    link: "#",
  },
];

export default function Hits() {
  return (
    <section className={styles["hits"]} id="hits">

      <h2 className={styles["hits__title"]}>Хиты</h2>

      <p className={styles["hits__subtitle"]}>
        Хиты — это самые востребованные и любимые услуги нашими клиентами. Мы
        собрали ТОП-позиции, которые неизменно выбирают за идеальное сочетание
        качества и эффективности. Каждая из этих процедур — проверенный фаворит,
        который гарантированно подарит вашему автомобилю безупречный вид и
        свежесть.
      </p>

      <Swiper
        aria-label="Список популярнейших услуг автомойки"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView="auto"
        centeredSlides={true}
        navigation={true}
        loop={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 10 },
          993: { slidesPerView: 2, spaceBetween: 20 },
          1441: { slidesPerView: 3, spaceBetween: 30 },
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {hits.map((hit) => (
          <SwiperSlide
            className={styles["hits-card"]}
            key={hit.id}
            style={{
              backgroundImage: `url(${hit.image})`,
            }}
          >
            <div className={styles["hits-card__content"]}>
              <h3 className={styles["hits-card__title"]}>{hit.title}</h3>
              <p className={styles["hits-card__descr"]}>{hit.description}</p>
              <span className={styles["hits-card__price"]}>{hit.price}</span>
              <Link href={hit.link} className={styles["hits-card__btn-more"]}>
                Подробнее
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
    </section>
  );
}
