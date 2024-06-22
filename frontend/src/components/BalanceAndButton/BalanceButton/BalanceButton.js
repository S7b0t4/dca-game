import React from 'react';
import Image from 'next/image';

const BalanceButton = ({img, title, color, alt}) => {
  return (
    <div className={`header_row_item header_row_item_button_wrapper ${color}`}>
      <div className='header_row_item_button'>
        <Image src={img} width={35} height={35} className='m-auto' alt={alt}/>
        <p className='header_row_item_button_title'>{title}</p>
      </div>
    </div>
  );
}

export default BalanceButton;