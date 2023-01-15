import React from 'react'
import styles from './Styles.module.css'
import types from './Types.module.css'

export const Banner = () => {
  return (
    <div className={styles.containerHeader} >
    <h2 className={types.big} >
   Title
     </h2>
     <p className={types.small} >
   Loremp ipsum
    </p>
   </div>
  )
}
