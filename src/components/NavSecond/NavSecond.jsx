import React from 'react'
import { useState } from "react";
import styles from './NavSecond.module.css'
import { ListCategory } from '../Category/ListCategory';

export const NavSecond = () => {
    const [clickAll, setClickAll] = useState(true);
    const [clickWedding, setClickWedding] = useState(false);
    const [clickFifteenYears, setClickFifteenYears] = useState(false);
    const [clickDegrees, setClickDegrees] = useState(false);
    const [clickBabyShower, setClickBabyShower] = useState(false);
    const [clickBirthday, setClickBirthday] = useState(false);
    const [clickBaptisms, setClickBaptisms] = useState(false);
    const [clickFirstCommunions, setClickFirstCommunions] = useState(false);
    function clicks(num) {
        console.log("entro");
        setClickWedding(false);
        setClickFifteenYears(false);
        setClickDegrees(false);
        setClickBabyShower(false);
        setClickBirthday(false);
        setClickBaptisms(false);
        setClickFirstCommunions(false);
        switch (num) {
            case 1:
                setClickAll(false);
                setClickWedding(true);
                break;
            case 2:
                setClickAll(false);
                setClickFifteenYears(true);
                break;
            case 3:
                setClickAll(false);
                setClickDegrees(true);
                break;
            case 4:
                setClickAll(false);
                setClickBabyShower(true);
                break;
            case 5:
                setClickAll(false);
                setClickBirthday(true);
                break;
            case 6:
                setClickAll(false);
                setClickBaptisms(true);
                break;
            case 7:
                setClickAll(false);
                setClickFirstCommunions(true);
                break;
            default:
                console.log("sorry");
                break;
        }
    }
    return (

        <nav className={styles.secondNav}>
            <ul className={styles.secondtNavUl}>
                <li>
                    <a onClick={() => {
                        console.log("entro")
                        clicks(1);
                    }
                    }>Bodas </a>
                </li>
                <li>
                    <a onClick={() => {
                        console.log("entro")
                        clicks(2);
                    }
                    }>Quince Años</a>

                </li>
                <li>
                    <a onClick={() => {
                        console.log("entro")
                        clicks(3);
                    }
                    }>Grados</a>
                </li>
                <li>
                    <a onClick={() => {
                        console.log("entro")
                        clicks(4);
                    }
                    }>Baby Shower </a>
                </li>
                <li>
                    <a onClick={() => {
                        console.log("entro")
                        clicks(5);
                    }
                    }>Cumpleaños </a>
                </li>
                <li>
                    <a onClick={() => {
                        console.log("entro")
                        clicks(6);
                    }
                    }>Bautizos </a>
                </li>
                <li>
                    <a onClick={() => {
                        console.log("entro")
                        clicks(7);
                    }
                    }>Primeras Comuniones </a>
                </li>

            </ul>
            <div>
                {clickAll ? <ListCategory nameFilter="all" /> : console.log("1" )
                }
                {clickWedding ? <ListCategory nameFilter="wedding"/> : console.log("2" )
                }
                {clickFifteenYears ? <ListCategory nameFilter="fifteenYears"/> : console.log("3")
                }
                {clickDegrees ? <ListCategory nameFilter="degrees"/> : console.log("4" )
                }
                {clickBabyShower ? <ListCategory nameFilter="babyShower" /> : console.log("5" )
                }
                {clickBirthday ? <ListCategory nameFilter="birthday"/> : console.log("6" )
                }
                {
                 clickBaptisms ? <ListCategory nameFilter="baptisms" /> : console.log("7" )
                }
                {
                 clickFirstCommunions ? <ListCategory nameFilter="firstCommunions" /> : console.log("8")
                }
            </div>
        </nav>

    )
}
