import banner from '../img/banner.png'
import './banner.css'
export const Banner = () => {
    return (
        <div className='box'>
            <div>

                <img src={banner} alt="" className='banner-icon' />
                <div className="banner-brand-icon">
                    <h2 className="banner-brand-icon-h2">PORTEN</h2>
                    <div className="hr"></div>
                    <p className="banner-brand-icon-p">санкт-петербург</p>
                </div>
                    <p className="banner-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus interdum purus, est tortor pulvinar ut in. Fringilla a diam enim sed justo, sed iaculis sagittis. Tortor id eu interdum nec ut iaculis. Penatibus ullamcorper ultricies morbi ipsum sem metus pharetra, mi. Tortor nibh magna feugiat id nunc, dui nisl viverra.</p>
            </div>
        </div>
    );
}

 
