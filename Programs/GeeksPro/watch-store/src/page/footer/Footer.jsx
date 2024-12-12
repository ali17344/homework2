import React from 'react';
import './footer.scss'
export const Footer = () => {
    return (
        <div className='container'>
            <div className="footer">
                <div className="flex-container">
                        <div className="col-3">
                            <h3 className="footer-text-h3">О магазине</h3>
                            <p className="footer-text-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi semper viverra nunc cursus tortor lectus nunc nulla nibh. Egestas amet consectetur vel vitae aliquam dictum suspendisse. Lobortis eget consequat, tellus et et sed turpis. Pretium quisque vitae, amet, porttitor odio ultricies massa pharetra leo. Et ipsum urna fames in sit mi ultrices nisi, nunc.</p>
                        </div>
                        <div className="col-3">
                            <h3 className="footer-text-h3">Категории</h3>
                            <button className='footer-btn'>часы</button>
                            <button className='footer-btn'>браслеты</button>
                            <button className='footer-btn'>ремни</button>
                            <button className='footer-btn'>ювелирные изделия</button>
                            <button className='footer-btn'>запонки</button>
                        </div>
                        <div className="col-3">
                            <h3 className="footer-text-h3">Рассылка</h3>
                            <p className="footer-text-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi semper viverra nunc cursus tortor lectus nunc nulla nibh.</p>
                        </div>
                </div>
            </div>
        </div>
    );
}

