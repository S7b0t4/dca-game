import React from 'react';

import Balance from '../BalanceAndButton/Balance';
import BalanceButton from '../BalanceAndButton/BalanceButton/BalanceButton'

const HeaderRow = () => {
  const money = 1500
  return (
    <div className='flex header_row justify-between'>
      <div className='header_row_balance_wrapper'>
        <Balance money={money} />
      </div>
      <div className='header_row_button_wrapper'>
        <BalanceButton img='/tookOut.png' title='Вывести' color='red' alt='TookOut'/>
        <BalanceButton img='/bring.png' title='Пополнить баланс' color='blue' alt='bring'/>
      </div>
   </div>
  );
}

export default HeaderRow;