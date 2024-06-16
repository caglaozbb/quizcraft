'use client'
import React from 'react'
import styles from "./styles.module.css"
import { IoClose } from "react-icons/io5";
import useQuestionStore from "../../app/store/store"

function QuestionStatus() {
    const questions = useQuestionStore((state) => state.questions);
    const currentQuestionIdx = useQuestionStore((state) => state.currentQuestionIdx);

    const progress = `${((currentQuestionIdx) / questions.length) * 100}%`;


    return (
        <div className={styles.status}>
            <IoClose />
            <div className={styles.statusBar}>
                <div className={styles.progress} style={{ width: progress }}></div>
            </div>
            <div>{currentQuestionIdx + 1}/{questions.length}</div>
        </div>
    )
}

export default QuestionStatus;