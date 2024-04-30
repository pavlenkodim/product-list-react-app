import React from "react";
import './NavBar.css'

const Navbar = () => {
    return (
        <div className="navbar">
            <ul>
                <li><a href="/">App</a></li>
                <li><a href="/products">Products</a></li>
                <li><a href="/add">Add</a></li>
            </ul>
        </div>
    )
}

export default Navbar