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
        <div className={style.divCategoricard}>
            <h2>{name}</h2>
            <p className={style.divCategoricardP}>{id}</p>
            <FormProductCard price={price} detail={detail} id={id} name={name} url={url}/>
        </div>

    </div>
  )
}
