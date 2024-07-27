'use client'
import React from 'react';
import useQuestionStore from '../../app/store/store';
import Button from '@/components/button';
import Image from 'next/image';
import styles from "./styles.module.css"
import Link from 'next/link';


function Results() {
    const answers = useQuestionStore((state) => state.answers);
    const questions = useQuestionStore((state) => state.questions);
    const inputValue = useQuestionStore((state) => state.inputValue)

    const calculateScore = () => {
        let score = 0;
        questions.forEach((question, index) => {
            if (question.answer === answers[index]) {
                score++;
            }
        });
        return score;
    };

    return (
        <div className={styles.resultsWrapper}>
            <Image src="/icon.png" width={200} height={200} className={styles.imageResult}></Image>
            <h2 className={styles.header}>Congarts! The quiz is done</h2>
            <p className={styles.score}>{calculateScore()} / {questions.length}</p>
            <div className={styles.navigate}>
                <Link href="//"><Button variant='resultsNav'>Home</Button></Link>
                <Link href="/answers"><Button variant='resultsNav'>Answers</Button></Link>
                <a target='_blank' href={`http://twitter.com/share?text=i solved a '${inputValue}' quiz from quizcraft and this is my score ${calculateScore()} / ${questions.length}` + '. ' + 'https://quizcraft.quest/'}><Button variant='resultsNav'>Share Score</Button></a>
            </div>
        </div>
    );
}

export default Results;
