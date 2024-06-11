'use client'
import React from 'react'
import styles from "./styles.module.css"
import Button from "../button"
import useQuestionStore from "../../app/store/store"


function QuizNavigation() {

    const currentQuestionIdx = useQuestionStore((state) => state.currentQuestionIdx);
    const setCurrentQuestionIdx = useQuestionStore((state) => state.setCurrentQuestionIdx);

    const handleNext = () => {
        setCurrentQuestionIdx(currentQuestionIdx + 1)
    }

    return (
        <div className={styles.navigation} >
            <Button variant='danger'>Skip</Button>
            <Button onClick={handleNext} variant='secondary'>Next</Button>
        </div>
    )
}

export default QuizNavigation;