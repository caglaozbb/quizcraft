'use client'
import React, { useEffect } from 'react';
import styles from './styles.module.css'
import Button from '../button';
import Input from '../input';
import Link from 'next/link';
import { readStreamableValue } from 'ai/rsc';
import { generate } from "./actions"
import useQuestionStore from "../../app/store/store"
import { useRouter } from 'next/navigation';

function CreateForm() {

    useEffect(() => {
        console.log('zirt');
    }, [])
    const router = useRouter()
    const inputValue = useQuestionStore((state) => state.inputValue);
    const setInputValue = useQuestionStore((state) => state.setInputValue);

    const setQuestions = useQuestionStore((state) => state.setQuestions);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };


    const handleButtonClick = async (e) => {
        e.preventDefault()
        const { object } = await generate(inputValue);

        router.push('/quiz/solve')

        for await (const partialObject of readStreamableValue(object)) {
            if (partialObject?.questions) {
                setQuestions(partialObject.questions)
            }
        }
    };


    return (
        <form className={styles.select} onSubmit={handleButtonClick}>
            <Input
                placeholder="world war 2"
                value={inputValue}
                onChange={handleInputChange} />
            <Button variant="primary" type='submit'>Create Quiz</Button>
        </form>
    )
}

export default CreateForm; 