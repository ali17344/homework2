import React from 'react';
import './banner.scss'
export const Banner = () => {
    return (
        <div className='container'>
            <div className="banner">
                <div className="banner-icon">
                    <div className="banner-icon-icon2">
                        <h3 className="banner-icon-icon2-text-h3">PORTEN</h3>
                        <div className="banner-icon-icon2-hr"></div>
                        <p className="banner-icon-icon2-text-p">санкт-петербург</p>
                    </div>
                </div>
                <p className="banner-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus interdum purus, est tortor pulvinar ut in. Fringilla a diam enim sed justo, sed iaculis sagittis. Tortor id eu interdum nec ut iaculis. Penatibus ullamcorper ultricies morbi ipsum sem metus pharetra, mi. Tortor nibh magna feugiat id nunc, dui nisl viverra.</p>
            </div>
        </div>
    );
}
