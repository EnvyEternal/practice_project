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
                                <div>
                                    <h4>
                                        Pay a Fraction of cost vs hiring an agency
                                    </h4>
                                    <p>
                                        For as low as $299, our naming contests and marketplace allow you to get an amazing brand quickly and affordably.
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <h4>
                                        Pay a Fraction of cost vs hiring an agency
                                    </h4>
                                    <p>
                                        For as low as $299, our naming contests and marketplace allow you to get an amazing brand quickly and affordably.
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.questions}>
                    <div>
                        <ul>
                            <li>
                                <div>
                                    <h4>
                                        Questions?
                                    </h4>
                                    <p>
                                        Speak with a Squadhelp platform expert to learn more and get your questions answered.
                                    </p>
                                    <button>
                                        Schedule Consultation
                                    </button>
                                    <a href={`tel:${CONSTANTS.CONTACTS.TEL}`}>
                                        <img src={`${CONSTANTS.STATIC_IMAGES_PATH}phone.png`} alt="phone" />
                                        <span>{CONSTANTS.CONTACTS.TEL}</span>
                                    </a>
                                    <span>
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
