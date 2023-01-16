import React from 'react'
import style from './Category.module.css'

export const Category = ()  => {
    return (
    <section className={style.containerCategory}>
        <div>
            <h1>Tarjetas <br /> de <br/> invitación</h1>
        </div>
        <div>
            <h1>Sublimación <br /> y <br /> estampados</h1>
        </div>
        <div>
            <h1>Detalles familiares <br /> y empresariales</h1>
        </div>
        <div>
            <h1>Otros <br /> Serviciós</h1>
        </div>
    </section>
    )
}
