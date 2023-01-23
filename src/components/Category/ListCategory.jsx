import React from 'react'
import { dataCards } from '../../Data';
import { CategoryCards } from './CategoryCards';
import style from './Category.module.css'

export const ListCategory = (props) => {
  const { nameFilter } = props;

  return (
    <section className={style.containerCards}>
      {
        dataCards.map((lista => {
          if (nameFilter == "all") {
            return (
              <div key={lista.id}>
                <CategoryCards lista={lista} />
              </div>
            )
          } else if (nameFilter == "wedding" && lista.filter == "wedding") {
            return (
              <div key={lista.id}>
                <CategoryCards lista={lista} />
              </div>
            )
          } else if (nameFilter == "fifteenYears" && lista.filter == "fifteenYears") {
            return (
              <div key={lista.id}>
                <CategoryCards lista={lista} />
              </div>
            )
          } else if (nameFilter == "degrees" && lista.filter == "degrees") {
            return (
              <div key={lista.id}>
                <CategoryCards lista={lista} />
              </div>
            )
          } else if (nameFilter == "babyShower" && lista.filter == "babyShower") {
            return (
              <div key={lista.id}>
                <CategoryCards lista={lista} />
              </div>
            )
          } else if (nameFilter == "birthday" && lista.filter == "birthday") {
            return (
              <div key={lista.id}>
                <CategoryCards lista={lista} />
              </div>
            )
          } else if (nameFilter == "baptisms" && lista.filter == "baptisms") {
            return (
              <div key={lista.id}>
                <CategoryCards lista={lista} />
              </div>
            )
          } else if (nameFilter == "firstCommunions" && lista.filter == "firstCommunions") {
            return (
              <div key={lista.id}>
                <CategoryCards lista={lista} />
              </div>
            )
          }

        }))
      }
    </section>

  )
}
