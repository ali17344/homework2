import contact from '../img/contact.svg'
import login from '../img/login.svg'
import './contact.css'
export const ContactInfo = () => {
    return (
        <div className='contactInfo-css'>
            <div className="contact-container">
                <img src={contact} alt="" className="contact-img" />
                <p className="contact-text"><a href="tel:8 (812) 123-45-67 ">8 (812) 123-45-67</a>    |    Работаем 7 дней в неделю    |    9:00 — 18:00  </p>
            </div>    <div className="contact-container">
                <img src={login} alt="" className="contact-img" />
                <p className="contact-text"><a href="">Войти</a> /<a href=""> Регистрация</a> </p>
            </div>
        </div>
    );
}

