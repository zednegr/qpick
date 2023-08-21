import Cards from "../../components/Cards/Cards"
import Hero from "../../components/Hero/Hero"
import "./Home.scss"

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