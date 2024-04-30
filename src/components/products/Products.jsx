import React from "react";
import axios from "axios";

import QuantProducts from '../quantProducts/QuantProducts'
import CardProduct from '../cardProduct/CardProduct'

import "./Products.css"

const Products = (props) => {

    let products;

    // axios('https://fakestoreapi.com/products', {
    //     method: 'GET'
    // })
    // .then(res => {
    //     products = res.data
    //     console.log(products)
    // }
    // ).catch(error => {
    //     console.error(error);
    // })

    products = {
        "id": 1,
        "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        "price": 109.95,
        "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        "rating": {
          "rate": 3.9,
          "count": 120
        }
      }

    return (
        <div className="products">
            <h1>Products</h1>
            <QuantProducts />
            <div className="products_container">
                <CardProduct data={products}/>
                <CardProduct data={products}/>
                <CardProduct data={products}/>
                <CardProduct data={products}/>
                <CardProduct data={products}/>
                <CardProduct data={products}/>
                <CardProduct data={products}/>
                <CardProduct data={products}/>
            </div>
        </div>
    )
}

export default Products