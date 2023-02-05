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
    const handleEnviar = () => {
        // const { product: { name, count, price, finishPrice, id, nameCategory, url } } = props;
        if (Object.entries(products).length === 0) {

        } else {
            const mensaje = `
            Buen día, me encuentro interesad@ en comprar los siguientes productos:
            ________________________________________
            ${products.map(item => 
            `
            * Categoría:  ${item.nameCategory}
            * Código del Productos:  ${item.id}
            * Personalización:  ${item.name}
            * Cantidad:  ${item.count}
            * Subtotal :  ${item.finishPrice} 
            ----------------------------------------
            `)}
            _________________________________________
            Valor Total del producto ${x}`;

            const url = `https://api.whatsapp.com/send?phone=573209972620&text=${encodeURIComponent(mensaje)}`;
            window.open(url,'_blank');
        }
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
            <button onClick={handleEnviar} className={styleProduct.buy}>
                Concretar la compra
            </button>


        </div>
    )
}
