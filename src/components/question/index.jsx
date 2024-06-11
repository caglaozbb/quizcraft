'use client'
import React from "react";
import styles from "./styles.module.css"
import useQuestionStore from "../../app/store/store"

function Question() {
    const questions = useQuestionStore((state) => state.questions);
    const currentQuestionIdx = useQuestionStore((state) => state.currentQuestionIdx);

    if (!questions[currentQuestionIdx]) {
        return
    }

    return (
        <div className={styles.questionWrapper}>
            <h2>Questions</h2>
            <div>Question Text:{questions[currentQuestionIdx].text}</div>

            {/* {questions && questions.map((question, idx) => (
                <div key={idx} className={styles.questionBlock}>
                    <div>
                        <strong>Question Text:</strong> {question.text}
                    </div>
                    <div>
                        <strong>Question Options:</strong>
                        <ul>
                            {question.options && question.options.map((option, idx) => (
                                <li key={idx}>{option}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <strong>Question Answer:</strong> {question.answer}
                    </div>
                </div>
            ))} */}
        </div>
    )
}

export default Question;
