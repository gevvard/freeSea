import React from 'react';

import Header from "./header";
import Main from "./main";
import Footer from "./footer";

import css from './layout.module.scss'

const Layout = () => {
  return (
    <div className={css.container}>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
};

export default Layout;