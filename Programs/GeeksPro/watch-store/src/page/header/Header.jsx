import React, { useState } from 'react';
import telImg from '../img/contact.svg';
import loginImg from '../img/login.svg';
import cartImg from '../img/header-cart.svg';
import searchImg from '../img/header-search.svg';
import './header.scss';
import BurgerMenu from './BurgerMenu';

export const Header = () => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [showRegistration, setShowRegistration] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const handleLogin = () => {
    if (userName !== '' && userPassword !== '') {
    alert('Вы успешно зашли в свой аккаунт');
    setShowLogin(false);
    setUserName('')
    setUserEmail('')
    setUserPassword('')
    } else {
    alert('Пожалуйста, заполните все поля');
    }
  };

  const handleRegistration = () => {
    if (userName !== '' && userEmail !== '' && userPassword !== '') {
    alert('Регистрация успешна');
    setShowRegistration(false);
    setUserName('')
    setUserEmail('')
    setUserPassword('')
    } else {
    alert('Пожалуйста, заполните все поля');
    }
  };

  return (
    <div className='container'>
      <div className="flex-container">
        <div className="row">
          <div className="header">
            <div className='row'>
              <img src={telImg} alt="" className='header-contact-img'/>
              <p className="header-contact">
                <a href="tel:8 (812) 123-45-67">8 (812) 123-45-67</a> | Работаем 7 дней в неделю | 9:00 — 18:00
              </p>
            </div>
            <div className="row">
              <img src={loginImg} alt="" className='header-contact-img' />
              <p className="header-contact">
                <a href="#" onClick={() => { setShowLogin(!showLogin); setShowRegistration(false); }}>Войти</a> / 
                <a href="#" onClick={() => { setShowRegistration(!showRegistration); setShowLogin(false); }}>Регистрация</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-container">
        <div className="header-navLink">
          <div className="row">
            <h3 className='header-navLink-brand-name'>PORTEN</h3>
          </div>
          <div className="row">
            <div className="header-navLink-links active">
              <a href='#'>Понравилось</a>
            </div>
            <div className="header-navLink-links">
              <a href='#'  onClick={()=>{setShowLogin(!showLogin);setShowRegistration(false)}}>личный кабинет</a>
            </div>
            <div className="header-navLink-links">
              <a href='#'>настройки</a>
            </div>
            <BurgerMenu setShowRegistration={setShowRegistration} setShowLogin={setShowLogin} showLogin={showLogin} />
            <a href="#">
              <img src={cartImg} alt="" className='header-navLink-img' />
            </a>
            <a href="#">
              <img src={searchImg} alt="" className='header-navLink-img' />
            </a>
          </div>
        </div>
      </div>
      {showRegistration && (
        <div className='check'>
            <p className="check-p">Name</p>
          <input type="text" className='check-input'  value={userName} onChange={(e) => setUserName(e.target.value)} />
          <p className="check-p">Email</p>
          <input type="email" className='check-input'value={userEmail} onChange={(e) => setUserEmail(e.target.value)} />
          <p className="check-p">Password</p>
          <input type="password" className='check-input' value={userPassword} onChange={(e) => setUserPassword(e.target.value)} />
          <button className='check-btn' onClick={handleRegistration} >Зарегистрироваться</button>
          <button className='check-btn' onClick={()=>{setShowLogin(!showLogin); setShowRegistration(false);}}>Войти</button>
        </div>
      )}
      {showLogin && (
          <div className='check login'>
            <p className="check-p">Name</p>
          <input type="text" className='check-input'  value={userName} onChange={(e) => setUserName(e.target.value)} />
          <p className="check-p">Password</p>
          <input type="password" className='check-input' value={userPassword} onChange={(e) => setUserPassword(e.target.value)} />
          <button className='check-btn' onClick={()=>{setShowRegistration(!showRegistration); setShowLogin(false);}}>Зарегистрироваться</button>
          <button className='check-btn' onClick={handleLogin}>Войти</button>
        </div>
      )}
    </div>
  );
};

