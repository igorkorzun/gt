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
      question: "Как часто нужно мыть машину?",
      answer:
        "Рекомендуем каждые 1–2 недели. Регулярная мойка защищает ЛКП от реагентов, грязи и мелких повреждений, сохраняя авто в идеальном виде.",
    },
    {
      id: 2,
      question: "Для чего нужны защитные покрытия на автомобиле?",
      answer:
        "Они образуют прочный барьер от грязи, реагентов, ультрафиолета и мелких царапин. Авто дольше остаётся чистым и блестящим.",
    },
    {
      id: 3,
      question: "Что такое керамическая защита авто?",
      answer:
        "Это инновационное покрытие, создающее прочную защитную пленку. Кузов приобретает глубокий блеск, а мыть машину становится гораздо проще.",
    },
    {
      id: 4,
      question: "Как часто и зачем нужно полировать авто?",
      answer:
        "Полировка 1–2 раза в год убирает мелкие дефекты, возвращает яркость ЛКП и подготавливает поверхность для надёжной защиты.",
    },
    {
      id: 5,
      question: "Зачем мыть подкрылки и днище, если их не видно?",
      answer:
        "В этих зонах скапливается грязь, соль и влага — главные враги кузова. Регулярная мойка продлевает срок службы металла и предотвращает коррозию.",
    },
  ];

  return (
    <section className={styles.faq} id="faq">

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
