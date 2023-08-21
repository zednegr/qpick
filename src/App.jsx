import { Routes, Route } from "react-router-dom"

import Footer from './components/Footer/Footer'
import Header from "./components/Header/Header"
import CardsInner from "./Pages/Cards_Inner/Cards_Inner"
import Home from "./Pages/Home/Home"
import AddToCart from "./Pages/AddToCart/AddToCart"
import Forming from "./Pages/Forming/Forming"
import Create from "./Pages/Create/Create"
import Cart from "./Pages/Cart/Cart"
import Contact from "./Pages/Contact/Contact"
import './App.css'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cards_inner/:productId" element={<CardsInner />} />
        <Route path="/addToCart/:productId" element={<AddToCart />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/forming/:productId" element={<Forming />} />
        <Route path="/create" element={<Create />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
