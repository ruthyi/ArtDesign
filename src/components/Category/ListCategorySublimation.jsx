import React from 'react'
import { dataSublimationPrints } from '../../Data';
import { CategoryCards } from './CategoryCards';
import style from './Category.module.css'

export const ListCategorySublimation = (props) => {
  const { nameFilter } = props;

  return (
    <section className={style.containerCards}>
      {
        dataSublimationPrints.map((lista => {
          if (nameFilter == "all") {
            return (
              <div key={lista.id}>
                <CategoryCards lista={lista} />
              </div>
            )
          } else if (nameFilter == "caps" && lista.filter == "caps") {
            return (
              <div key={lista.id}>
                <CategoryCards lista={lista} />
              </div>
            )
          } else if (nameFilter == "tshirts" && lista.filter == "tshirts") {
            return (
              <div key={lista.id}>
                <CategoryCards lista={lista} />
              </div>
            )
          } else if (nameFilter == "crockery" && lista.filter == "crockery") {
            return (
              <div key={lista.id}>
                <CategoryCards lista={lista} />
              </div>
            )
          } 

        }))
      }
      <div className="">

      </div>
    </section>

  )
}
