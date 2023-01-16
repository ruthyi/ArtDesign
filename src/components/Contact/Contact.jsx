import React from 'react'
import styleContact from './Contact.module.css'

export const Contact = () => {
    return (
        <section className={styleContact.containerContact}>
            <h1>Contactanos</h1>
            <div dangerouslySetInnerHTML={{ __html: "<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.3499808983224!2d-74.0394792!3d4.8809206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4079fd1ca759c5%3A0xd68b6197cf5bc29b!2sConjunto%20Residencial%20San%20German%20Chia!5e0!3m2!1ses-419!2sco!4v1673910421550!5m2!1ses-419!2sco' width='100%' height='50%'/>"}} />
            <div>
                <p>Diseñadora Grafica: Maria Bermudez</p>
                <p>Celular: 3209972620</p>
                <p>Correo: arteydiseño983@gmail.com</p>
            </div>
        </section>
    )
}
