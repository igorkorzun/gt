"use client";

import styles from "./Advantages.module.css";
import { AdvantagesDescr } from "./AdvantagesDescr";
import { AdvantagesCard } from "./AdvantagesCards";

export default function Advantages() {
  return (
    <section className={styles["advantages"]} id="advantages">
      <h2 className={styles["title"]}>НАШИ ПРЕИМУЩЕСТВА</h2>
      <AdvantagesDescr />
      <AdvantagesCard />
    </section>
  );
}
