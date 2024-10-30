import './brands.css'
import brandLogo from '../img/brands.png'
export const Brands = () => {
    return (
        <div className='brands'>
            <h3 className="brands-text">наши бренды</h3>
            <div className="hr4"></div>
            <div className="container">
                <div className="brandLogo-box">
                    <img src={brandLogo} alt="" className='brandLogo' />
                    <img src={brandLogo} alt="" className='brandLogo' />
                    <img src={brandLogo} alt="" className='brandLogo' />
                    <img src={brandLogo} alt="" className='brandLogo' />
                </div>
            </div>
        </div>
    );
}

