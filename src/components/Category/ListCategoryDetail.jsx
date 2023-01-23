import React from 'react'
import { dataDetail } from '../../Data';
import { CategoryCards } from './CategoryCards';
import style from './Category.module.css'

export const ListCategoryDetail = (props) => {
  const { nameFilter } = props;

  return (
    <section className={style.containerCards}>
      {
        dataDetail.map((lista => {
          if (nameFilter == "all") {
            return (
              <div key={lista.id}>
                <CategoryCards lista={lista} />
              </div>
            )
          } else if (nameFilter == "detail" && lista.filter == "detail") {
            return (
              <div key={lista.id}>
                <CategoryCards lista={lista} />
              </div>
            )
          } else if (nameFilter == "boxesAndPackaging" && lista.filter == "boxesAndPackaging") {
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
