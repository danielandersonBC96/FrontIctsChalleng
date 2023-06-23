import React from "react";
import {  Route, Routes  } from "react-router-dom";
import HomeScreem from "../Pages/HomeScreem";
import ProductScreem from "../Pages/ProductScreem";
import CartScreem from "../Pages/CartScreem";


const RouterShopping = () => {
    return(
        <Routes>
            <Route path="/" element={<HomeScreem/>}/>
            <Route path="/product/:id" element={<ProductScreem/>}/>
            <Route path="/cart" element={ <CartScreem/>}/>
        </Routes>

    )
}

export default RouterShopping