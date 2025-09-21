import Link from "next/link";
import styles from "./ServicesCard.module.css";
import { Service } from "@/app/types/Service";

interface Props {
  service: Service;
}

export default function ServiceCard({ service }: Props) {
  return (
    <div
      className={styles["card"]}
      style={{
        backgroundImage: `url(${service.image})`,
      }}
    >
      <div className={styles["content"]}>
        <h3 className={styles["title"]}>{service.title}</h3>
        <ul className={styles["list"]}>
          {service.description.map((line, idx) => (
            <li key={idx} className={styles["item"]}>
              <Link href={service.link ?? "#"} className={styles["link"]}>
                {line}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
