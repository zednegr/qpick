// Import SASS
import "./Cards.scss"

// Import Components
import Loading from "../Loading/Loading.jsx";

// Import Images
import Star from "../../assets/svg/star.svg"

// Import NavLink
import { NavLink } from "react-router-dom"

// Import React Hooks
import { useState, useEffect } from "react"

// Import Axios
import axios from "axios"


function Cards() {

    const [data, setGetData] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {-
        axios('https://64e080ca50713530432c5e47.mockapi.io/apple-shop/product')
            .then((res) => setGetData(res.data))
            .finally(() => {
                setLoading(false)
            })
    }, [])

    if (loading) {
        return <Loading />
    }

    return (
        <section className="cards-section">
            <div className="container">
                <div className="cards-start">
                    <h4 className="cards-start-h4">Чехлы</h4>
                </div>
                <div className="cards-wrapper">

                    {
                        data?.map(item => {
                            return (
                                <NavLink to={`/cards_inner/${item.id}`} key={item.id}>
                                    <div className="card">

                                        <div className="card-top">
                                            <img className="card-top-img" src={item?.img} width={'219px'} height={'237px'} alt="Network EROR" />
                                        </div>

                                        <div className="card-middle">

                                            <div className="card-middle-name">
                                                <h4 className="card-middle-name-h4">{item?.name.length > 20 ? item?.name.slice(0, 40) + "..." : item?.name}</h4>
                                            </div>

                                            <div className="card-middle-price">
                                                <h4 className="card-middle-price-h4">{item?.price} ₸</h4>
                                            </div>

                                        </div>

                                        <div className="card-bottom">

                                            <div className="card-bottom-rating">
                                                <img src={Star} />
                                                <h4 className="card-bottom-rating-h4">{item?.rating}</h4>
                                            </div>

                                        </div>

                                    </div>
                                </NavLink>
                            )
                        })
                    }

                </div>
            </div>
        </section>
    )
}

export default Cards
