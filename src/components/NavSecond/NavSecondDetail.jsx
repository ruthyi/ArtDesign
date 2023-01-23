import React from 'react'
import { useState } from "react";
import styles from './NavSecond.module.css'
import { ListCategoryDetail } from '../Category/ListCategoryDetail';

export const NavSecondDetail = () => {
    const [clickAll, setClickAll] = useState(true);
    const [clicDetail, setclicDetail] = useState(false);
    const [clickBoxesAndPackaging, setClickBoxesAndPackaging] = useState(false);

    function clicks(num) {
        console.log("entro");
        setclicDetail(false);
        setClickBoxesAndPackaging(false);
        switch (num) {
            case 1:
                setClickAll(false);
                setclicDetail(true);
                break;
            case 2:
                setClickAll(false);
                setClickBoxesAndPackaging(true);
                break;
           
            default:
                console.log("sorry");
                break;
        }
    }
    return (

        <nav className={styles.secondNav}>
            <ul className={styles.secondtNavUlDetail}>
                <li>
                    <a onClick={() => {
                        console.log("entro")
                        clicks(1);
                    }
                    }>Detalles </a>
                </li>
                <li>
                    <a onClick={() => {
                        console.log("entro")
                        clicks(2);
                    }
                    }>Cajas y Empaques</a>
                </li>
                
            </ul>
            <div>
                {clickAll ? <ListCategoryDetail nameFilter="all" /> : console.log("1" )
                }
                {clicDetail ? <ListCategoryDetail nameFilter="detail"/> : console.log("2" )
                }
                {clickBoxesAndPackaging ? <ListCategoryDetail nameFilter="boxesAndPackaging"/> : console.log("3")
                }
                
            </div>
        </nav>

    )
}
