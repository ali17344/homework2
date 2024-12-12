import React from 'react';
import './catalog.scss'
import timeCardImg from '../../../img/catalog.png'
export const Catalog = () => {
    return (
        <div className='container'>
            <div className="catalog">
                <h3 className="catalog-text-h3">новые поступления</h3>
                <div className="catalog-hr"></div>
                <div className="flex-container">
                    <div className="time-card">
                        <img src={timeCardImg} alt="" className="time-card-img" />
                        <p className="time-card-text-p">Louis XVI ATHOS</p>                        
                        <p className="time-card-text-p">165 000 руб.</p>
                    </div>
                    <div className="time-card">
                        <img src={timeCardImg} alt="" className="time-card-img" />
                        <p className="time-card-text-p">Louis XVI ATHOS</p>                        
                        <p className="time-card-text-p">165 000 руб.</p>
                    </div>
                    <div className="time-card">
                        <img src={timeCardImg} alt="" className="time-card-img" />
                        <p className="time-card-text-p">Louis XVI ATHOS</p>                        
                        <p className="time-card-text-p">165 000 руб.</p>
                    </div>
                    <div className="time-card">
                        <img src={timeCardImg} alt="" className="time-card-img" />
                        <p className="time-card-text-p">Louis XVI ATHOS</p>                        
                        <p className="time-card-text-p">165 000 руб.</p>
                    </div>
                </div>                
                <div className="flex-container">
                    <div className="time-card">
                        <img src={timeCardImg} alt="" className="time-card-img" />
                        <p className="time-card-text-p">Louis XVI ATHOS</p>                        
                        <p className="time-card-text-p">165 000 руб.</p>
                    </div>
                    <div className="time-card">
                        <img src={timeCardImg} alt="" className="time-card-img" />
                        <p className="time-card-text-p">Louis XVI ATHOS</p>                        
                        <p className="time-card-text-p">165 000 руб.</p>
                    </div>
                    <div className="time-card">
                        <img src={timeCardImg} alt="" className="time-card-img" />
                        <p className="time-card-text-p">Louis XVI ATHOS</p>                        
                        <p className="time-card-text-p">165 000 руб.</p>
                    </div>
                    <div className="time-card">
                        <img src={timeCardImg} alt="" className="time-card-img" />
                        <p className="time-card-text-p">Louis XVI ATHOS</p>                        
                        <p className="time-card-text-p">165 000 руб.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
