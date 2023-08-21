// Import SASS
import "./Hero.scss"

// Import Images
import Phone from "../../assets/img/hero-iphone.png"

function Hero() {

    return (
        <section className="hero-section">
            <div className="container">
                <div className="hero-wrapper">

                    <div className="hero-left">
                        <h2 className="hero-left-h2">Аксессуары для Iphone 13 Pro Max</h2>
                    </div>

                    <div className="hero-right">
                        <img className="hero-right-img" src={Phone} alt="Network EROR" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero