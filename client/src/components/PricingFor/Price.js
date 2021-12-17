import React from 'react'
import price from '../price.json'
import styles from './price.module.sass'

function Price() {
    return (
        <div className={styles.container}>
            {price.map((info, i)=>(
                <div className={styles.card}>
                    <div className={styles.price} style={{borderColor:`${info.color}`}}>
                        <div className={styles.priceborder}>
                            <h1 style={{color:`${info.color}`}}>{info.price.head}</h1>
                            <p className={styles.pricebody}>{info.price.body}</p>
                            <div style={{color:`${info.color}`}} className={styles.value}>{info.price.value}</div>
                        </div>
                    </div>
                    <ul className={styles.ulinfo}>{info.specification.map((sp, z) =>(
                        <li className={styles.sp}>{sp.info}</li>
                    ))}
                    </ul>
                    <div className={styles.button} style={{backgroundColor:`${info.color}`}}>
                        <div className={styles.buttontext} class="fa fa-check">
                            Start
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Price


/* {
        "price" :{
            "head":"",
            "Body":"",
            "value":""
        },
        "specification":[]
    },
    {
        "price" :{
            "head":"",
            "Body":"",
            "value":""
        },
        "specification":[]
    },
    {
        "price" :{
            "head":"",
            "Body":"",
            "value":""
        },
        "specification":[]
    } */