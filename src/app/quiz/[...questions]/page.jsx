import React from 'react'
import styles from "./styles.module.css"
import QuestionStatus from '@/components/question-status';
import QuizNavigation from '@/components/quiz-navigation';
import Question from '@/components/question'

export const dynamic = 'force-dynamic'


function Quiz() {
    return (
        <div>
            <QuestionStatus />
            <Question />
            <QuizNavigation />
        </div>
    )
}

export default Quiz;