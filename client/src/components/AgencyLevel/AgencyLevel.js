import React from 'react'
import AgencyLevelDb from './AgencyLevelDb.json'
import styles from '../../pages/Home/Home.module.sass'
import { Link } from 'react-router-dom'

function AgencyLevel() {
    return (
        <div className={styles.cardContainer}>
            { AgencyLevelDb.map((info, i) =>(
                <div key={i} className={styles.card}>
                    <div className={styles.iconAgancy} style={{backgroundColor: `${info.back}`}}>
                        <i class={info.iconsStyle} style={{margin: "20px 4px 10px", position: 'absolute', color: `${info.color}`}}/>
                    </div>
                  <h3>{info.header}</h3>
                  <p>
                    {info.body}<Link style={{color: "gray"}} to={info.link}> Learn More</Link>
                  </p>
                </div>))}
            </div>
    )
}
export default AgencyLevel
