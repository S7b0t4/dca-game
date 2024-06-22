import React from 'react';
import RatesButton from './RatesButton';

const RatesRow = () => {
  return (
    <div className='rates_row flex justify-between'>
      <RatesButton price="0.25"/>
      <RatesButton price="0.5"/>
      <RatesButton price="0.75"/>
      <RatesButton price="1"/>
    </div>
  );
}

export default RatesRow;