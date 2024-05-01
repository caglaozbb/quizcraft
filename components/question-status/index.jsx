import React from 'react'
import styles from "./styles.module.css"
import { IoClose } from "react-icons/io5";


function QuestionStatus() {
    return (
        <div className={styles.status}>
            <IoClose />
            <div className={styles.statusBar}></div>
            <div>9/10</div>
        </div>
    )
}

export default QuestionStatus;