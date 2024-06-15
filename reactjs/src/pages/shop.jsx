import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { PROD } from "../list";
import { Prod } from "./prod";
import { shopcontext } from "./shop-contex";
export const Shop = () => {

    return (
        <div className="under" >
            {PROD.map((product) => (
                <Prod data={product} />
            ))}

        </div>
    )
};