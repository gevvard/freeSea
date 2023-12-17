import React, { useState } from "react";

import arrowIcon from '../../assets/images/accordion/arrow.png';

import css from "./accordion.module.scss"

const Accordion = ({ title, content }) => {

  const [isOpened, setIsOpened] = useState(false);

  const toggle = () => {
    setIsOpened(!isOpened);
  }

  return (
    <div onClick={toggle} className={css.accordion}>
      <div className={css.accordionTitle}>
      {title}
      <img
        src={arrowIcon}
        alt="arrow"
        className={css[`${isOpened ? 'opened' : 'closed'}`]}
      />
      </div>
      {isOpened ?
      <div>{content}</div>
    : null}
    </div>
  );
};

export default Accordion;
