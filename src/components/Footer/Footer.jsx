// Import SASS
import "./footer.scss"

// Import Images
import Lang from "../../assets/svg/lang-icon.svg"

// Import React Icon
import { FaVk, FaInstagram, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";

// Import NavLink
import { NavLink } from "react-router-dom";

function Footer() {

    return (
        <section className="footer-section">
            <div className="container">
                <div className="footer-wrapper">

                    <div className="footer-left">

                        <NavLink to={'/'}>
                            <div className="footer-left-brand">
                                <h5 className="footer-left-brand-h5">QPICK</h5>
                            </div>
                        </NavLink>

                        <div className="footer-left-item">
                            <p className="footer-left-item-p">Избранное</p>
                            <NavLink to={'/cart'}>
                                <p className="footer-left-item-p">Корзина</p>
                            </NavLink>
                            <p className="footer-left-item-p">Контакты</p>
                        </div>

                    </div>

                    <div className="footer-right">

                        <div className="footer-right-service">
                            <h5 className="footer-right-service-h5">Условия сервиса</h5>
                        </div>

                        <div className="footer-right-lang-item">
                            <img className="footer-right-lang-img" src={Lang} />
                            <p className="footer-right-lang-item-p">Рус</p>
                            <p className="footer-right-lang-item-p">Eng</p>
                        </div>

                    </div>

                    <div className="footer-social">

                        <li className="footer-social-list"><FaVk size={25} /></li>

                        <NavLink to={"https://www.instagram.com/zedboi/"}>
                            <li className="footer-social-list"><FaInstagram size={25} /></li>
                        </NavLink>

                        <NavLink to={'https://t.me/ZeD_BaT'}>
                            <li className="footer-social-list"><FaTelegramPlane size={25} /></li>
                        </NavLink>
                        
                        <li className="footer-social-list"><FaWhatsapp size={25} /></li>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer