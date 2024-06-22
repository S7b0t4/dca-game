import React from 'react';

const RatesButton = ({price}) => {
  return (
    <button className='rates_button'>
      ${price}
    </button>
  );
}

export default RatesButton;