"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", updateScrollProgress);
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  return (
    <header className={styles["header"]}>
      <div className={styles["header__top"]}>
        <Link className={styles["header__logo-link"]} href={"/"}>
          <Image
            className={styles["header__logo-image"]}
            alt="Картинка"
            src="/LogoWhite.png"
            width={210}
            height={210}
          />
        </Link>
        <button
          className={styles.burger}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Открыть меню"
        >
          <span className={styles["burger__line"]} />
          <span className={styles["burger__line"]} />
          <span className={styles["burger__line"]} />
        </button>
        <nav className={styles["site-nav"]} aria-label="Основное меню">
          <ul className={styles["site-nav__list"]}>
            <li className={styles["site-nav__list-item"]}>
              <Link href={"/"} className={styles["site-nav__list-link"]}>
                Главная
              </Link>
            </li>
            <li className={styles["site-nav__list-item"]}>
              <Link href={"/"} className={styles["site-nav__list-link"]}>
                Услуги и цены
              </Link>
            </li>
            <li className={styles["site-nav__list-item"]}>
              <Link href={"/"} className={styles["site-nav__list-link"]}>
                Акции
              </Link>
            </li>
          </ul>
        </nav>
        <div className={styles["social-networks"]}>
          <ul
            className={styles["social-networks__list"]}
            aria-label="Социальные сети"
          >
            <li className={styles["social-networks__item"]}>
              <a href={"/"} className={styles["social-networks__link"]}>
                <Image
                  className={styles["social-networks__image"]}
                  alt="Картинка"
                  src="/icon-inst.png"
                  width={50}
                  height={50}
                />{" "}
              </a>
            </li>
            <li className={styles["social-networks__item"]}>
              <a href={"/"} className={styles["social-networks__link"]}>
                <Image
                  className={styles["social-networks__image"]}
                  alt="Картинка"
                  src="/icon-teleg.png"
                  width={50}
                  height={50}
                />{" "}
              </a>
            </li>
            <li className={styles["social-networks__item"]}>
              <a href={"/"} className={styles["social-networks__link"]}>
                <Image
                  className={styles["social-networks__image"]}
                  alt="Картинка"
                  src="/icon-viber.png"
                  width={50}
                  height={50}
                />{" "}
              </a>
            </li>
          </ul>
        </div>
        <div className={styles["header__buttons"]}>
          <a
            href="tel:+375447977070"
            className={styles["header__button"]}
            aria-label="Позвонить в Автомойку GT"
          >
            Позвонить
          </a>
          <a
            className={styles["header__button"]}
            href="https://zen24.ru/online.php?clubID=48&source=site&redirect=http://avtomoikagt.by"
            target="_blank"
          >
            Записаться
          </a>
        </div>
      </div>
      <div className={styles["progress-bar"]}>
        <div
          className={styles["progress-fill"]}
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
      <div className={styles["header__bottom"]}>
        <nav className={styles["sub-nav"]} aria-label="Второстепенное меню">
          <ul className={styles["sub-nav__list"]}>
            <li className={styles["sub-nav__list-item"]}>
              <a className={styles["sub-nav__list-link"]} href={"/"}>
                Преимущества
              </a>
            </li>
            <li className={styles["sub-nav__list-item"]}>
              <a className={styles["sub-nav__list-link"]} href={"/"}>
                Услуги
              </a>
            </li>
            <li className={styles["sub-nav__list-item"]}>
              <a className={styles["sub-nav__list-link"]} href={"/"}>
                Хиты
              </a>
            </li>
            <li className={styles["sub-nav__list-item"]}>
              <a className={styles["sub-nav__list-link"]} href={"/"}>
                О нас
              </a>
            </li>
            <li className={styles["sub-nav__list-item"]}>
              <a className={styles["sub-nav__list-link"]} href={"/"}>
                Вопрос-ответ
              </a>
            </li>
            <li className={styles["sub-nav__list-item"]}>
              <a className={styles["sub-nav__list-link"]} href={"/"}>
                Контакты
              </a>
            </li>
          </ul>
        </nav>
        <div className={styles["contacts"]}>
          <a className={styles["contacts__link"]} href="tel:+375447977070">
            +375447977070
          </a>
          <address className={styles["contacts__address"]}>
            <a
              className={styles["contacts__link"]}
              href={
                "https://yandex.by/maps/org/avtomoyka_gt/58001148472/?indoorLevel=1&ll=27.428315%2C53.908925&z=17"
              }
              target="_blank"
            >
              г. Минск, ул. Притыцкого 158А
            </a>
          </address>
        </div>
      </div>
      <div
        className={`${styles["burger-block"]} ${
          isOpen ? styles["burger-block--active"] : ""
        }`}
      >
        <button
          className={styles["burger-close"]}
          onClick={() => setIsOpen(false)}
          aria-label="Закрыть меню"
        >
          ✕
        </button>
        <Link className={styles["header__logo-link"]} href={"/"}>
          <Image
            className={styles["header__logo-image"]}
            alt="Логотип Автомойки GT"
            src="/LogoWhite.png"
            width={210}
            height={210}
          />
        </Link>
        <div className={styles["header__buttons"]}>
          <a
            href="tel:+375447977070"
            className={styles["header__button"]}
            aria-label="Позвонить в Автомойку GT"
          >
            Позвонить
          </a>
          <a
            className={styles["header__button"]}
            href="https://zen24.ru/online.php?clubID=48&source=site&redirect=http://avtomoikagt.by"
            target="_blank"
          >
            Записаться
          </a>
        </div>
        <nav className={styles["site-nav"]} aria-label="Основное меню">
          <ul className={styles["site-nav__list"]}>
            <li className={styles["site-nav__list-item"]}>
              <Link href={"/"} className={styles["site-nav__list-link"]}>
                Главная
              </Link>
            </li>
            <li className={styles["site-nav__list-item"]}>
              <Link href={"/"} className={styles["site-nav__list-link"]}>
                Услуги и цены
              </Link>
            </li>
            <li className={styles["site-nav__list-item"]}>
              <Link href={"/"} className={styles["site-nav__list-link"]}>
                Акции
              </Link>
            </li>
          </ul>
        </nav>
        <div className={styles["contacts"]}>
          <a className={styles["contacts__link"]} href="tel:+375447977070">
            +375447977070
          </a>
          <address className={styles["contacts__address"]}>
            <a
              className={styles["contacts__link"]}
              href={
                "https://yandex.by/maps/org/avtomoyka_gt/58001148472/?indoorLevel=1&ll=27.428315%2C53.908925&z=17"
              }
              target="_blank"
            >
              г. Минск, ул. Притыцкого 158А
            </a>
          </address>
        </div>
        <div className={styles["social-networks"]}>
          <ul
            className={styles["social-networks__list"]}
            aria-label="Социальные сети"
          >
            <li className={styles["social-networks__item"]}>
              <a href={"/"} className={styles["social-networks__link"]}>
                <Image
                  className={styles["social-networks__image"]}
                  alt="Иконка Instagram"
                  src="/icon-inst.png"
                  width={50}
                  height={50}
                />{" "}
              </a>
            </li>
            <li className={styles["social-networks__item"]}>
              <a href={"/"} className={styles["social-networks__link"]}>
                <Image
                  className={styles["social-networks__image"]}
                  alt="Иконка Telegram"
                  src="/icon-teleg.png"
                  width={50}
                  height={50}
                />{" "}
              </a>
            </li>
            <li className={styles["social-networks__item"]}>
              <a href={"/"} className={styles["social-networks__link"]}>
                <Image
                  className={styles["social-networks__image"]}
                  alt="Иконка Viber"
                  src="/icon-viber.png"
                  width={50}
                  height={50}
                />{" "}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
