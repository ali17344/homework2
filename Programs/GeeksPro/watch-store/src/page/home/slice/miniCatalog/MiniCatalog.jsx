import React from 'react';
import './miniCatalog.scss'
import time from '../../../img/catalog.png'
export const MiniCatalog = () => {
    return (
        <div className='container'>
            <div className="flex-container">
                <div className="col-6">
                    <h3 className="col-6-text-h3">СЕЗОН 2020/21</h3>
                    <div className="col-6-hr"></div>
                    <div className="col-6 row">
                        <div className="col-6-time-card">
                           <img src={time} alt="" className='col-6-time-card-img'/>
                           <p className="col-6-time-card-text">Louis XVI ATHOS</p>
                           <p className="col-6-time-card-text">165 000 руб.  </p>
                        </div>
                        <div className="col-6-time-card">
                           <img src={time} alt="" className='col-6-time-card-img'/>
                           <p className="col-6-time-card-text">Louis XVI ATHOS</p>
                           <p className="col-6-time-card-text">165 000 руб.  </p>
                        </div>
                        <div className="col-6-time-card">
                           <img src={time} alt="" className='col-6-time-card-img'/>
                           <p className="col-6-time-card-text">Louis XVI ATHOS</p>
                           <p className="col-6-time-card-text">165 000 руб.  </p>
                        </div>
                    </div>
                </div>
                <div className="col-6 col-6-2">
                    <h3 className="col-6-2-text">Новая коллекция</h3>
                    <div className="col-6-hr"></div>
                    <button className="col-6-btn-2">Каталог</button>
                </div>
            </div>
        </div>
    );
}

