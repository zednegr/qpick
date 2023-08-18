import Cards from "../../components/Cards/Cards"
import Hero from "../../components/Hero/Hero"
import "./home.scss"

function Home() {
    return (
        <section>
            <div className="container">
                <Hero />
                <Cards />
            </div>
        </section>
    )
}

export default Home