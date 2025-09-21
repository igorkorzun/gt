"use client";

import { objListDescr } from "@/app/data/advantagesData";
import styles from "./AdvantagesDescr.module.css";

export function AdvantagesDescr() {
  return (
    <ul className={styles["list"]}>
      {objListDescr.map((item, index) => (
        <li className={styles["item"]} key={index}>
          <p className={styles["text"]}>
            <strong className={styles["strong"]}>{item.title}</strong>{" "}
            {item.text}
          </p>
        </li>
      ))}
    </ul>
  );
}