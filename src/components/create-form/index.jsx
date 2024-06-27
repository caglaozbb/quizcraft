'use client'
import React from 'react';
import styles from './styles.module.css'
import Button from '../button';
import Input from '../input';
import Link from 'next/link';
import { readStreamableValue } from 'ai/rsc';
import { generate } from "./actions"
import useQuestionStore from "../../app/store/store"

function CreateForm() {
    const inputValue = useQuestionStore((state) => state.inputValue);
    const setInputValue = useQuestionStore((state) => state.setInputValue);

    const setQuestions = useQuestionStore((state) => state.setQuestions);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };


    const handleButtonClick = async () => {
        const { object } = await generate(inputValue);

        for await (const partialObject of readStreamableValue(object)) {
            if (partialObject?.questions) {
                setQuestions(partialObject.questions)
            }
        }
    };


    return (
        <div className={styles.select}>
            <Input
                placeholder="world war 2"
                value={inputValue}
                onChange={handleInputChange} />
            <Link href="/quiz/zirt"><Button variant="primary" onClick={handleButtonClick} >Create Quiz</Button></Link>
        </div>
    )
}

export default CreateForm; 