import React from 'react'
import style from './Category.module.css'
import { Outlet, Link } from 'react-router-dom'

export const Category = () => {
    return (
        <section className={style.containerCategory}>
            <div>
                <Link to="/card"><h1>Tarjetas <br /> de <br /> invitación</h1></Link>
            </div>
            <div>
                <Link to="/sublimationPrint"><h1>Sublimación <br /> y <br /> estampados</h1></Link>
            </div>
            <div>
                <Link to="/detail"><h1>Detalles familiares <br /> y empresariales</h1></Link>
            </div>
            <div>
                <Link to="/OtherService"><h1>Otros <br /> Serviciós</h1></Link>
            </div>
            <Outlet />
        </section>
    )
}
