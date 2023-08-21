// Import SASS
import "./Cards_Inner.scss"

// Import Components
import Loading from "../../components/Loading/Loading"

// Import React Router Dom
import { NavLink } from "react-router-dom"
import { useParams } from "react-router-dom"

// Import React Hooks
import { useState, useEffect } from "react"

// Import Axios
import axios from "axios"


function CardsInner() {

    const [data, setGetData] = useState()
    const [loading, setLoading] = useState(true)
    const { productId } = useParams()

    useEffect(() => {
        axios(`https://64e080ca50713530432c5e47.mockapi.io/apple-shop/product/${productId}`)
            .then((res) => setGetData(res.data))
            .finally(() => {
                setLoading(false)
            })
    }, [])

    function DataFetch(getData) {
        axios.post('https://64e080ca50713530432c5e47.mockapi.io/apple-shop/apple-cart', {
            getData
        })
            .then(res => {
                console.log(res.data);
            })

    }

    if (loading) {
        return <Loading />
    }

    console.log(data);
    return (
        <section className="cards_inner_section">
            <div className="container">
                <div className="cards_inner_start">
                    <h5 className="cards_inner_start_h5">Автодержатель</h5>
                </div>
                <div className="cards_inner_wrapper">

                    <div className="cards-inner">
                        <div className="cards-inner-top">
                            <img className="cards-inner-top-img" src={data?.img} alt="Network ERROR" />
                        </div>

                        <div className="cards-inner-middle">
                            <div className="cards-inner-middle-name">
                                <h4 className="cards-inner-middle-name-h4">{data?.name}</h4>

                            </div>
                            <h4 className="cards-inner-middle-price-h4">{data?.price} ₸</h4>
                        </div>
                    </div>

                    <div className="cards-inner-description-btn">

                        <div className="cards-inner-description">
                            <div className="cards-inner-description-top">
                                <h4 className="cards-inner-description-top-h4">Описание и характеристики</h4>
                            </div>

                            <div className="cards-inner-description-list">
                                <p className="cards-inner-description-list-p">Активное шумоподавление: Нет</p>
                                <p className="cards-inner-description-list-p">Вес: 10 гр</p>
                                <p className="cards-inner-description-list-p">Вес: 10 гр</p>
                                <p className="cards-inner-description-list-p">Длина кабеля: 1.2 м</p>
                                <p className="cards-inner-description-list-p">Комплектация: Наушники</p>
                                <p className="cards-inner-description-list-p">Материал корпуса: Пластик, резина</p>
                                <p className="cards-inner-description-list-p">Микрофон: Да</p>
                                <p className="cards-inner-description-list-p">Назначение: Проводные наушники</p>
                                <p className="cards-inner-description-list-p">Ответить/закончить разговор: Да</p>
                                <p className="cards-inner-description-list-p">Разъем наушников: Lightning</p>
                                <p className="cards-inner-description-list-p">Регулятор громкости: Да</p>
                                <p className="cards-inner-description-list-p">Тип крепления: Без крепления</p>
                                <p className="cards-inner-description-list-p">Тип наушников: Вкладыши ("таблетки")</p>
                                <p className="cards-inner-description-list-p">Тип подключения: Проводное</p>
                                <p className="cards-inner-description-list-p">Частотный диапазон: 20 Гц - 20000 Гц</p>
                                <p className="cards-inner-description-list-p">Чувствительность: 109 дБ</p>
                            </div>
                        </div>

                        <div className="cards-inner-btns">

                            <NavLink to={`/addToCart/${data.id}`}>
                                <div className="cards-inner-btn-one">
                                    <button className="cards-inner-btn">Купить!</button>
                                </div>
                            </NavLink>

                            <div className="cards-inner-btn-two">
                                <button className="cards-inner-btn" onClick={() => DataFetch(data)}> Добавить в корзину</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CardsInner