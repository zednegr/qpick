// Import SASS 
import "./Cart.scss"

// Import Components
import Loading from "../../components/Loading/Loading"

// Import Images
import Empty from "../../assets/svg/empty.svg"

// React Icons 
import { AiFillDelete } from "react-icons/ai";
import { FaTrashCan } from "react-icons/fa6";

// Import React Hooks
import { useState, useEffect, useRef } from "react"

// Import React Router Dom
import { NavLink } from "react-router-dom"

// Import Axios
import axios from "axios"

// Import React Prime
import { Toast } from 'primereact/toast';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';

function Cart() {

    const [getData, setGetData] = useState()
    const [loading, setLoading] = useState(true);
    const [refresh, setRefresh] = useState()

    // React Prime Sucsess
    const toast = useRef(null);
    const showSuccess = () => {
        toast.current.show({ severity: 'success', summary: 'Success', detail: 'Message Content', life: 3000 });
    }


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
                showSuccess()
            })
    }

    if (loading) {
        return <Loading />;
    }

    if (getData.length === 0) {
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
        <section className="cart-section">
            <div className="conatiner">
                <div className="cart-wrapper">
                    <Toast ref={toast} />


                    {
                        getData?.map(item => {
                            return (

                                <div className="addToCart-card" key={item.getData.id}>

                                    <div className="cart-delete-box">
                                        <button className="cart-delete-btn" onClick={() => onDelete(item.id)}><FaTrashCan /></button>
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