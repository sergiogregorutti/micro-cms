import React from 'react';
import Logo from '../../atoms/Logo';
import MainMenu from '../../molecules/MainMenu';
import SearchForm from '../../molecules/SearchForm';

import './styles.scss';

function Header() {
  return (
    <div className="header">
      <div className="left">
        <Logo />
        <MainMenu />
      </div>
      <div className="right">
        <SearchForm />
      </div>
    </div>
  )
}

export default Header;
