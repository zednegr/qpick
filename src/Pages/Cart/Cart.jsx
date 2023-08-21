// Import SASS 
import "./Cart.scss"

// Import Components
import Loading from "../../components/Loading/Loading"

// React Icons 
import { AiFillDelete } from "react-icons/ai";

// Import React Hooks
import { useState, useEffect } from "react"

// Import React Router Dom
import { NavLink } from "react-router-dom"

// Import Axios
import axios from "axios"

function Cart() {

    const [getData, setGetData] = useState()
    const [loading, setLoading] = useState(true);
    const [refresh, setRefresh] = useState()

    useEffect(() => {
        axios('https://64e080ca50713530432c5e47.mockapi.io/apple-shop/apple-cart')
            .then((res) => {
                setGetData(res.data);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [refresh]);

    function onDelete(id) {
        setRefresh(true)
        axios.delete(`https://64e080ca50713530432c5e47.mockapi.io/apple-shop/apple-cart/${id}`)
            .then((res) => {
                setRefresh(false)
            })
    }

    if (loading) {
        return <Loading />;
    }
    console.log(getData);

    return (
        <section className="cart-section">
            <div className="conatiner">
                <div className="cart-wrapper">

                    {
                        getData?.map((item, index) => {
                            console.log(item.getData.name);
                            return (

                                <div className="addToCart-card" key={item.getData.id}>

                                    <div className="cart-delete-box">
                                        <button className="cart-delete-btn" onClick={() => onDelete(item.id)}><AiFillDelete /></button>
                                    </div>

                                    <div className="addToCart-card-top">

                                        <NavLink to={`/cards_inner/${item.getData?.id}`}>
                                            <div className="addToCart-product">
                                                <img
                                                    className="addToCart-product-img"
                                                    width={"146px"}
                                                    height={"136px"}
                                                    src={item?.getData?.img}
                                                />
                                            </div>
                                        </NavLink>

                                        <NavLink to={`/cards_inner/${item.getData?.id}`}>
                                            <div className="addToCart-product-name">
                                                <h4 className="addToCart-product-name-h4">{item?.getData?.name}</h4>
                                                <h4 className="addToCart-product-price-h4">{item?.getData.price} ₸</h4>
                                            </div>
                                        </NavLink>
                                    </div>
                                </div>
                            )

                        })
                    }


                </div>
            </div>
        </section>
    )
}

export default Cart