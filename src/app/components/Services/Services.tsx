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
  link: string;
}

const services: Service[] = [
  {
    id: 1,
    title: "МОЕЧНЫЕ ПРОГРАММЫ",
    description: [
      "МОЙКА ЭКСПРЕСС",
      "МОЙКА ОПТИМА",
      "МОЙКА ПЕРФЕКТО",
      "МОЙКА PROTECTOR",
      "ФИРМЕННАЯ МОЙКА GT",
      "ФИРМЕННАЯ МОЙКА GT PLUS",
      "МОЙКА МОТОЦИКЛА",
    ],
    image: "/services/washing-programs.jpg",
    link: "#",
  },
  {
    id: 2,
    title: "КОМПЛЕКСЫ",
    description: [
      "КОМПЛЕКС ОПТИМА",
      "КОМПЛЕКС ПЕРФЕКТО",
      "КОМПЛЕКС PROTECTOR",
      "КОМПЛЕКС GT",
      "КОМПЛЕКС GT PLUS",
      "КОМПЛЕКС GT PLUS",
    ],
    image: "/services/complexes.jpg",
    link: "#",
  },
  {
    id: 3,
    title: "ИНТЕРЬЕР",
    description: [
      "КОМПЛЕКСНАЯ УБОРКА",
      "ПЫЛЕСОС",
      "ПЛАСТИК",
      "СТЕКЛА И ЗЕРКАЛА",
      "КОНДИЦИОНЕР КОЖИ",
    ],
    image: "/services/interior.jpg",
    link: "#",
  },
  {
    id: 4,
    title: "СПЕЦИАЛЬНЫЕ ПРЕДЛОЖЕНИЯ",
    description: [
      "ЧИСТКА ЛКП + ПОЛИМЕР",
      "ЧИСТКА ЛКП + ВОСК",
      "ЧИСТКА ЛКП + КВАРЦ",
      "ЧИСТЫЙ КАЙФ",
    ],
    image: "/services/special-offers.jpg",
    link: "#",
  },
  {
    id: 5,
    title: "ДОПОЛНИТЕЛЬНЫЕ УСЛУГИ",
    description: [
      "УДАЛЕНИЕ БИТУМА",
      "ОТБЕЛИВАНИЕ ДИСКОВ",
      "МОЙКА ПОДКАПОТНОГО ПРОСТРАНСТВА",
      "АНТИДОЖДЬ",
      "ЧЕРНЕНИЕ РЕЗИНЫ",
    ],
    image: "/services/additional-services.jpg",
    link: "#",
  },
  {
    id: 6,
    title: "ХИМЧИСТКА",
    description: [
      "ХИМЧИТСКА",
      "ХИМЧИСТКА GT PRO",
      "ХИМЧИСТКА ДЕТКИХ КРЕСЕЛ",
      "ХИМЧИСТКА КОЖИ",
      "ХИМЧИСТКА РУЛЯ",
      "УСТРАНЕНИЕ СПЕЦ. ЗАГРЯЗНЕНИЙ",
    ],
    image: "/services/dry-cleaning.jpg",
    link: "#",
  },
  {
    id: 7,
    title: "ПОЛИРОВКА И ВОССТАНОВЛЕНИЕ",
    description: [
      "ПОЛИРОВКА ФАР И ФОНАРЕЙ",
      "ПОЛИРОВКА ЭЛЕМЕНТА",
      "ЛЕГКАЯ ПОЛИРОВКА",
      "ВОССТАНОВИТЕЛЬНАЯ ПОЛИРОВКА",
      "ЧИСТКА ЛКП",
    ],
    image: "/services/polishing-and-restoration.jpg",
    link: "#",
  },
  {
    id: 8,
    title: "ЗАЩИТНЫЕ ПОКРЫТИЯ",
    description: [
      "КЕРАМИКА ДЛЯ ДИСКОВ",
      "КЕРАМИКА ДЛЯ ОПТИКИ",
      "КЕРАМИКА ДЛЯ КУЗОВА SISHIELD",
      "КЕРАМИКА ДЛЯ КУЗОВА SI3D",
      "КЕРАМИКА ДЛЯ КУЗОВА SI3MAX",
    ],
    image: "/services/protective-coatings.jpg",
    link: "#",
  },
  {
    id: 9,
    title: "ОКЛЕЙКА",
    description: [
      "ОКЛЕЙКА ОПТИКИ",
      "ОКЛЕЙКА ЗОН РИСКА",
      "ЧАСТИЧНАЯ ОКЛЕЙКА КУЗОВА",
      "ОКЛЕЙКА ЭЛЕМЕНТОВ КУЗОВА",
    ],
    image: "/services/pasting-with-protective-film.jpg",
    link: "#",
  },
];

export default function Services() {
  return (
    <section className={styles["services"]} id="services">
      <h2 className={styles["services__title"]}>Услуги</h2>
      <div className={styles["services__description"]}>
        <p className={styles["services__text"]}>
          Услуги АВТОМОЙКИ GT — это не просто мойка, а забота о каждом
          автомобиле. Мы используем только профессиональные материалы и
          технологии, чтобы сохранить безупречный внешний вид вашей машины: Для
          ручной мойки применяем мягкие микрофибровые варежки — они бережно
          удаляют загрязнения, не повреждая лакокрасочное покрытие.
        </p>
        <ul className={styles["services__text-list"]}>
          <li className={styles["services__text-item"]}>
            <p className={styles["services__text"]}>
              Нижние элементы кузова обрабатываются отдельными губками,
              исключающими перекрестное загрязнение.
            </p>
          </li>
          <li className={styles["services__text-item"]}>
            <p className={styles["services__text"]}>
              Для сушки используем от 2 до 4 премиальных микрофибровых
              полотенец, которые проходят стирку после каждого применения.
            </p>
          </li>
          <li className={styles["services__text-item"]}>
            <p className={styles["services__text"]}>
              Все расходные материалы проходят регулярную проверку и заменяются
              по мере необходимости.
            </p>
          </li>
        </ul>
        <p className={styles["services__text"]}>
          Каждая услуга продумана так, чтобы ваш автомобиль выглядел идеально и
          сохранял защиту на долгие годы.
        </p>
      </div>
      <Swiper
        aria-label="Список услуг автомойки"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView="auto"
        centeredSlides={true}
        navigation={true}
        loop={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          993: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1441: {
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
                      href={service.link ?? "#"}
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
