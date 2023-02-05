import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styleForm from './FormProductCard.module.css'
import { addTask } from '../../features/tasks/taskSlice';
import Swal from 'sweetalert2'

function CalculatorPrice(con, price) {
    let valor = 0;
    if (con < 12) {
        valor = price;
        return (valor * con);

    } else if (con >= 12 && con < 24) {
        valor = (price - ((price * 5) / 100));
        return (valor * con);

    } else if (con >= 24 && con < 36) {
        valor = (price - ((price * 10) / 100));
        return (valor * con);

    } else {
        valor = (price - ((price * 15) / 100));
        return (valor * con);
    }
}



export const FormProductCard = (props) => {
    const { price, detail, id, name, url } = props;
    const [lastPrice, setLastPrice] = useState(price);
    const [counter, setCounter] = useState(1);
    const dispatch = useDispatch();



    const [card, setCard] = useState({
        name: detail,
        count: counter,
        price: price,
        finishPrice: price,
        id: id,
        nameCategory: name,
        url: url

    })
    const handleChange = event => {
        let con = parseInt(counter);
        if (event.target.name == "count") {
            if (event.target.value > 0) {
                con = event.target.value;
            }
            // console.log(con);
        }
        let operacion = CalculatorPrice(con, price);

        setCard({
            ...card,
            [event.target.name]: event.target.value,
            price: price,
            finishPrice: operacion,
            id: id,
            nameCategory: name,
            url: url
        })
        setCounter(con)
        setLastPrice(operacion);


        // console.log(event.target.name, event.target.value)

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(card);
        dispatch(addTask(card))
        // Swal.fire({
        //     text: 'Producto Agregado al Carrito',
        //     imageUrl: 'https://firebasestorage.googleapis.com/v0/b/my-projectstorage-7b2b9.appspot.com/o/ArteYDise%C3%B1o%2Fcart.png?alt=media&token=9fb689d7-0ca5-4f0e-85af-2a63a3656d82',
        //     imageWidth: 50,
        //     imageHeight: 50,
        //     imageAlt: 'Shopping Cart',
        //     background:'#000000'
        //   })
        Swal.fire({
            icon: 'success',
            title: 'Producto Agregado al Carrito',
            showConfirmButton: false,
            timer: 1500
        })

    }
    const handleChangeIncrement = () => {
        let con = parseInt(counter) + 1;
        let operacion = CalculatorPrice(con, price)
        setCard({
            ...card,
            count: counter,
            price: price,
            finishPrice: operacion,
            id: id,
            nameCategory: name,
            url: url
        })
        setCounter(con)
        setLastPrice(operacion + "");
    }

    const handleChangeDecrement = () => {
        let con = parseInt(counter) - 1;
        if (con >= 1) {
            let operacion = CalculatorPrice(con, price)
            setCard({
                ...card,
                count: counter,
                price: price,
                finishPrice: operacion,
                id: id,
                nameCategory: name,
                url: url
            })
            setCounter(con)
            setLastPrice(operacion + "");
        }
    }



    return (

        <div>
            <div className={styleForm.containerInput}>
                <input type="text" name="name" placeholder={detail} onChange={handleChange} required />
            </div>
            <div className={styleForm.containerSectionForm}>
                <div className={styleForm.changeNumber}>
                    <button onClick={handleChangeDecrement}>-</button>
                    <input name="count" type="text" min="1" placeholder="1" value={counter} onChange={handleChange} required />
                    <button onClick={handleChangeIncrement}>+</button>
                </div>
                <div className={styleForm.price}>
                    <h1>$</h1>
                    <h1>{lastPrice}</h1>
                </div>
            </div>

            <p className={styleForm.nota}>
                Por compra una docena tiene el 5% de descuento, por dos docenas el 10% de descuento y por 3 docenas el 15% de descuento.
            </p>
            <input className={styleForm.btnAddCart} onClick={handleSubmit} name="submit" type="submit" value="Agregar al Carrito" />

        </div>
    )
}