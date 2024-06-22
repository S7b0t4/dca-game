import React from 'react';
import HeaderRow from './HeaderRow';
import HeaderTop from './HeaderTop';
import './Header.css'

const Header = () => {
  return (
    <header>
      <HeaderTop/>
      <HeaderRow/>
    </header>
  );
}

export default Header;