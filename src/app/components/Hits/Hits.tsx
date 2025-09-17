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
    title: "Мойка Protector",
    description:
      "Максимальное очищение поверхности с последующей консервацией ЛКП полимером премиум класса. Гарантированная сохранность и регенерация нанесенных защитных керамических покрытий.",
    price: "ОТ 45 РУБЛЕЙ",
    image: "/fon/fon-1.jpg",
    link: "#",
  },
  {
    id: 2,
    title: "Мойка Protector",
    description:
      "Максимальное очищение поверхности с последующей консервацией ЛКП полимером премиум класса. Гарантированная сохранность и регенерация нанесенных защитных керамических покрытий.",
    price: "ОТ 45 РУБЛЕЙ",
    image: "/fon/fon-2.jpg",
    link: "#",
  },
  {
    id: 3,
    title: "Мойка Protector",
    description:
      "Максимальное очищение поверхности с последующей консервацией ЛКП полимером премиум класса. Гарантированная сохранность и регенерация нанесенных защитных керамических покрытий.",
    price: "ОТ 45 РУБЛЕЙ",
    image: "/fon/fon-3.jpg",
    link: "#",
  },
    {
    id: 4,
    title: "Мойка Protector",
    description:
      "Максимальное очищение поверхности с последующей консервацией ЛКП полимером премиум класса. Гарантированная сохранность и регенерация нанесенных защитных керамических покрытий.",
    price: "ОТ 45 РУБЛЕЙ",
    image: "/fon/fon-4.jpg",
    link: "#",
  },
  {
    id: 5,
    title: "Мойка Protector",
    description:
      "Максимальное очищение поверхности с последующей консервацией ЛКП полимером премиум класса. Гарантированная сохранность и регенерация нанесенных защитных керамических покрытий.",
    price: "ОТ 45 РУБЛЕЙ",
    image: "/fon/fon-5.jpg",
    link: "#",
  },
  {
    id: 6,
    title: "Мойка Protector",
    description:
      "Максимальное очищение поверхности с последующей консервацией ЛКП полимером премиум класса. Гарантированная сохранность и регенерация нанесенных защитных керамических покрытий.",
    price: "ОТ 45 РУБЛЕЙ",
    image: "/fon/fon-6.jpg",
    link: "#",
  },
    {
    id: 7,
    title: "Мойка Protector",
    description:
      "Максимальное очищение поверхности с последующей консервацией ЛКП полимером премиум класса. Гарантированная сохранность и регенерация нанесенных защитных керамических покрытий.",
    price: "ОТ 45 РУБЛЕЙ",
    image: "/fon/fon-7.jpg",
    link: "#",
  },
  {
    id: 8,
    title: "Мойка Protector",
    description:
      "Максимальное очищение поверхности с последующей консервацией ЛКП полимером премиум класса. Гарантированная сохранность и регенерация нанесенных защитных керамических покрытий.",
    price: "ОТ 45 РУБЛЕЙ",
    image: "/fon/fon-8.jpg",
    link: "#",
  },
  {
    id: 9,
    title: "Мойка Protector",
    description:
      "Максимальное очищение поверхности с последующей консервацией ЛКП полимером премиум класса. Гарантированная сохранность и регенерация нанесенных защитных керамических покрытий.",
    price: "ОТ 45 РУБЛЕЙ",
    image: "/fon/fon-9.jpg",
    link: "#",
  },
    {
    id: 10,
    title: "Мойка Protector",
    description:
      "Максимальное очищение поверхности с последующей консервацией ЛКП полимером премиум класса. Гарантированная сохранность и регенерация нанесенных защитных керамических покрытий.",
    price: "ОТ 45 РУБЛЕЙ",
    image: "/fon/fon-10.jpg",
    link: "#",
  },
];

export default function Hits() {
  return (
    <section className={styles["hits"]}>
      <h2 className={styles["hits__title"]}>Хиты</h2>
      <p className={styles["hits__subtitle"]}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi veniam
        maiores optio. Saepe fugiat nulla, quo animi minus perspiciatis enim ex
        quas rerum vitae expedita recusandae velit voluptate. Sunt, adipisci?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, commodi
        laboriosam. Nam facilis obcaecati nesciunt numquam debitis velit. Est
        perspiciatis, ex rerum ipsum deserunt temporibus cum inventore quia hic
        quidem!
      </p>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        loop={true}
        navigation={{
          prevEl: `.${styles.swiperPrev}`,
          nextEl: `.${styles.swiperNext}`,
        }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1440: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
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
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundColor: 'azure'
            }}
          >
            <div className={styles["hits-card__content"]}>
              <h3 className={styles["hits-card__title"]}>{hit.title}</h3>
              <p className={styles["hits-card__descr"]}>{hit.description}</p>
              <span className={styles["hits-card__price"]}>{hit.price}</span>
              <div className={styles["hits-card__buttons"]}>
                <a href="#" className={styles["hits-card__btn-signup"]}>
                  ЗАПИСАТЬСЯ
                </a>
                <Link href={"#"} className={styles["hits-card__btn-more"]}>
                  ПОДРОБНЕЕ
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
