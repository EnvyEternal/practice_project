import React from 'react'
import CONSTANTS from './../../constants';
import cio from './cio.json'
import styles from '../../pages/Home/Home.module.sass'

function CardContainer() {
    return (
        <div className={styles.cardContainer}>
            { cio.map((info, i) =>(
                <div key={i} className={styles.card}>
                  <img
                    src={info.img.src}
                    alt={info.img.alt}
                  />
                  <h3>{info.header}</h3>
                  <p>
                    {info.body}
                  </p>
                </div>))}
            </div>
    )
}

export default CardContainer







/*

<div className={styles.cardContainer}>
                <div className={styles.card}>
                  <img
                    src={`${CONSTANTS.STATIC_IMAGES_PATH}more-benifits-world-icon.png`}
                    alt="globe"
                  />
                  <h3>Largest Naming Community</h3>
                  <p>
                    Our unique approach allows you to receive an unmatched
                    breadth of business name ideas from world's largest
                    community of naming experts. With 75,000+ creatives and
                    15,000+ successful naming projects, Squadhelp is by far the
                    largest naming platform across the globe .
                  </p>
                </div>
                <div className={styles.card}>
                  <img
                    src={`${CONSTANTS.STATIC_IMAGES_PATH}more-benifits-high-quality-icon.png`}
                    alt="desktop"
                  />
                  <h3>High Quality & Collaboration</h3>
                  <p>
                    Using an advanced Quality Scoring Algorithm and Machine
                    Learning, we ensure that you receive more ideas from our
                    top-quality creatives, and Gamification best practices
                    ensure two-way communication throughout your contest.
                  </p>
                </div>
                <div className={styles.card}>
                  <img
                    src={`${CONSTANTS.STATIC_IMAGES_PATH}more-benifits-trademark-icon.png`}
                    alt="cards"
                  />
                  <h3>Agency-Level Features</h3>
                  <p>
                    Squadhelp's high end Audience Testing service allows you to
                    poll your target demographics to get unbiased feedback on
                    your favorite names. Also receive Trademark support from our
                    team of Licensed Trademark Attorneys, so you can pick your
                    name with confidence.
                  </p>
                </div>
              </div>

              */