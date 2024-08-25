'use client'
import React from "react";
import styles from "./styles.module.css"
import useQuestionStore from "../../app/store/store"
import Button from "../button";


function Question() {
    const questions = useQuestionStore((state) => state.questions);
    const currentQuestionIdx = useQuestionStore((state) => state.currentQuestionIdx);
    const answers = useQuestionStore((state) => state.answers);
    const addAnswer = useQuestionStore((state) => state.addAnswer);

    if (!questions[currentQuestionIdx]) {
        return
    }


    const handleButtonClick = (value) => {
        addAnswer(currentQuestionIdx, value)
    }

    return (
        <div className={styles.questionWrapper}>
            <h2 className={styles.title}>New Question</h2>
            <h3 className={styles.question}>{questions[currentQuestionIdx].text}</h3>
            <ul className={styles.optionsList}>
                {questions[currentQuestionIdx].options && questions[currentQuestionIdx]?.options.map((option, index) => (
                    <li key={index}>
                        <Button value={index} variant="question" onClick={() => handleButtonClick(index)}>{option}</Button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Question;
