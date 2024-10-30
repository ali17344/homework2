import './footer.css'
import footerFon from '../img/footer.png'
export const Footer = () => {
    return (
        <div>
            <img src={footerFon} alt="" />
            <footer>
            <div className="container">
                    <div className="col-4">
                        <h3 className='footer-h3'>О магазине</h3>
                        <p className="footer-text1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi semper viverra nunc cursus tortor lectus nunc nulla nibh. Egestas amet consectetur vel vitae aliquam dictum suspendisse. Lobortis eget consequat, tellus et et sed turpis. Pretium quisque vitae, amet, porttitor odio ultricies massa pharetra leo. Et ipsum urna fames in sit mi ultrices nisi, nunc.</p>
                    </div>
                    <div className="col-4">
                        <h3 className='footer-h3'>Категории</h3>
                        <div>
                            <button className='footer-btn'>часы</button>
                            <button className='footer-btn'>браслеты</button>
                            <button className='footer-btn'>ремни</button>
                        </div>
                        <div>
                            <button className='footer-btn2'>ювелирные изделия</button>
                            <button className='footer-btn2'>запонки</button>
                        </div>
                    </div>
                    <div className="col-4">
                        <h3  className='footer-h3'>Рассылка</h3>
                        <p className="footer-text1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi semper viverra nunc cursus tortor lectus nunc nulla nibh.</p>
                    </div>
            </div>
            </footer>
        </div>
    );
}

