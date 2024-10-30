import './companyInfo.css'
import companyInfo from '../img/company.png'
export const CompanyInfo = () => {
    return (
        <div className="box">
            <div className='company-info'>
                <div className="container"> 
                    <div className="col-6">
                        <h3 className="col-6-companyInfo-text">коллекция 2018</h3>
                        <div className="hr2"></div>
                        <p className='companyInfo-text-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non rutrum ornare ut mattis habitant dui arcu. Sagittis amet nunc ut neque quis nibh arcu. Vivamus vestibulum nisi et venenatis sed scelerisque magna consectetur. Amet convallis quis gravida facilisis vulputate. Faucibus facilisi habitasse ipsum interdum dictum aliquet. Velit quis ullamcorper pulvinar nulla malesuada integer. Aenean praesent viverra nulla nullam natoque volutpat curabitur auctor. Viverra viverra ullamcorper scelerisque risus dignissim egestas. Id aliquam a aliquam egestas leo orci pharetra sed diam. </p>
                        <button className="sale-btn2">посмотреть коллекцию</button>
                    </div>
                    <div className="col-6">
                        <img src={companyInfo} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}
