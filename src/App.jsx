import { Routes, Route } from "react-router-dom"

import Cards from './components/Cards/Cards'
import Footer from './components/Footer/Footer'
import Header from "./components/Header/Header"
import Hero from './components/Hero/Hero'
import CardsInner from "./Pages/Cards_Inner/Cards_Inner"
import Home from "./Pages/Home/Home"
import AddToCart from "./Pages/AddToCart/AddToCart"
import Forming from "./Pages/Forming/Forming"
import './App.css'
import Create from "./Pages/Create/Create"

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cards_inner/:productId" element={<CardsInner />} />
        <Route path="/addToCart/:productId" element={<AddToCart />} />
        <Route path="/forming" element={<Forming />} />
        <Route path="/create" element={<Create />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
