import React from 'react'
import { useState } from 'react';
import styleForm from './FormProductCard.module.css'
function LastPrice(props) {
    if(props.counter<12){
        return (
            <div className={styleForm.price}>
                <h1>$</h1>
                <h1>{props.counter*props.lastPrice}</h1>
            </div>
        )
    }else if (props.counter >= 12 && props.counter < 24) {
        const valor=(props.lastPrice-((props.lastPrice*5)/100))
        return (
            <div className={styleForm.price}>
                <h1>$</h1>
                <h1>{valor*props.counter}</h1>
            </div>
        )
    } else if (props.counter >=24 && props.counter < 36) {
        const valor=(props.lastPrice-((props.lastPrice*10)/100))
        return (
            <div className={styleForm.price}>
                <h1>$</h1>
                <h1>{valor*props.counter}</h1>
            </div>
        )
    }else  {
        const valor=(props.lastPrice-((props.lastPrice*15)/100))
        return (
            <div className={styleForm.price}>
                <h1>$</h1>
                <h1>{valor*props.counter}</h1>
            </div>
        )
    }
}


export const FormProductCard = (props) => {
    const { price, detail } = props;
    const [lastPrice, setLastPrice] = useState(price)
    const [counter, setCounter] = useState(1)

    function onSubmitbtn(e){
        e.preventDefault()
    }
    const clickBtnAdd=(counter)=>{
        setCounter(counter + 1);
    }
    const clickBtnRest=(counter)=>{
        if(counter>0){
            setCounter(counter - 1);
        }
    }
    return (
        <form onSubmit={onSubmitbtn} >
            <div className={styleForm.containerInput}>
                <input type="text" name="name" placeholder={detail}  required/>
            </div>
            <div className={styleForm.containerSectionForm}>
                <div className={styleForm.changeNumber}>
                    <button onClick={() => {
                        clickBtnRest(counter);
                    }}>-</button>
                    <input className={styleForm.inputnum} name="price" type="number" min="1" value={counter}  />
                    <button onClick={() => { 
                        clickBtnAdd(counter);
                         }}>+</button>
                </div>
                <LastPrice lastPrice={lastPrice} counter={counter}/>
            </div>
            <p className={styleForm.nota}>
            Por compra una docena tiene el 5% de descuento, por dos docenas el 10% de descuento y por 3 docenas el 15% de descuento.
            </p>
            <input className={styleForm.btnAddCart} name="submit" type="submit" value="Agregar al Carrito" />
        </form>
    )
}