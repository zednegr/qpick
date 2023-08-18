// Import SASS
import "./forming.scss"

// Import Images
import Map from "../../assets/img/map.png"

function Forming() {

    return (
        <section className="forming-section">
            <div className="container">
                <div className="forming-start">
                    <h4 className="forming-start-h4">Оформление заказа</h4>
                </div>

                <div className="forming-wrapper">

                    <div className="input-card">
                        <div className="input-card-top">
                            <h4 className="input-card-top-h4">Доставка курьером</h4>
                            <h4 className="input-card-top-price-h4">499 ₸</h4>
                        </div>

                        <div className="input-card-middle">
                            <img src={Map} alt="Network ERROR" width={'375px'} height={'146px'} />
                        </div>

                        <div className="input-card-bottom">
                            <h4 className="input-card-bottom-h4">Адрес доставки</h4>

                            <div className="inputs-wrapper">
                                <input className="input" type="text" placeholder="Город" />
                                <input className="input" type="text" placeholder="Улица / Район" />
                            </div>

                            <div className="input-mini-wrap">
                                <input className="input-mini" type="text" placeholder="Дом" />
                                <input className="input-mini" type="text" placeholder="Подъезд" />
                                <input className="input-mini" type="text" placeholder="Квартира" />
                            </div>
                        </div>
                    </div>

                    <div className="cards-wrapper">
                        <div className="order-card">
                            <div className="order-card-top">
                                <h4 className="order-card-top-h4">Ваш заказ</h4>
                            </div>

                            <div className="order-card-middle">
                                <div className="order-card-middle-products">
                                    <p className="order-card-middle-products-p">Наушники Apple BYZ S852I</p>
                                    <p className="order-card-middle-products-p">Доставка</p>
                                    <p className="order-card-middle-products-p">К оплате</p>
                                </div>

                                <div className="order-card-middle-price">
                                    <p className="order-card-middle-price-p">₸ 2 927</p>
                                    <p className="order-card-middle-price-p">₸ 2 927</p>
                                    <p className="order-card-middle-price-p">₸ 2 927</p>
                                </div>
                            </div>

                        </div>

                        <div className="payment-card">

                        </div>

                        <div className="number-card">

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Forming