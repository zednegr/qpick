// Import SASS
import "./addtocart.scss"

// Import Components
import Loading from "../../components/Loading/Loading"

// Import Images
import HeadPhone from "../../assets/img/card-headphones.png"
import CounterPlus from "../../assets/svg/counter-plus.svg"
import CounterMinus from "../../assets/svg/counter-minus.svg"
import Map from "../../assets/img/map.png"

// Import React Router Dom
import { NavLink } from "react-router-dom"
import { useParams } from "react-router-dom"

// Import React Hooks
import { useState, useEffect, useRef } from "react"

// Import Axios
import axios from "axios"


function AddToCart() {

    const [data, setGetData] = useState()
    const [loading, setLoading] = useState(true)
    const { productId } = useParams()

    // Counter
    const [productPrice, setProductPrice] = useState()
    const [count, setCount] = useState(1)
    const [price, setPrice] = useState(setProductPrice);

    const plus = () => {
        setCount(count + 1)
    };

    const minus = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    };

    useEffect(() => {
        axios(`https://64e080ca50713530432c5e47.mockapi.io/apple-shop/product/${productId}`)
            .then((res) => {
                setGetData(res.data);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []); 

    if (loading) {
        return <Loading />
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
                                <div className="addToCart-product">
                                    <img className="addToCart-product-img" width={'146px'} height={'136px'} src={data?.img} />
                                </div>

                                <div className="addToCart-product-name">
                                    <h4 className="addToCart-product-name-h4">{data?.name}</h4>
                                    <h4 className="addToCart-product-price-h4">{data?.price} ₸</h4>
                                </div>

                            </div>

                            <div className="addToCart-middle">
                                <div className="addToCart-middle-counter">
                                    <button className="addToCart-middle-counter-minus-btn" onClick={minus}>-</button>
                                    <h4 className="addToCart-middle-counter-h4">{count}</h4>
                                    <button className="addToCart-middle-counter-plus-btn" onClick={plus}>+</button>
                                </div>

                                <div className="addToCart-middle-price">
                                    <h4 className="addToCart-middle-price-h4">{data?.price} ₸</h4>
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
                                    <h4 className="addToCart-middle-delivery-h4">Доставка курьером</h4>
                                    <h4 className="addToCart-middle-map-price-h4">2 927 ₸</h4>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="addToCart-total">
                        <div className="addToCart-total-top">
                            <h4 className="addToCart-total-top-h4">ИТОГО</h4>
                            <h4 className="addToCart-price-top-h4">₸ {data?.price}</h4>
                        </div>

                        <div className="addToCart-clearance-btns">
                            <NavLink to={'/forming'}>
                                <button className="addToCart-clearance-btn">Перейти к оформлению</button>
                            </NavLink>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default AddToCart