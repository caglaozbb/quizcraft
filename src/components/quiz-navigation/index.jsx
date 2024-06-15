'use client'
import React from 'react';
import { useRouter } from 'next/navigation'; // Next.js 13'ten itibaren bu kanca kullanılabilir
import styles from "./styles.module.css";
import Button from "../button";
import useQuestionStore from "../../app/store/store";

function QuizNavigation() {
    const currentQuestionIdx = useQuestionStore((state) => state.currentQuestionIdx);
    const setCurrentQuestionIdx = useQuestionStore((state) => state.setCurrentQuestionIdx);
    const questions = useQuestionStore((state) => state.questions);
    const router = useRouter();

    const handleNext = () => {
        if (currentQuestionIdx < questions.length - 1) {
            setCurrentQuestionIdx(currentQuestionIdx + 1);
        } else {
            router.push('/results');
        }
    };

    return (
        <div className={styles.navigation}>
            <Button variant='skip'>Skip</Button>
            <Button onClick={handleNext} variant='secondary'>Next</Button>
        </div>
    );
}

export default QuizNavigation;
