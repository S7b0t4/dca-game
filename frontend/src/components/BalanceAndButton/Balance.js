import React from 'react';
import Image from 'next/image';

const Balance = ({money}) => {
  return (
    <div className='header_row_item header_row_balance flex justify-between'>
      <div>
        <div className='balance_subtitle'>Ваш баланс:</div>
        <div className='balance_amount'>{money}$</div>
      </div>
      <Image src='/coin.png' width={49} height={49} alt='Coin'/>
    </div>
  );
}

export default Balance;