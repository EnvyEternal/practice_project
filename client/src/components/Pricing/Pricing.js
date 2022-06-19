import React from 'react'
import CONSTANTS from '../../constants'
import styles from '../Pricing/Pricing.module.sass'

function Pricing() {
    return (
        <div className={styles.container}>
            <div className={styles.containerInfo}>
                <div className={styles.info}>
                    <div className={styles.infoCenter}>
                        <ul>
                            <li>
                                <div className={styles.infoText}>
                                    <h4 className={styles.head}>
                                        Pay a Fraction of cost vs hiring an agency
                                    </h4>
                                    <p className={styles.body}>
                                        For as low as $299, our naming contests and marketplace allow you to get an amazing brand quickly and affordably.
                                    </p>
                                </div>
                            </li>
                            <li className={styles.line}></li>
                            <li>
                                <div className={styles.infoText}>
                                    <h4 className={styles.head}>
                                        Pay a Fraction of cost vs hiring an agency
                                    </h4>
                                    <p className={styles.body}>
                                        For as low as $299, our naming contests and marketplace allow you to get an amazing brand quickly and affordably.
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.questions}>
                    <div className={styles.questionsUl}>
                        <ul>
                            <li className={styles.questionsUl}>
                                <div className={styles.questionsDiv}>
                                    <h4 className={styles.headq}>
                                        Questions?
                                    </h4>
                                    <p className={styles.bodyq}>
                                        Speak with a Squadhelp platform expert to learn more and get your questions answered.
                                    </p>
                                    <button className={styles.buttonq}>
                                        Schedule Consultation
                                    </button>
                                    <div>
                                        <a href={`tel:${CONSTANTS.CONTACTS.TEL}`}>
                                            <img src={`${CONSTANTS.STATIC_IMAGES_PATH}phone.png`} alt="phone" />
                                            <span className={styles.buttonText}>{CONSTANTS.CONTACTS.TEL}</span>
                                         </a>
                                    </div>
                                    <span className={styles.bodyq}>
                                        Call us for assistance
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing
