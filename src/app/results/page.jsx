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
                {/* <Link href="//"><Button variant='resultsNav'>Generate PDF</Button></Link>
                <Link href="//"> <Button variant='resultsNav'>Generate Cheatsheet</Button></Link> */}
                <a target='_blank' href={`http://twitter.com/share?text=i solved a quiz from quizcraft and this is my score ${calculateScore()} / ${questions.length}` + '. ' + 'https://quizcraft.quest/'}><Button variant='resultsNav'>Share Score</Button></a>
            </div>

            {/* <ul>
                {questions.map((question, index) => (
                    <li key={index}>
                        <div>Question: {question.text}</div>
                        <div>Your answer: {question.options[answers[index]]}</div>
                        <div>Correct answer: {question.options[question.answer]}</div>
                    </li>
                ))}
            </ul> */}
        </div>
    );
}

export default Results;
