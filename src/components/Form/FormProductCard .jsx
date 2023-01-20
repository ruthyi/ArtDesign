import React from 'react'
import { useState } from 'react';
import { Form, Formik } from 'formik';
import { InputsField } from './InputsField ';
import styleForm from './FormProductCard.module.css'
import { ButtonAddCart } from '../Button/ButtonAddCart';

export const FormProductCard = (props) => {
    const { price, detail } = props;
    const [lastPrice, setLastPrice] = useState(price)
    const [counter, setCounter] = useState(1)
    
    return (
        <div>
            <Formik initialValues={{
                name: '',
                price: '',
            }} onSubmit={(values, { resetForm }) => {
                console.log(values)
                resetForm()
            }} validateOnChange={(values) => {
                setCounter(values.price)
            }} >
                {formik => (
                    <Form>
                        <InputsField label="" name="name" type="text"  placeholder={detail} />
                        <section className={styleForm.containerSectionForm}>
                            <div className={styleForm.changeNumber}>
                                <button>-</button>
                                <InputsField label="" name="price" type="number" min="1" placeholder={counter} />
                                <button>+</button>
                            </div>
                            <div className={styleForm.price}>
                                <h1>$</h1>
                                <h1>{counter}</h1>
                            </div>
                        </section>
                        <button type="onSubmit" >
                        Agregar al Carrito
                        </button>
                    </Form>
                )}
            </Formik>
        </div>

    )
}