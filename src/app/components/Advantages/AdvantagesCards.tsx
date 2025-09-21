"use client";

import { objListCard } from "@/app/data/advantagesData";
import styles from "./AdvantagesCards.module.css";

export function AdvantagesCard() {
  return (
    <ul className={styles["list"]}>
      {objListCard.map((item, index) => (
        <li className={styles["item"]} key={index}>
          <div className={styles["card"]}>
            <div
              className={styles["front"]}
              style={{ backgroundImage: `url(${item.path})` }}
              aria-hidden="true"
            ></div>
            <div className={styles["back"]}>
              <p className={styles["text"]}>{item.text}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}