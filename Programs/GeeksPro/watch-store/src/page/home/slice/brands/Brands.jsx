import React from 'react';
import './brands.scss'
import brandLogo from '../../../img/brands.png'
export const Brands = () => {
    return (
        <div className='container'>
            <div className="brands">
               <h3 className="brands-text-h3">наши бренды</h3> 
               <div className="brands-hr"></div>
               <div className="flex-container">
                    <img src={brandLogo} alt="" className='brands-logo'/>
                    <img src={brandLogo} alt="" className='brands-logo'/>
                    <img src={brandLogo} alt="" className='brands-logo'/>
                    <img src={brandLogo} alt="" className='brands-logo'/>
               </div>
            </div>
        </div>
    );
}

