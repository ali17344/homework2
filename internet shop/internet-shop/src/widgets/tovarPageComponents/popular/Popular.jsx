import React, { useState } from 'react';
import './popular.scss'
import cardImg from '../../img/image (4).png'
export const Popular = ({activeLike,like}) => {
  const [activeLike2, setActiveLike2] = useState('like-btn') 
  const [activeLike3, setActiveLike3] = useState('like-btn') 
  const [activeLike4, setActiveLike4] = useState('like-btn') 
  const like2 = () => {
    if(activeLike2 === 'like-btn'){
        setActiveLike2('like-btn-black')
    }else{
        setActiveLike2('like-btn')
    }
    };
    const like3 = () => {
        if(activeLike3 === 'like-btn'){
            setActiveLike3('like-btn-black')
        }else{
            setActiveLike3('like-btn')
        }
    };
    const like4 = () => {
        if(activeLike4 === 'like-btn'){
            setActiveLike4('like-btn-black')
        }else{
            setActiveLike4('like-btn')
        }
    };
    return (
        <div className='container'>
            <div className="popular">
                <h1 className='popular-text'>Popular</h1>
                <div className="flex flex-card">
                    <div className="col-3">
                        <img src={cardImg} alt="" />
                        <button onClick={like} className={activeLike}></button>
                        <div className='card-title'>
                            <p>Velvet bag</p>
                            <p>$257.00</p>    
                        </div>              
                    </div>
                    <div className="col-3">
                        <img src={cardImg} alt="" />
                        <button onClick={like2} className={activeLike2}></button>
                        <div className='card-title'>
                            <p>Velvet bag</p>
                            <p>$257.00</p>    
                        </div>              
                    </div>
                    <div className="col-3">
                        <img src={cardImg} alt="" />
                        <button onClick={like3} className={activeLike3}></button>
                        <div className='card-title'>
                            <p>Velvet bag</p>
                            <p>$257.00</p>    
                        </div>              
                    </div>
                    <div className="col-3">
                        <img src={cardImg} alt="" />
                        <button onClick={like4} className={activeLike4}></button>
                        <div className='card-title'>
                            <p>Velvet bag</p>
                            <p>$257.00</p>    
                        </div>              
                    </div>
                </div>
            </div>
        </div>
    );
}

