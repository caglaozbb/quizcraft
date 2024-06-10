'use client'
import React, { useState } from 'react';
import styles from './styles.module.css'
import Button from '../button';
import Input from '../input';
import Link from 'next/link';
import { readStreamableValue } from 'ai/rsc';
import { generate } from "./actions"

function CreateForm() {
    const [inputValue, setInputValue] = useState('');
    const [questionText, setQuestionText] = useState('');
    const [questionOptions, setQuestionOptions] = useState([]);
    const [questionAnswer, setQuestionAnswer] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleButtonClick = async () => {
        const { object } = await generate(inputValue);

        for await (const partialObject of readStreamableValue(object)) {
            if (partialObject) {
                console.log(partialObject);
                console.log(partialObject.questions?.[0].text);
                setQuestionText(partialObject.questions?.[0].text);
                setQuestionOptions(partialObject.questions?.[0].options || []);
                setQuestionAnswer(partialObject.questions?.[0].answer);

            }
        }
    };
    return (
        <div className={styles.select}>
            <Input
                placeholder="world war 2"
                value={inputValue}
                onChange={handleInputChange} />
            <Button variant="primary" onClick={handleButtonClick}>Create Quiz</Button>
            <div>{questionText}</div>
            <div>
                <ul>
                    {questionOptions.map((option, index) => (<li key={index}>{option}</li>))
                    }
                </ul>
            </div>
            <div>{questionAnswer}</div>
        </div>
    )
}

export default CreateForm; 