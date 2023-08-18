// Import SASS
import "./cards.scss"

// Import Images
import Case from "../../assets/img/card-case.png"
import HeadPhones from "../../assets/img/card-headphones.png"
import AirPods from "../../assets/img/card-airpodspro.png"
import Star from "../../assets/svg/star.svg"

// Import NavLink
import { NavLink } from "react-router-dom"

function Cards() {

    return (
        <section className="cards-section">
            <div className="container">
                <div className="cards-start">
                    <h4 className="cards-start-h4">Чехлы</h4>
                </div>
                <div className="cards-wrapper">

                    <NavLink to={'/cards_inner'}>
                        <div className="card">

                            <div className="card-top">
                                <img className="card-top-img" src={HeadPhones} alt="Network EROR" />
                            </div>

                            <div className="card-middle">

                                <div className="card-middle-name">
                                    <h4 className="card-middle-name-h4">Apple BYZ S852I</h4>
                                </div>

                                <div className="card-middle-price">
                                    <h4 className="card-middle-price-h4">2927 ₸</h4>
                                </div>

                            </div>

                            <div className="card-bottom">

                                <div className="card-bottom-rating">
                                    <img src={Star} />
                                    <h4 className="card-bottom-rating-h4">4.7</h4>
                                </div>

                            </div>

                        </div>
                    </NavLink>

                </div>
            </div>
        </section>
    )
}

export default Cards
