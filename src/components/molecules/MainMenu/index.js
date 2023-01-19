import React from 'react';
import MenuItem from '../../atoms/MenuItem';

import './styles.scss';

function MainMenu() {
  return (
    <ul className="main-menu">
      <MenuItem link="/">Home</MenuItem>
      <MenuItem link="/about">About</MenuItem>
      <MenuItem link="/blog">Blog</MenuItem>
      <MenuItem link="/contact">Contact</MenuItem>
    </ul>
  )
}

export default MainMenu;
