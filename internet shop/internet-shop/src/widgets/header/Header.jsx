import React from 'react';
import './header.scss'
export const Header = () => {
    return (
        <header className='container header'>
            <div className="flex">
                <div className="header">
                    <div className="flex">
                        <p className="header-links">WOMEN</p>
                        <p className="header-links">MEN</p>
                        <p className="header-links">COLLECTIONS</p>
                        <p className="header-links">ABOUT</p>
                    </div>
                </div>
                <div className="header">
                    <p className="header-brand-name">SHADOW GEAR</p>
                </div>
                <div className="header">
                    <div className="flex">
                        <p className="header-links">SEARCH</p>
                        <p className="header-links">WISHLIST</p>
                        <p className="header-links">ACCOUNT</p>
                        <p className="header-links">BAG (3)</p>
                    </div>
                </div>
            </div>
        </header>
    );
}

