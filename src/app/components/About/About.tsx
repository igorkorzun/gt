"use client";

import styles from "./About.module.css";

export default function About() {
  return (
    <section className={styles["about"]}>
      <h2 className={styles["about__title"]}>О НАС</h2>
      <p className={styles["about__subtitle"]}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi veniam
        maiores optio. Saepe fugiat nulla, quo animi minus perspiciatis enim ex
        quas rerum vitae expedita recusandae velit voluptate. Sunt, adipisci?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, commodi
        laboriosam. Nam facilis obcaecati nesciunt numquam debitis velit. Est
        perspiciatis, ex rerum ipsum deserunt temporibus cum inventore quia hic
        quidem!
      </p>
    </section>
  );
}
