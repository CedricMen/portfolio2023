import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

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
      <Link to='/' onClick={closeMenu}>Cédric Ménard</Link>
      <span className="menu" onClick={openMenu}>
        +
      </span>
      <div className={`sidenav ${isMenuOpen ? 'open' : ''}`} id="mySidenav">
        <button href='#' rel="noopener noreferrer" className="closeMenu" onClick={closeMenu}>
          -
        </button>
        <Link to='/' onClick={closeMenu}>&#8226; Accueil</Link>
        <Link to='/' onClick={closeMenu}>&#8226; Projets</Link>
        <Link to='/about' onClick={closeMenu}>&#8226; À propos</Link>
        <Link to='/contact' onClick={closeMenu}>&#8226; Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;