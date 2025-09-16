"use client";

import styles from "./Services.module.css";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

interface Service {
  id: number;
  title: string;
  description: string[];
  image: string;
}

const services: Service[] = [
  {
    id: 1,
    title: "1",
    description: [
      "Легкая",
      "Восстановительная",
      "Частичная",
      "Полировка фар",
      "Шлифовка фар",
    ],
    image: "/fon/fon-1.jpg",
  },
  {
    id: 2,
    title: "2",
    description: [
      "Легкая",
      "Восстановительная",
      "Частичная",
      "Полировка фар",
      "Шлифовка фар",
    ],
    image: "/fon/fon-2.jpg",
  },
  {
    id: 3,
    title: "3",
    description: [
      "Легкая",
      "Восстановительная",
      "Частичная",
      "Полировка фар",
      "Шлифовка фар",
    ],
    image: "/fon/fon-3.jpg",
  },
  {
    id: 4,
    title: "4",
    description: [
      "Легкая",
      "Восстановительная",
      "Частичная",
      "Полировка фар",
      "Шлифовка фар",
    ],
    image: "/fon/fon-4.jpg",
  },
  {
    id: 5,
    title: "5",
    description: [
      "Легкая",
      "Восстановительная",
      "Частичная",
      "Полировка фар",
      "Шлифовка фар",
    ],
    image: "/fon/fon-5.jpg",
  },
  {
    id: 6,
    title: "6",
    description: [
      "Легкая",
      "Восстановительная",
      "Частичная",
      "Полировка фар",
      "Шлифовка фар",
    ],
    image: "/fon/fon-6.jpg",
  },
  {
    id: 7,
    title: "7",
    description: [
      "Легкая",
      "Восстановительная",
      "Частичная",
      "Полировка фар",
      "Шлифовка фар",
    ],
    image: "/fon/fon-7.jpg",
  },
  {
    id: 8,
    title: "8",
    description: [
      "Легкая",
      "Восстановительная",
      "Частичная",
      "Полировка фар",
      "Шлифовка фар",
    ],
    image: "/fon/fon-8.jpg",
  },
  {
    id: 9,
    title: "9",
    description: [
      "Легкая",
      "Восстановительная",
      "Частичная",
      "Полировка фар",
      "Шлифовка фар",
    ],
    image: "/fon/fon-9.jpg",
  },
  {
    id: 10,
    title: "10",
    description: [
      "Легкая",
      "Восстановительная",
      "Частичная",
      "Полировка фар",
      "Шлифовка фар",
    ],
    image: "/fon/fon-10.jpg",
  },
];

export default function Services() {
  return (
    <section className={styles["services"]}>
      <h2 className={styles["services__title"]}>Услуги</h2>
      <p className={styles["services__subtitle"]}>
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
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {services.map((service) => (
          <SwiperSlide
            className={styles["service-card"]}
            key={service.id}
            style={{
              backgroundImage: `url(${service.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className={styles["service-card__content"]}>
              <h3 className={styles["service-card__title"]}>{service.title}</h3>
              <ul className={styles["service-card__list"]}>
                {service.description.map((line, idx) => (
                  <li key={idx} className={styles["service-card__list-item"]}>
                    <Link
                      href="#"
                      className={styles["service-card__list-link"]}
                    >
                      {line}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
