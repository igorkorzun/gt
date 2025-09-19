"use client";

import styles from "./Hero.module.css";
// import Link from "next/link";

export default function Hero() {
  return (
    <section className={styles["hero"]}>

      <div className={styles["hero__content"]}>

        <p className={styles["hero__subtitle"]}>
          ДЛЯ ТЕХ, КТО ЦЕНИТ СВОЙ АВТОМОБИЛЬ
        </p>

        <h1 className={styles["hero__title"]}>
          КРУГЛОСУТОЧНАЯ АВТОМОЙКА В МИНСКЕ
        </h1>

        {/* <Link href="#" className={styles["hero__button"]}>
          ПЕРЕЙТИ К УСЛУГАМ
        </Link> */}
        
      </div>

    </section>
  );
}
