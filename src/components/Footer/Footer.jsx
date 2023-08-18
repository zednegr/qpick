// Import SASS
import "./footer.scss"

// Import Images
import Lang from "../../assets/svg/lang-icon.svg"

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
                        <box-icon type='logo' name='vk'></box-icon>
                        <box-icon name='instagram' type='logo'></box-icon>
                        <box-icon name='telegram' type='logo'></box-icon>
                        <box-icon name='whatsapp' type='logo'></box-icon>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer