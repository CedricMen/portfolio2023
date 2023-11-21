import React, { useState } from 'react';
import './navbar.css'

const Navbar = () => {

  const [isMenuOpen, setMenuOpen] = useState(false);

  const openMenu = () => {
    setMenuOpen(true);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };
  return (
      <div className="navbar" id="navbar">
      <a>Cédric Ménard</a>
      <span className="menu" onClick={openMenu}>+</span>
        <div className={`sidenav ${isMenuOpen ? 'open' : ''}`} id="mySidenav">
          <a className="closeMenu" onClick={closeMenu}>-</a>
          <a>&#8226; Accueil</a>
          <a>&#8226; Projets</a>
          <a>&#8226; À propos</a>
          <a>&#8226; Contact</a>
        </div>
    </div>
  )
}

  

export default Navbar