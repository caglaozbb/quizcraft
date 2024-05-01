import React from 'react'
import styles from "./styles.module.css"
import QuestionStatus from '/components/question-status';
import QuizNavigation from '/components/quiz-navigation'

function Quiz() {
    return (
        <div>
            <QuestionStatus />

            <QuizNavigation />
        </div>
    )
}

export default Quiz;