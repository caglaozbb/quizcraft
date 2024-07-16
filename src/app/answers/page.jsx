'use client'
import React from 'react';
import useQuestionStore from '../store/store';
import styles from "./styles.module.css"

function Answers() {
    const answers = useQuestionStore((state) => state.answers);
    const questions = useQuestionStore((state) => state.questions);
    const inputValue = useQuestionStore((state) => state.inputValue)
    const currentQuestionIdx = useQuestionStore((state) => state.currentQuestionIdx);

    console.log(inputValue);
    console.log(questions);

    return (
        <div className={styles.resultsWrapper}>
            <h2 className={styles.header}>SEE YOUR ANSWERS</h2>
            <div className={styles.list}>
                <ul className={styles.ul}>
                    {questions.map((question, index) => (
                        <li className={styles.li} key={index}>
                            <div className={styles.questions}>{index + 1}. Question: {question.text}</div>
                            <div className={styles.correctA}>Correct answer: {question.options[question.answer]}</div>
                            <div className={styles.yourA}>Your answer: {question.options[answers[index]]}</div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Answers;
