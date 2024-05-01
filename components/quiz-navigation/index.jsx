import React from 'react'
import styles from "./styles.module.css"


function QuizNavigation() {
    return (
        <div classname={styles.navigation} >
            <button className={styles.skip}>Skip</button>
            <button className={styles.next}>Next</button>
        </div>
    )
}

export default QuizNavigation;