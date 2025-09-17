"use client";

import { useEffect } from "react";
import "accordion-js/dist/accordion.min.css";
import styles from "./Faq.module.css";

export default function Faq() {
  useEffect(() => {
    import("accordion-js").then(({ default: Accordion }) => {
      const el = document.querySelector(".accordion");
      if (el) {
        new Accordion(el, {
          duration: 300,
          showMultiple: false,
        });
      }
    });
  }, []);

  interface Faq {
    id: number;
    question: string;
    answer: string;
  }

  const faq: Faq[] = [
    {
      id: 1,
      question: "Какой-то вопрос?",
      answer:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, minima veritatis vero voluptatibus minus neque quae! Vero molestiae perspiciatis harum totam voluptate soluta explicabo, quidem, id, ratione in officiis hic.",
    },
    {
      id: 2,
      question: "Какой-то вопрос?",
      answer:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, minima veritatis vero voluptatibus minus neque quae! Vero molestiae perspiciatis harum totam voluptate soluta explicabo, quidem, id, ratione in officiis hic.",
    },
    {
      id: 3,
      question: "Какой-то вопрос?",
      answer:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, minima veritatis vero voluptatibus minus neque quae! Vero molestiae perspiciatis harum totam voluptate soluta explicabo, quidem, id, ratione in officiis hic.",
    },
    {
      id: 4,
      question: "Какой-то вопрос?",
      answer:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, minima veritatis vero voluptatibus minus neque quae! Vero molestiae perspiciatis harum totam voluptate soluta explicabo, quidem, id, ratione in officiis hic.",
    },
    {
      id: 5,
      question: "Какой-то вопрос?",
      answer:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, minima veritatis vero voluptatibus minus neque quae! Vero molestiae perspiciatis harum totam voluptate soluta explicabo, quidem, id, ratione in officiis hic.",
    },
    {
      id: 6,
      question: "Какой-то вопрос?",
      answer:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, minima veritatis vero voluptatibus minus neque quae! Vero molestiae perspiciatis harum totam voluptate soluta explicabo, quidem, id, ratione in officiis hic.",
    },
    {
      id: 7,
      question: "Какой-то вопрос?",
      answer:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, minima veritatis vero voluptatibus minus neque quae! Vero molestiae perspiciatis harum totam voluptate soluta explicabo, quidem, id, ratione in officiis hic.",
    },
  ];

  return (
    <section className={styles.faq}>
      <h2 className={styles.faq__title}>ВОПРОС-ОТВЕТ</h2>

      <div className="accordion">
        {faq.map((item, index) => (
          <div
            key={item.id}
            className={`ac ${index % 2 !== 0 ? "ac-right" : "ac-left"}`}
          >
            <h3 className="ac-header">
              <button type="button" className="ac-trigger">
                {item.question}
              </button>
            </h3>
            <div className="ac-panel">
              <p className="ac-text">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
