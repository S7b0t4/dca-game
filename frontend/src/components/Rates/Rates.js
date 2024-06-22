import React from 'react';
import './Rates.css'
import RatesRow from './RatesRow';

const Rates = () => {
  return (
    <div className='rates_wrapper'>
      <div className='rates_title'>Выберите ставку игры:</div>
      <RatesRow />
    </div>
  );
}

export default Rates;