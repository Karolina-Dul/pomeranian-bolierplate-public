import React from 'react';
import { HeaderMenu } from '../Components/HeaderMenu/HeaderMenu';
import { useState } from 'react';

import './styles/header.css';
import { Logo } from '../Components/Logo/Logo';

export function AppHeader() {
  // const [isOpen, setIsOpen] = useState(false);

  // const toggleMenu = () => {
  //   setIsOpen(!isOpen);
  // };

  return (
    <header>
      <Logo />
      <HeaderMenu />
      {/* {<i class="fa-solid fa-bars"></i>} */}
    </header>
  );
}
