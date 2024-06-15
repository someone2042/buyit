import React, { useContext } from "react";
import { MdAddShoppingCart } from "react-icons/md";
import { shopcontext } from "./shop-contex";
import { useParams } from 'react-router-dom';
import { PROD } from "../list";
export const ProductDetails = (props) => {
    const { productId } = useParams();
    const product = PROD.find(product => product.id === parseInt(productId));
    const { addToCart, cartitem } = useContext(shopcontext);
    const n = cartitem[product.id];
    return (
        <div className="Detail">
            <div className="Detail_img">
                <img src={product.photo} />
            </div>
            <div className="Detail_info1">
                <div className="Detail_info">
                    <p className="Detail_name">{product.pname} </p>
                    <p className="Detail_p">{product.info}</p>
                </div>
                <div className="Detail_down_info">
                    <p className="price"> ${product.price} </p>
                    <button onClick={() => addToCart(product.id)} className="Detail_add"> <MdAddShoppingCart size={30} />{n > 0 && <> ({n}) </>} </button>
                </div>
            </div>
        </div>
    )
}