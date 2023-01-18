import React from 'react';
import { FormProductCard } from '../Form/FormProductCard ';
import style from './Category.module.css'
export const CategoryCards = (props) => {
    const {lista:{id, name, url, price,detail}}=props;
  return (
    <div className={style.categoryCards}>
        <div>
            <img src={url} alt={name} />
        </div>
        <div>
            <h2>{name}</h2>
            <p>{id}</p>
            <FormProductCard price={price} detail={detail}/>
        </div>

    </div>
  )
}
