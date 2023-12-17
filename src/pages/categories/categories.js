import React from 'react';

import {categoriesItems} from "../../confings/constants";

import css from './categories.module.scss'

const Categories = () => {
  return (
    <div className={css.container}>
      {
        categoriesItems.map(({title,img})=>{
          return <div className={css.item} key={title}>
            <img src={img} alt=""/>
            <p>{title}</p>
          </div>
        })
      }
    </div>
  );
};

export default Categories;