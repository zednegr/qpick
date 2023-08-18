// Import SASS
import "./cards.scss"

// Import Images
import Case from "../../assets/img/card-case.png"
import HeadPhones from "../../assets/img/card-headphones.png"
import AirPods from "../../assets/img/card-airpodspro.png"

function Cards() {

    return (
        <section className="cards-section">
            <div className="container">
                <div className="cards-start">
                    <h4 className="cards-start-h4">Чехлы</h4>
                </div>
                <div className="cards-wrapper">
                    <div className="card">

                        <div className="card-top">
                            <img className="card-top-img" src={Case} alt="Network EROR" />
                        </div>

                        <div className="card-middle">
                            <h4 className="card-middle-h4">Силиконовые</h4>
                        </div>

                    </div>
                    <div className="card">

                        <div className="card-top">
                            <img className="card-top-img" src={Case} alt="Network EROR" />
                        </div>

                        <div className="card-middle">
                            <h4 className="card-middle-h4">Силиконовые</h4>
                        </div>

                    </div>
                    <div className="card">

                        <div className="card-top">
                            <img className="card-top-img" src={Case} alt="Network EROR" />
                        </div>

                        <div className="card-middle">
                            <h4 className="card-middle-h4">Силиконовые</h4>
                        </div>

                    </div>
                    <div className="card">

                        <div className="card-top">
                            <img className="card-top-img" src={HeadPhones} alt="Network EROR" />
                        </div>

                        <div className="card-middle">
                            <h4 className="card-middle-h4">Силиконовые</h4>
                        </div>

                    </div>
                    <div className="card">

                        <div className="card-top">
                            <img className="card-top-img" src={HeadPhones} alt="Network EROR" />
                        </div>

                        <div className="card-middle">
                            <h4 className="card-middle-h4">Силиконовые</h4>
                        </div>

                    </div>
                    <div className="card">

                        <div className="card-top">
                            <img className="card-top-img" src={AirPods} alt="Network EROR" />
                        </div>

                        <div className="card-middle">
                            <h4 className="card-middle-h4">Силиконовые</h4>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cards
