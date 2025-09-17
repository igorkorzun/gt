import Image from "next/image";
import styles from "./Gallery.module.css";

interface GalleryItem {
  id: number;
  image: string;
  alt: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    image: "/gallery/1.jpg",
    alt: "Красный автомобиль с открытым капотом",
  },
  {
    id: 2,
    image: "/gallery/2.jpg",
    alt: "Полировка серебристого автомобиля",
  },
  {
    id: 3,
    image: "/gallery/3.jpg",
    alt: "Задняя часть синего автомобиля",
  },
  {
    id: 4,
    image: "/gallery/4.jpg",
    alt: "Полировка черного автомобиля",
  },
  { id: 5, image: "/gallery/5.jpg", alt: "Мойка черного автомобиля" },
  {
    id: 6,
    image: "/gallery/6.jpg",
    alt: "Синий спортивный автомобиль на выставке",
  },
  {
    id: 7,
    image: "/gallery/7.jpg",
    alt: "Черный спортивный автомобиль на трассе",
  },
  {
    id: 8,
    image: "/gallery/8.jpg",
    alt: "Чистка салона автомобиля кистью",
  },
];

export default function Gallery() {
  return (
    <section className={styles["gallery"]}>
      <h2 className={styles["gallery__title"]}>ГАЛЕРЕЯ</h2>
      <ul className={styles["gallery__list"]}>
        {galleryItems.map((item) => (
          <li key={item.id} className={styles["gallery__item"]}>
            <figure className={styles["gallery__figure"]}>
              <Image
                src={item.image}
                alt={item.alt}
                fill
                className={styles["gallery__image"]}
                style={{ objectFit: "cover" }}
              />
            </figure>
          </li>
        ))}
      </ul>
    </section>
  );
}
