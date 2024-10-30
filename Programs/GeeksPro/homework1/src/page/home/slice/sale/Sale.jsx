import time from '../img/catalog.png'
import fon from '../img/sale.png'
import  './sale.css'
export const Sale = () => {
    return (
        <div>
           <div className="container">
            <div className="row">

                <div className="col-6">
                    <p className="col-6-text">СЕЗОН 2020/21</p>
                    <div className="hr hr2"></div>
                    <div className="container sale-container">
                        <div className="sale-time-card">
                            <img src={time} alt="" />
                            <p className="sale-time-card-text">Louis XVI ATHOS</p>  
                            <br />                          
                            <p className="sale-time-card-text">165 000 руб.</p>
                        </div>                
                        <div className="sale-time-card">
                            <img src={time} alt="" />
                            <p className="sale-time-card-text">Louis XVI ATHOS</p> 
                            <br />                           
                            <p className="sale-time-card-text">165 000 руб.</p>
                        </div>                
                        <div className="sale-time-card">
                            <img src={time} alt="" />
                            <p className="sale-time-card-text">Louis XVI ATHOS</p> 
                            <br />                           
                            <p className="sale-time-card-text">165 000 руб.</p>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <img src={fon} alt="" />
                    <div className="col-6-2">
                        <h3>Новая коллекция</h3>
                        <div className="hr3"></div>
                        <button className="sale-btn">Каталог</button>
                    </div>
                </div>
            </div>
           </div>
        </div>
    );
}

