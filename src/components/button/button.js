import React from 'react';
import css from './button.module.scss'

const Button = ({text,onClick,size, variant}) => {

  const sizeClasses = {
    small: css.small,
    medium: css.medium,
    large: css.large,
  };

  const btnClass = sizeClasses[size];
  return (
    <button
      type={"button"}
      onClick={onClick}
      className={`${css.btn} ${btnClass} ${css[variant]}`}
    >
      {text}
    </button>
  );
};

export default Button;