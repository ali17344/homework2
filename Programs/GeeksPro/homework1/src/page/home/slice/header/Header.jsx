import React from 'react';
import './header.css'
import cart from '../img/header-cart.svg'
import search from '../img/header-search.svg'
export const Header = () => {
    
    return (
        <div className="box">
            <div className='header-css'>
                <h2 className='header-text'>PORTEN</h2>
                <div className="header-links">
                    <div className="header-links-item header-links-home ">
                        <a href="">Понравилось</a>                                                              
                    </div>
                    <div className="header-links-item">
                        <a href="">личный кабинет</a>                                                               
                    </div>
                    <div className="header-links-item">
                        <a href="">настройки</a>                                                                
                    </div>
                </div>
                <div className="header-icon-page">
                    <a href="">
                        <img src={cart} alt="" className='header-icon-page-img' />            
                    </a>
                    <a href="">
                        <img src={search} alt="" className='header-icon-page-img'/>                
                    </a>
                </div>
            </div>
        </div>
    );
}

