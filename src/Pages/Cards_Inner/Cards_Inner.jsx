// Import SASS
import "./cards_inner.scss"

// Import Images
import CardsInner1Img from "../../assets/img/cards-inner-1.png"
import CardsInner2Img from "../../assets/img/cards-inner-2.png"

// Import NavLink
import { NavLink } from "react-router-dom"

function CardsInner() {

    return (
        <section className="cards_inner_section">
            <div className="container">
                <div className="cards_inner_start">
                    <h5 className="cards_inner_start_h5">Автодержатель</h5>
                </div>
                <div className="cards_inner_wrapper">

                    <div className="cards-inner">
                        <div className="cards-inner-top">
                            <img src={CardsInner1Img} alt="Network ERROR" />
                            <img src={CardsInner2Img} alt="Network ERROR" />
                            <img src={CardsInner2Img} alt="Network ERROR" />
                        </div>

                        <div className="cards-inner-middle">
                            <h4 className="cards-inner-middle-name-h4">BOROFONE BH32</h4>

                            <h4 className="cards-inner-middle-price-h4">2 927 ₸</h4>
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
                            <NavLink to={'/addToCart'}>
                                <button className="cards-inner-btn">Купить!</button>
                            </NavLink>

                            <button className="cards-inner-btn">Добавить в корзину</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CardsInner