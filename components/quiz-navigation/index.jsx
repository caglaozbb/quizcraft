import React from 'react'
import styles from "./styles.module.css"
import Button from "../button"


function QuizNavigation() {
    return (
        <div className={styles.navigation} >
            <Button variant='danger'>Skip</Button>
            <Button variant='secondary'>Next</Button>
        </div>
    )
}

export default QuizNavigation;