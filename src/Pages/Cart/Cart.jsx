// Import SASS 
import "./cart.scss"

// Import Components
import Loading from "../../components/Loading/Loading"

// Import React Hooks
import { useState, useEffect } from "react"

// Import React Router Dom
import { useParams } from "react-router-dom"
import { NavLink } from "react-router-dom"

// Import Axios
import axios from "axios"

function Cart() {

    const [getData, setGetData] = useState()
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
        axios('https://64e080ca50713530432c5e47.mockapi.io/apple-shop/apple-cart')
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
    console.log(getData);

    return (
        <section className="cart-section">
            <div className="conatiner">
                <div className="addToCart-wrapper">
                    <div className="addToCart-card-map">

                        {
                            getData?.map((item, index) => {
                                console.log(item.getData.name);
                                return (

                                    <>
                                        <div className="addToCart-card" key={item.getData.id}>
                                            <div className="addToCart-card-top">

                                                <NavLink to={`/cards_inner/${item.id}`}>
                                                    <div className="addToCart-product">
                                                        <img
                                                            className="addToCart-product-img"
                                                            width={"146px"}
                                                            height={"136px"}
                                                            src={item?.getData?.img}
                                                        />
                                                    </div>
                                                </NavLink>

                                                <NavLink to={`/cards_inner/${item.id}`}>
                                                    <div className="addToCart-product-name">
                                                        <h4 className="addToCart-product-name-h4">{item?.getData?.name}</h4>
                                                        <h4 className="addToCart-product-price-h4">{item?.getData.price} ₸</h4>
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
                                                        {item?.getData.price}₸
                                                    </h4>
                                                </div>
                                            </div>
                                        </div>

                                    </>


                                )

                            })
                        }




                    </div>



                </div>
            </div>
        </section>
    )
}

export default Cart