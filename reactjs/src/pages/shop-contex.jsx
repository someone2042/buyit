import React, { createContext, useState } from "react";
import { PROD } from "../list";

export const shopcontext = createContext(null);



export const ShopContextProvider = (props) => {
    const [cartitem, setCarItems] = useState(() => {
        const items = {};
        for (let i = 0; i < PROD.length + 1; i++) { // Adjust 10 to your desired number of items
            items[i] = 0;
        }
        return items;
    });

    const addToCart = (pid) => {
        setCarItems((prev) => ({ ...prev, [pid]: prev[pid] + 1 }));
    };
    const getTotal = () => {
        let total = 0;
        for (const item in cartitem) {
            if (cartitem[item] > 0) {
                let k = PROD.find((product) => product.id === Number(item));
                total += cartitem[item] * k.price;
            }
        }
        return total.toFixed(2);
    }

    const removFormCart = (pid) => {
        setCarItems((prev) => ({ ...prev, [pid]: prev[pid] - 1 }));
    };
    const contextValue = { cartitem, addToCart, removFormCart, getTotal };

    return <shopcontext.Provider value={contextValue}> {props.children} </shopcontext.Provider>
};
