import React from 'react';
import Image from 'next/image'

const HeaderTop = () => {
  const user = 'S7b0t4'
  return (
    <div className='flex items-center header_row pb-4'>
      <Image src='/ava.png' width={45} height={45} alt='yours avatar'/>
      <p className='header_user_hi'>Добро пожаловать, {user}!</p>
    </div>
  );
}

export default HeaderTop;