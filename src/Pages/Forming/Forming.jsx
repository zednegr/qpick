// Import SASS
import "./Forming.scss"

// Import Components
import Loading from "../../components/Loading/Loading";

// Import Images
import Map from "../../assets/img/map.png"

// Import React Hooks
import { useState, useEffect, useRef } from "react";

// Import React Router Dom
import { useParams } from "react-router-dom";

// Import Axios
import axios from "axios";


function Forming() {

    const [data, setGetData] = useState();
    const [loading, setLoading] = useState(true);
    const { productId } = useParams();

    useEffect(() => {
        axios(
            `https://64e080ca50713530432c5e47.mockapi.io/apple-shop/product/${productId}`
        )
            .then((res) => {
                setGetData(res.data);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);
    if (loading) {
        return <Loading />;
    }

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

                        {
                            <div className="order-card">
                                <div className="order-card-top">
                                    <h4 className="order-card-top-h4">Ваш заказ</h4>
                                </div>

                                <div className="order-card-middle">
                                    <div className="order-card-middle-products">
                                        <p className="order-card-middle-products-p">{data?.name}</p>
                                        <p className="order-card-middle-products-p">Доставка</p>
                                        <p className="order-card-middle-products-p">К оплате</p>
                                    </div>

                                    <div className="order-card-middle-price">
                                        <p className="order-card-middle-price-p">₸ {data?.price}</p>
                                        <p className="order-card-middle-price-p">₸ 499</p>
                                        <p className="order-card-middle-price-p">₸ 2 927</p>
                                    </div>
                                </div>

                            </div>
                        }

                        <div className="number-card">
                            <div className="number-card-top">
                                <h4 className="number-card-top-h4">Номер получателя</h4>
                            </div>

                            <div className="number-card-middle-inputs">
                                <input className="number-card-input" type="number" placeholder="+998 __ ___ ___" />
                            </div>
                        </div>

                        <div className="upload-btn">
                            <a className="upload-btn">Закончить оформление</a>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Forming