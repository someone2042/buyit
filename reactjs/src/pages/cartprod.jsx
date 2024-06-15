import React, { useContext } from "react";
import { shopcontext } from "./shop-contex";

export const CartProd = (props) => {

    const { id, pname, price, photo } = props.data;
    const { removFormCart, cartitem, addToCart } = useContext(shopcontext);
    const n = cartitem[id];

    return (
        <div className="cart_prod">
            <div className="cart_image">
                <img src={photo} />
            </div>
            <div className="cart_info">
                <div className="cart_name">{pname} </div>
                <div className="more_info">
                    <div className="price_info">
                        <p className="price"> ${price} </p>
                        <h3>{n > 0 && <> ({n}) </>} </h3>
                    </div>
                    <div className="buttons">
                        <button onClick={() => removFormCart(id)} className=" delet ">Remove </button>
                        <button onClick={() => addToCart(id)} className=" addTO "> Add </button>
                    </div>
                </div>
            </div>
        </div>
    )
}