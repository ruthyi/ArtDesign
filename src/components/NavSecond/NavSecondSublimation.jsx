import React from 'react'
import { useState } from "react";
import styles from './NavSecond.module.css'
import { ListCategorySublimation } from '../Category/ListCategorySublimation';

export const NavSecondSublimation = () => {
    const [clickAll, setClickAll] = useState(true);
    const [clickCaps, setClickCaps,] = useState(false);
    const [clickTShirts, setClickTShirts] = useState(false);
    const [clickCrockery, setClickCrockery] = useState(false);

    function clicks(num) {
        console.log("entro");
        setClickCaps(false);
        setClickTShirts(false);
        setClickCrockery(false);

        switch (num) {
            case 1:
                setClickAll(false);
                setClickCaps(true);
                break;
            case 2:
                setClickAll(false);
                setClickTShirts(true);
                break;
            case 3:
                setClickAll(false);
                setClickCrockery(true);
                break;
            
            default:
                console.log("sorry");
                break;
        }
    }
    
    return (

        <nav className={styles.secondNav}>
            <ul className={styles.secondtNavUlSublimation}>
                <li>
                    <a onClick={() => {
                        console.log("entro")
                        clicks(1);
                    }
                    }>Cachuchas </a>
                </li>
                <li>
                    <a onClick={() => {
                        console.log("entro")
                        clicks(2);
                    }
                    }>Camisetas y Busos</a>

                </li>
                <li>
                    <a onClick={() => {
                        console.log("entro")
                        clicks(3);
                    }
                    }>Vajilla</a>
                </li>
                
            </ul>
            <div>
                {clickAll ? <ListCategorySublimation nameFilter="all" /> : console.log("1" )
                }
                {clickCaps ? <ListCategorySublimation nameFilter="caps"/> : console.log("2" )
                }
                {clickTShirts ? <ListCategorySublimation nameFilter="tshirts"/> : console.log("3")
                }
                {clickCrockery ? <ListCategorySublimation nameFilter="crockery"/> : console.log("4" )
                }
                
            </div>
        </nav>

    )
}
