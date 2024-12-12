
import React, { useState } from 'react';
import './burgerMenu.scss';

const BurgerMenu = ({showLogin,setShowLogin,setShowRegistration}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="burger-menu">
        <div className={`burger-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav className={`menu ${isOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="#">понравилось</a></li>
            <li><a href="#" onClick={()=>{setShowLogin(!showLogin);setShowRegistration(false)}}>личный кабинет</a></li>
            <li><a href="#">настройки</a></li>
          </ul>
        </nav>
      </div>
  );
};

export default BurgerMenu;
