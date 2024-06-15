'use client'
import React from 'react';
import useQuestionStore from '../../app/store/store';

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
        <div>
            <h2>Results</h2>
            <p>{calculateScore()} out of {questions.length}</p>
            <ul>
                {questions.map((question, index) => (
                    <li key={index}>
                        <div>Question: {question.text}</div>
                        <div>Your answer: {question.options[answers[index]]}</div>
                        <div>Correct answer: {question.options[question.answer]}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Results;
