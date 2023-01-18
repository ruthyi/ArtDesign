import React from 'react'
import { Form, Formik } from 'formik';
import { InputsField } from './InputsField ';

export const FormProductCard = (props) => {
    const {price,detail}=props;
    return (
        <div>
            <Formik initialValues={{
                    name: '',
                    price: '',
                }}  onSubmit={(values, { resetForm }) => {
                    console.log(values)
                    resetForm()}} >
                {formik => (
                    <Form>
                        <InputsField label="" name="name" type="text" placeholder={detail} />
                        <InputsField  name="price" type="text" placeholder="0" />
                    </Form>
                )}
            </Formik>
        </div>

    )
}