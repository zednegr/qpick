// Import SASS
import "./Footer.scss"

// Import Images
import Lang from "../../assets/svg/lang-icon.svg"

// Import React Icon
import { FaVk, FaInstagram, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";

// Import NavLink
import { NavLink } from "react-router-dom";
import { useState } from "react";

function Footer({til, setTil}) {


    console.log(til);


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
                            <p className="footer-left-item-p">{til == 'uz' ? 'Saqlanganlar' : 'Избранное'}</p>
                            <NavLink to={'/cart'}>
                                <p className="footer-left-item-p">Корзина</p>
                            </NavLink>

                            <NavLink to={'/contact'}>
                                <p className="footer-left-item-p">Контакты</p>
                            </NavLink>
                        </div>

                    </div>

                    <div className="footer-right">

                        <div className="footer-right-service">
                            <h5 className="footer-right-service-h5">Условия сервиса</h5>
                        </div>

                        <div className="footer-right-lang-item">
                            <img className="footer-right-lang-img" src={Lang} />
                            <select onChange={(evt) => {
                                setTil(evt.target.value)
                            }}>
                                <option value="uz">uz</option>
                                <option value="ru">ru</option>
                            </select>
                            <p className="footer-right-lang-item-p" >Рус</p>
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