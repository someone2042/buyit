import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import { shopcontext } from "../pages/shop-contex";

export const Navbar = () => {
    const { cartitem, getTotal } = useContext(shopcontext)
    let n = 0
    for (let i = 0; i < Object.keys(cartitem).length; i++) {
        if (cartitem[i] > 0) {
            n++;
        }
    }
    return (
        <div className="navbar">


            <Link to="/" >Bue.com</Link>
            <Link to="/cart">
                <ShoppingCart size={35} />
                {n > 0 && ( // Conditional rendering using logical AND (&&)
                    <p className="count">{n}</p>
                )}
            </Link>
        </div>
    )
}