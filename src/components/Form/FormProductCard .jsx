import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styleForm from './FormProductCard.module.css'
import { useSelector } from 'react-redux'
import { addTask } from '../../features/tasks/taskSlice';

function CalculatorPrice(con, price){
    let valor=0;
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
        name: "",
        count: "",
        price: "",
        finishPrice: "",
        id: "",
        nameCategory: "",
        url: ""

    })
    const handleChange = event => {
        let con=0;  
        if(event.target.name=="count"){
            con=event.target.value;
            console.log(con);
        }
        let operacion=CalculatorPrice(con, price);

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
         console.log(card)
        dispatch(addTask(card))
    }
    const clickBtnAdd = (counter) => {
        setCounter(counter + 1);
    }
    const clickBtnRest = (counter) => {
        if (counter > 0) {
            setCounter(counter - 1);
        }
    }



    return (
        <form onSubmit={handleSubmit}>
            <div className={styleForm.containerInput}>
                <input type="text" name="name" placeholder={detail} onChange={handleChange} required />
            </div>
            <div className={styleForm.containerSectionForm}>
            <input name="count" type="text" min="1" placeholder="1" onChange={handleChange} required/>
            <div className={styleForm.price}>
                    <h1>$</h1>
                    <h1>{lastPrice}</h1>
                </div>
            </div>

            <p className={styleForm.nota}>
                Por compra una docena tiene el 5% de descuento, por dos docenas el 10% de descuento y por 3 docenas el 15% de descuento.
            </p>
            <input className={styleForm.btnAddCart} name="submit" type="submit" value="Agregar al Carrito" />
        </form>
    )
}