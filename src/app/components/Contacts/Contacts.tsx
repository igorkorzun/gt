"use client";

import styles from "./Contacts.module.css";
import Image from "next/image";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import { useRef } from "react";

interface YMapInstance {
  behaviors: {
    disable: (behavior: "scrollZoom" | "dblClickZoom" | "multiTouch") => void;
  };
}

export default function Contacts() {
  const mapRef = useRef<YMapInstance | null>(null);

  const onMapLoad = (mapInstance: YMapInstance | null) => {
    if (!mapInstance) return;
    mapRef.current = mapInstance;
    mapInstance.behaviors.disable("scrollZoom");
    mapInstance.behaviors.disable("dblClickZoom");
  };

  return (
    <section className={styles["contacts"]} id="contacts">

      <h2 className={styles["contacts__title"]}>КОНТАКТЫ</h2>

      <address className={styles["contacts__address"]}>
        <a
          className={styles["contacts__link-telephone"]}
          href="tel:+375447977070"
        >
          +375 (44) 797-70-70
        </a>
        <a
          className={styles["contacts__link-address"]}
          href="https://yandex.by/maps/org/avtomoyka_gt/58001148472/?indoorLevel=1&ll=27.428315%2C53.908925&z=17"
          target="_blank"
          rel="noopener noreferrer"
        >
          г. Минск, ул. Притыцкого, 158А
        </a>
        <a
          className={styles["contacts__link-mail"]}
          href="mailto:avtomoikagt@gmail.com"
        >
          avtomoikagt@gmail.com
        </a>
      </address>

      <p className={styles["contacts__worktime"]}>
        Работаем <strong>КРУГЛОСУТОЧНО</strong>
      </p>

      <nav
        className={styles["contacts__social-networks"]}
        aria-label="Социальные сети"
      >

        <ul className={styles["contacts__social-list"]}>
          <li className={styles["contacts__social-item"]}>
            <a
              href={"https://www.instagram.com/avtomoikagt/"}
              className={styles["contacts__social-link"]}
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className={styles["contacts__social-image"]}
                alt="Instagram"
                src="/icon-inst.png"
                width={50}
                height={50}
              />
            </a>
          </li>

          <li className={styles["contacts__social-item"]}>
            <a
              href={"https://t.me/Avtomoika_GT"}
              className={styles["contacts__social-link"]}
              aria-label="Telegram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className={styles["contacts__social-image"]}
                alt="Telegram"
                src="/icon-teleg.png"
                width={50}
                height={50}
              />
            </a>
          </li>

          <li className={styles["contacts__social-item"]}>
            <a
              href={"viber://chat?number=375447977070"}
              className={styles["contacts__social-link"]}
              aria-label="Viber"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className={styles["contacts__social-image"]}
                alt="Viber"
                src="/icon-viber.png"
                width={50}
                height={50}
              />
            </a>
          </li>
        </ul>
      </nav>

      <YMaps>
        <Map
          defaultState={{
            center: [53.908676, 27.428628],
            zoom: 17,
            // controls: ["zoomControl", "fullscreenControl"],
          }}
          options={
            {
              // suppressMapOpenBlock: true,
            }
          }
          width="100%"
          height="400px"
          modules={["control.ZoomControl", "control.FullscreenControl"]}
          instanceRef={onMapLoad}
        >
          <Placemark
            geometry={[53.908676, 27.428628]}
            options={{
              iconLayout: "default#image",
              iconImageHref: "/MarkerGT.png",
              iconImageSize: [50, 50],
              iconImageOffset: [-25, -45],
            }}
          />
        </Map>
      </YMaps>
      
    </section>
  );
}
