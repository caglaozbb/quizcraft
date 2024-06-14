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
        console.log(value);
        addAnswer(currentQuestionIdx, value)
    }
    console.log(answers);


    return (
        <div className={styles.questionWrapper}>
            <h2>Questions</h2>
            <div>Question Text:{questions[currentQuestionIdx].text}</div>

            <div className={styles.questionBlock}>
                <ul>
                    {questions[currentQuestionIdx].options && questions[currentQuestionIdx]?.options.map((option, index) => (
                        <li key={index}>
                            <Button value={index} variant="primary" onClick={() => handleButtonClick(index)}>{option}</Button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Question;
