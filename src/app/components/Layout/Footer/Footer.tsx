"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles["footer"]}>

      <div className={styles["footer__container"]}>

        <div className={styles["footer__left"]}>

          <h3 className={styles["footer__title"]}>НАВИГАЦИЯ</h3>
          <nav
            className={styles["footer__nav"]}
            aria-label="Навигация по сайту в футере"
          >
            <div className={styles["footer__nav-separator"]}>
              <ul className={styles["footer__list"]}>
                <li className={styles["footer__item"]}>
                  <Link href="/" className={styles["footer__link"]}>
                    Главная
                  </Link>
                </li>
                <li className={styles["footer__item"]}>
                  <Link href="/services" className={styles["footer__link"]}>
                    Услуги и цены
                  </Link>
                </li>
                <li className={styles["footer__item"]}>
                  <Link href="/promotions" className={styles["footer__link"]}>
                    Акции
                  </Link>
                </li>
              </ul>
              <ul className={styles["footer__sublist"]}>
                <li className={styles["footer__subitem"]}>
                  <a href="#advantages" className={styles["footer__sublink"]}>
                    Преимущества
                  </a>
                </li>
                <li className={styles["footer__subitem"]}>
                  <a href="#services" className={styles["footer__sublink"]}>
                    Услуги
                  </a>
                </li>
                <li className={styles["footer__subitem"]}>
                  <a href="#hits" className={styles["footer__sublink"]}>
                    Хиты
                  </a>
                </li>
                <li className={styles["footer__subitem"]}>
                  <a href="#about" className={styles["footer__sublink"]}>
                    О нас
                  </a>
                </li>
                <li className={styles["footer__subitem"]}>
                  <a href="#faq" className={styles["footer__sublink"]}>
                    Вопрос-ответ
                  </a>
                </li>
                <li className={styles["footer__subitem"]}>
                  <a href="#contacts" className={styles["footer__sublink"]}>
                    Контакты
                  </a>
                </li>
              </ul>
            </div>
          </nav>

        </div>

        <div className={styles["footer__center"]}>

          <Link href="/" className={styles["footer__logo-link"]}>
            <Image
              src="/logo.png"
              alt="Логотип CARWASHGT"
              width={200}
              height={200}
              className={styles["footer__logo"]}
            />
          </Link>
          <ul
            className={styles["footer__payments"]}
            aria-label="Способы оплаты"
          >
            <li className={styles["footer__payments-item"]}>
              <Image
                className={styles["footer__payments-logo"]}
                src="/pay1.png"
                alt="Мир"
                width={70}
                height={20}
              />
            </li>
            <li className={styles["footer__payments-item"]}>
              <Image
                className={styles["footer__payments-logo"]}
                src="/pay2.png"
                alt="Visa"
                width={70}
                height={20}
              />
            </li>
            <li className={styles["footer__payments-item"]}>
              <Image
                className={styles["footer__payments-logo"]}
                src="/pay3.png"
                alt="Белкарт"
                width={70}
                height={20}
              />
            </li>
            <li className={styles["footer__payments-item"]}>
              <Image
                className={styles["footer__payments-logo"]}
                src="/pay4.png"
                alt="Mastercard"
                width={70}
                height={20}
              />
            </li>
            <li className={styles["footer__payments-item"]}>
              <Image
                className={styles["footer__payments-logo"]}
                src="/pay5.png"
                alt="Mastercard"
                width={70}
                height={20}
              />
            </li>
          </ul>

        </div>

        <div className={styles["footer__right"]}>

          <h3 className={styles["footer__title"]}>КОНТАКТЫ</h3>

          <address className={styles["footer__contacts"]}>
            <a
              className={styles["footer__contacts-link"]}
              href="tel:+375447977070"
            >
              +375 (44) 797-70-70
            </a>
            <a
              className={styles["footer__contacts-link"]}
              href="https://yandex.by/maps/org/avtomoyka_gt/58001148472/?indoorLevel=1&ll=27.428315%2C53.908925&z=17"
              target="_blank"
              rel="noopener noreferrer"
            >
              г. Минск, ул. Притыцкого, 158А
            </a>
            <a
              className={styles["footer__contacts-link"]}
              href="mailto:avtomoikagt@gmail.com"
            >
              avtomoikagt@gmail.com
            </a>
          </address>
          <p className={styles["footer__worktime"]}>
            Работаем <strong>КРУГЛОСУТОЧНО</strong>
          </p>
          <ul className={styles["footer__social-list"]}>
            <li className={styles["footer__social-item"]}>
              <a
                href={"https://www.instagram.com/avtomoikagt/"}
                className={styles["footer__social-link"]}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className={styles["footer__social-image"]}
                  alt="Instagram"
                  src="/icon-inst.png"
                  width={50}
                  height={50}
                />
              </a>
            </li>
            <li className={styles["footer__social-item"]}>
              <a
                href={"https://t.me/Avtomoika_GT"}
                className={styles["footer__social-link"]}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className={styles["footer__social-image"]}
                  alt="Telegram"
                  src="/icon-teleg.png"
                  width={50}
                  height={50}
                />
              </a>
            </li>
            <li className={styles["footer__social-item"]}>
              <a
                href={"viber://chat?number=375447977070"}
                className={styles["footer__social-link"]}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className={styles["footer__social-image"]}
                  alt="Viber"
                  src="/icon-viber.png"
                  width={50}
                  height={50}
                />
              </a>
            </li>
          </ul>

        </div>

      </div>

      <div className={styles["footer__bottom"]}>

        <p className={styles["footer__bottom-text"]}>
          <span>© {new Date().getFullYear()} CARWASHGT.</span>
          <span>Все права защищены.</span>
        </p>
        
      </div>
    </footer>
  );
}
