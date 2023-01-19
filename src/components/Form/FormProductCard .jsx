import React from 'react'
import { useState } from 'react';
import { Form, Formik } from 'formik';
import { InputsField } from './InputsField ';
import styleForm from './FormProductCard.module.css'

export const FormProductCard = (props) => {
    const { price, detail } = props;
    const [lastPrice, setListado] = useState(price)
    return (
        <div>
            <Formik initialValues={{
                name: '',
                price: '',
            }} onSubmit={(values, { resetForm }) => {
                console.log(values)
                resetForm()
            }} >
                {formik => (
                    <Form>
                        <InputsField label="" name="name" type="text" placeholder={detail} />
                        <section>
                            <div>
                                <button>-</button>
                                <InputsField name="price" type="text" placeholder="1" />
                                <button>+</button>
                            </div>
                            <div>
                                <h1>$</h1>
                                <h1>{lastPrice}</h1>
                            </div>
                        </section>
                    </Form>
                )}
            </Formik>
        </div>

    )
}