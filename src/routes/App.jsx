import { BrowserRouter, Routes, Route } from "react-router-dom"

import Products from "../pages/Products"
import Home from "../pages/Home"
import NotFound from "../pages/NotFound"

import "../styles/global.scss"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="*" element={<NotFound/>} />  
      </Routes>      
    </BrowserRouter>

  )
}

export default App

