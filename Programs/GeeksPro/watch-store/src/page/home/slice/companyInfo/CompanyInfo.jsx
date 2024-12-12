import React from 'react';
import './companyInfo.scss'
import companyInfoImg from '../../../img/company.png'
export const CompanyInfo = () => {
    return (
        <div className='container'>
            <div className="flex-container flex-container2">
                <div className="col-6 companyInfo">
                    <img src={companyInfoImg} alt="" className='col-6-companyInfo-img'/>
                </div>
                <div className="col-6 companyInfo">
                    <h3 className="col-6-text-h3">коллекция 2018</h3>
                    <div className="col-6-hr"></div>
                    <p className="col-6-text-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non rutrum ornare ut mattis habitant dui arcu. Sagittis amet nunc ut neque quis nibh arcu. Vivamus vestibulum nisi et venenatis sed scelerisque magna consectetur. Amet convallis quis gravida facilisis vulputate. Faucibus facilisi habitasse ipsum interdum dictum aliquet. Velit quis ullamcorper pulvinar nulla malesuada integer. Aenean praesent viverra nulla nullam natoque volutpat curabitur auctor. Viverra viverra ullamcorper scelerisque risus dignissim egestas. Id aliquam a aliquam egestas leo orci pharetra sed diam. </p>
                    <button className='col-6-btn'>посмотреть коллекцию</button>
                </div>
            </div>
        </div>
    );
}
