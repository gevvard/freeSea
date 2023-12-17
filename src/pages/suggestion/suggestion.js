import React from 'react';

import Button from '../../components/button/button';

import css from './suggestion.module.scss'

const Suggestion = () => {
  return (
    <div className={css.suggestion}>
      <div className={css.textBox}>
        <div>Still thinking?</div>
        <h2>{`Try \n two weeks of \n nutrition`}</h2>
        <h2 className={css.price}>for 5880 AMD</h2>
        <Button text={'Try now'} size={'small'} variant={'primary'}/>
      </div>
    </div>
  );
};

export default Suggestion;