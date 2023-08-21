// Import SASS
import "./Contact.scss"

// Import Images
import ContactMap from "../../assets/img/contact-map.png"

// Import React Icons
import { FaWhatsapp, FaVk, FaInstagram, FaTelegram } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";

function Contact() {

    return (
        <section className="contact-section">
            <div className="container">
                <div className="contact-wrapper">
                    <div className="contact-map">

                        <div className="contact-map-img">
                            <img src={ContactMap} alt="Network Error" />
                        </div>

                        <div className="contact-map-name">
                            <h4 className="contact-map-name-h4">Аксай-3а, 62ф, Алматы, Казахстан</h4>
                            <p className="contact-map-name-p">3 этаж 35 кабинет</p>
                        </div>
                    </div>

                    <div className="contact-social">
                        <div className="contact-social-box"><FaWhatsapp /></div>
                        <div className="contact-social-box"><FaVk /></div>
                        <div className="contact-social-box"><FaInstagram /></div>
                        <div className="contact-social-box"><FaTelegram /></div>
                    </div>
                </div>

                <div className="contact-number-icon-wrapper">
                    <div className="contact-number-icon">
                        <FiPhoneCall />
                    </div>

                    <div className="contact-number">
                        <h2 className="contact-number-h2">+7 777 777 77 77</h2>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact