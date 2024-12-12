import './catalog.css'
import time from '../img/catalog.png'
export const Catalog = () => {
    return (
        <div className='box'>
            <h3 className="brands-text">новые поступления</h3>
            <div className="hr4"></div>  
            <div className="container2">
                <div className="card-time">
                    <img src={time} alt="" />
                    <p className="sale-time-card-text">Louis XVI ATHOS</p>
                    <p className="sale-time-card-text">165 000 руб.  </p>
                </div>
                <div className="card-time">
                    <img src={time} alt="" />
                    <p className="sale-time-card-text">Louis XVI ATHOS</p>
                    <p>165 000 руб.  </p>
                </div>
                <div className="card-time">
                    <img src={time} alt="" />
                    <p>Louis XVI ATHOS</p>
                    <p className="sale-time-card-text">165 000 руб.  </p>
                </div>
                <div className="card-time">
                    <img src={time} alt="" />
                    <p className="sale-time-card-text">Louis XVI ATHOS</p>
                    <p className="sale-time-card-text">165 000 руб.  </p>
                </div>
            </div>
            <div className="container2">
                <div className="card-time">
                    <img src={time} alt="" />
                    <p className="sale-time-card-text">Louis XVI ATHOS</p>
                    <p className="sale-time-card-text">165 000 руб.  </p>
                </div>
                <div className="card-time">
                    <img src={time} alt="" />
                    <p className="sale-time-card-text">Louis XVI ATHOS</p>
                    <p className="sale-time-card-text">165 000 руб.  </p>
                </div>
                <div className="card-time">
                    <img src={time} alt="" />
                    <p className="sale-time-card-text">Louis XVI ATHOS</p>
                    <p className="sale-time-card-text">165 000 руб.  </p>
                </div>
                <div className="card-time">
                    <img src={time} alt="" />
                    <p className="sale-time-card-text">Louis XVI ATHOS</p>
                    <p className="sale-time-card-text">165 000 руб.  </p>
                </div>
            </div>      
        </div>
    );
}

