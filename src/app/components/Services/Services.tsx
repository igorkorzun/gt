import styles from "./Services.module.css";
import { servicesData } from "@/app/data/servicesData";
import ServicesSwiper from "./ServicesSwiper";

export default function Services() {
  return (
<section className={styles["services"]} id="services" aria-label="Услуги автомойки CARWASHGT">
      <h2 className={styles["title"]}>Услуги</h2>
      <div className={styles["description"]}>
        <p className={styles["text"]}>
          Услуги CARWASHGT — это не просто мойка, а забота о каждом автомобиле.
          Мы используем только профессиональные материалы и технологии, чтобы
          сохранить безупречный внешний вид вашей машины: Для ручной мойки
          применяем мягкие микрофибровые варежки — они бережно удаляют
          загрязнения, не повреждая лакокрасочное покрытие.
        </p>
        <ul className={styles["list"]}>
          <li className={styles["item"]}>
            <p className={styles["text"]}>
              Нижние элементы кузова обрабатываются отдельными губками,
              исключающими перекрестное загрязнение.
            </p>
          </li>
          <li className={styles["item"]}>
            <p className={styles["text"]}>
              Для сушки используем от 2 до 4 премиальных микрофибровых
              полотенец, которые проходят стирку после каждого применения.
            </p>
          </li>
          <li className={styles["item"]}>
            <p className={styles["text"]}>
              Все расходные материалы проходят регулярную проверку и заменяются
              по мере необходимости.
            </p>
          </li>
        </ul>
        <p className={styles["text"]}>
          Каждая услуга продумана так, чтобы ваш автомобиль выглядел идеально и
          сохранял защиту на долгие годы.
        </p>
      </div>
      <ServicesSwiper servicesData={servicesData} />
    </section>
  );
}
