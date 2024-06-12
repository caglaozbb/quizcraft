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

    console.log(questions[currentQuestionIdx].options);
    // console.log(questions[currentQuestionIdx].options[0]);

    return (
        <div className={styles.questionWrapper}>
            <h2>Questions</h2>
            <div>Question Text:{questions[currentQuestionIdx].text}</div>

            <div className={styles.questionBlock}>
                <ul>
                    {questions[currentQuestionIdx].options && questions[currentQuestionIdx]?.options.map((option, index) => (
                        <li key={index}>
                            <label>
                                <input
                                    type="radio"
                                    name="option"
                                    value={index}
                                // checked={selectedOption === option}
                                // onChange={handleOptionChange}
                                />
                                {option}
                            </label></li>
                    ))}
                </ul>

            </div>
        </div>
    )
}

export default Question;
