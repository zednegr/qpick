// Import SASS
import "./AddToCart.scss";

// Import Components
import Loading from "../../components/Loading/Loading";

// Import Images
import Map from "../../assets/img/map.png";
import Empty from "../../assets/svg/empty.svg"


// Import React Router Dom
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";

// Import React Hooks
import { useState, useEffect, useRef } from "react";

// Import Axios
import axios from "axios";

function AddToCart() {

    const [data, setGetData] = useState();
    const [loading, setLoading] = useState(true);
    const { productId } = useParams();

    // Counter
    const [count, setCount] = useState(1);


    const [productPrice, setProductPrice] = useState();
    const [price, setPrice] = useState(setProductPrice);
    const [delivery, setDelivery] = useState(499)

    const plus = () => {
        setCount(count + 1);
    };

    const minus = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

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


    if (data.length === 0) {
        return (
            <div className="empty-wrapper">
                <div className="empty">
                    <div className="empty-wrapper">
                        <div className="empty">

                            <div className="empty-top">
                                <img src={Empty} alt="Network ERROR" width={'407px'} height={'315px'} />
                            </div>

                            <div className="empty-middle">
                                <div className="empty-middle-info">
                                    <h2 className="empty-middle-info-h2">Корзина пуста</h2>
                                    <p className="empty-middle-info-p">Но это никогда не поздно исправить :)</p>
                                </div>
                            </div>

                            <NavLink to={'/'}>
                                <div className="empty-bottom">
                                    <button className="empty-button">В каталог товаров</button>
                                </div>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <section className="addToCart-section">
            <div className="container">
                <div className="addToCart-start">
                    <h5 className="addToCart-start-h5">Корзина</h5>
                </div>

                <div className="addToCart-wrapper">
                    <div className="addToCart-card-map">

                        <div className="addToCart-card">
                            <div className="addToCart-card-top">

                                <NavLink to={`/cards_inner/${data.id}`}>
                                    <div className="addToCart-product">
                                        <img
                                            className="addToCart-product-img"
                                            width={"146px"}
                                            height={"136px"}
                                            src={data?.img}
                                        />
                                    </div>
                                </NavLink>

                                <NavLink to={`/cards_inner/${data.id}`}>
                                    <div className="addToCart-product-name">
                                        <h4 className="addToCart-product-name-h4">{data?.name}</h4>
                                        <h4 className="addToCart-product-price-h4">
                                            {data?.price} ₸
                                        </h4>
                                    </div>
                                </NavLink>
                            </div>

                            <div className="addToCart-middle">
                                <div className="addToCart-middle-counter">
                                    <button
                                        className="addToCart-middle-counter-minus-btn"
                                        onClick={minus}
                                    >
                                        -
                                    </button>
                                    <h4 className="addToCart-middle-counter-h4">{count}</h4>
                                    <button
                                        className="addToCart-middle-counter-plus-btn"
                                        onClick={plus}
                                    >
                                        +
                                    </button>
                                </div>

                                <div className="addToCart-middle-price">
                                    <h4 className="addToCart-middle-price-h4">
                                        {formatSum(count * data?.price?.replace(/[^\d]/g, ""))}₸
                                    </h4>
                                </div>
                            </div>
                        </div>

                        <div className="addToCart-map">
                            <div className="addToCart-card-top">
                                <h4 className="addToCart-map-h4">Доставка</h4>
                            </div>

                            <div className="addToCart-map-middle">
                                <div className="addToCart-middle-map">
                                    <img src={Map} alt="" />
                                </div>

                                <div className="addToCart-middle-map-price">
                                    <h4 className="addToCart-middle-delivery-h4">
                                        Доставка курьером
                                    </h4>
                                    <h4 className="addToCart-middle-map-price-h4">{delivery} ₸</h4>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="addToCart-total">
                        <div className="addToCart-total-top">
                            <h4 className="addToCart-total-top-h4">ИТОГО</h4>
                            <h4 className="addToCart-price-top-h4">₸ {formatSum(count * data?.price?.replace(/[^\d]/g, ""))}</h4>
                        </div>

                        <div className="addToCart-clearance-btns">
                            <NavLink to={`/forming/${data.id}`}>
                                <button className="addToCart-clearance-btn">
                                    Перейти к оформлению
                                </button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        
    );
}

// Summa formatini to'g'irlovchi funksiya

function formatSum(qiymat) {
    let value;
    if (typeof qiymat === "string") {
        value = qiymat?.replace(/[^\d]/g, "");
    } else {
        value = qiymat;
    }

    let Natija = "";
    if (value?.toString().length % 3 === 0) {
        for (let i = 0; i < value?.toString().length; i++) {
            if (i % 3 === 0) Natija += value?.toString().slice(i, i + 3) + " ";
        }
    } else if (value?.toString().length % 3 === 2) {
        Natija += value?.toString().slice(0, 2) + " ";
        for (let i = 0; i < value?.toString().length; i++) {
            if (i % 3 === 0) {
                Natija += value?.toString().slice(i + 2, i + 2 + 3) + " ";
            }
        }
    } else if (value?.toString().length % 3 === 1) {
        Natija += value?.toString().slice(0, 1) + " ";
        for (let i = 0; i < value?.toString().length; i++) {
            if (i % 3 === 0) {
                Natija += value?.toString().slice(i + 1, i + 1 + 3) + " ";
            }
        }
    }
    return Natija;
}

export default AddToCart;