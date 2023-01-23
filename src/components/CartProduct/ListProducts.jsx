import React from 'react'
import { Product } from './Product';
import { useSelector, useDispatch } from "react-redux";
import { useState } from 'react';
import styleProduct from './Products.module.css'

export const ListProducts = () => {
    const products = useSelector((state) => state.tasks);
    const [total, setTotal] = useState(10);
    // console.log(products)
    let x = 0
    const AddTotal = (finishPrice) => {
        x += parseInt(finishPrice);
    }

    return (
        <div className={styleProduct.containerProducts}>
            {

                products.map((product => {
                    AddTotal(product.finishPrice)
                    return (
                        <div key={product.id}>
                            <Product product={product} />
                        </div>
                    )
                }))
            }{

            }
            <div className={styleProduct.containerTotal}>
                <h3>Total</h3>
                <h3>$ {x}</h3>
            </div>
            <button className={styleProduct.buy}>
                Concretar la compra
            </button>


        </div>
    )
}
