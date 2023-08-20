// Import SASS
import "./footer.scss"

// Import Images
import Lang from "../../assets/svg/lang-icon.svg"

// Import React Icon
import { FaVk, FaInstagram, FaTelegramPlane, FaWhatsapp, FaMousePointer } from "react-icons/fa";

function Footer() {

    return (
        <section className="footer-section">
            <div className="container">
                <div className="footer-wrapper">

                    <div className="footer-left">

                        <div className="footer-left-brand">
                            <h5 className="footer-left-brand-h5">QPICK</h5>
                        </div>

                        <div className="footer-left-item">
                            <p className="footer-left-item-p">Избранное</p>
                            <p className="footer-left-item-p">Корзина</p>
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
                        <li className="footer-social-list"><FaInstagram size={25} /></li>
                        <li className="footer-social-list"><FaTelegramPlane size={25} /></li>
                        <li className="footer-social-list"><FaWhatsapp size={25} /></li>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer