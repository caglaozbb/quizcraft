import React from 'react'
import styles from "./styles.module.css"


function Scoreboard({ children }) {
    return (
        <div className={styles.scoreboard}>
            <div className={styles.comingsoon}>
                <img src="/comingsoon.webp" alt="features soon" />
            </div>
        </div>
    )
}

export default Scoreboard;