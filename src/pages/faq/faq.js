import React from "react";

import { FAQItems, faqQuestions } from "../../confings/constants";
import Accordion from "../../components/accordion/accordion";

import css from "./faq.module.scss";

const Faq = () => {
  return (
    <div className={css.container} id="FAQ">
      <div className={css.title}>FAQ</div>
      <div className={css.categories}>
        {FAQItems.map(({ img, title,id }) => {
          return (
            <div className={css.categoriesItem} key={id}>
              <img src={img} alt="" />
              <p>{title}</p>
            </div>
          );
        })}
      </div>
      <div className={css.questionList}>
        {faqQuestions?.map(({question, answer,id}) => (
          <Accordion title={question} content={answer} key={id}  />
        ))}
      </div>
    </div>
  );
};

export default Faq;
