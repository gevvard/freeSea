import React from "react";

import { footerPayments } from "../../confings/constants";

import wkImage from "../../assets/images/footer/social-icon-wk.png";
import telegramImage from "../../assets/images/footer/social-icon-t.png";

import css from "./footer.module.scss";

const Footer = () => {
  return (
    <div className={css.footer}>
      <div className={css.footerContent}>
        <div className={css.payments}>
          {footerPayments?.map((payment) => (
            <img key={payment} src={payment} alt="" />
          ))}
        </div>
        <div className={css.info}>
          <div>+ 374 (77) 77-77-77</div>
          <div>from 9:00 to 21:00</div>
          <div>info@freesea.com</div>
        </div>
        <div className={css.service}>
          <div>Ready meals with delivery</div>
          <div>offer contract</div>
          <div>Privacy Policy</div>
        </div>
        <div className={css.socialIcons}>
          <img src={wkImage} alt="" />
          <img src={telegramImage} alt="telegram" />
        </div>
      </div>
      <div className={css.addressLine}>
        “HarConstruct” LLC text 889989899 text 43424234234 001, Yerevan, street
        adress 1/1
      </div>
    </div>
  );
};

export default Footer;
