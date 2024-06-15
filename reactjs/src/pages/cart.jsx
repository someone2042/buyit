import React, { useContext } from "react";
import { PROD } from "../list";
import { shopcontext } from "./shop-contex";
import { CartProd } from "./cartprod";

export const Cart = () => {
    const { cartitem, getTotal } = useContext(shopcontext)
    let n = getTotal()
    return (
        <div className="cart">
            <div className="cart_space">
                {PROD.map((product) => {
                    if (cartitem[product.id] !== 0) {
                        return < CartProd data={product} />
                    }
                })}
            </div>
            <div className="confirm">
                <h2> Total</h2>
                <h2 className="total">${n} </h2>
                <form className="form">
                    <input type="number" className="phone" placeholder="phone number" />
                    <input type="text" className="phone" placeholder="Adress" />
                    <input type="submit" className="order" value={'confirm order'} />
                </form>
            </div>
        </div>
    )
};