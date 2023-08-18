// Import SASS
import "./addtocart.scss"

// Import Images
import HeadPhone from "../../assets/img/card-headphones.png"
import CounterPlus from "../../assets/svg/counter-plus.svg"
import CounterMinus from "../../assets/svg/counter-minus.svg"
import Map from "../../assets/img/map.png"

// Import NavLink
import { NavLink } from "react-router-dom"

function AddToCart() {

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
                                    <img className="addToCart-product-img" width={'146px'} height={'136px'} src={HeadPhone} />
                                </div>

                                <div className="addToCart-product-name">
                                    <h4 className="addToCart-product-name-h4">Apple BYZ S852I</h4>
                                    <h4 className="addToCart-product-price-h4">2 927 ₸</h4>
                                </div>

                            </div>

                            <div className="addToCart-middle">
                                <div className="addToCart-middle-counter">
                                    <img src={CounterMinus} alt="Nerwork ERROR" />
                                    <h4 className="addToCart-middle-counter-h4">1</h4>
                                    <img src={CounterPlus} alt="Network ERROR" />
                                </div>

                                <div className="addToCart-middle-price">
                                    <h4 className="addToCart-middle-price-h4">2 927 ₸</h4>
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
                            <h4 className="addToCart-price-top-h4">₸ 2 927</h4>
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