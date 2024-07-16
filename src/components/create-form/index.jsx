'use client'
import React, { useEffect, useState } from 'react';
import styles from './styles.module.css'
import Button from '../button';
import Input from '../input';
import Link from 'next/link';
import { readStreamableValue } from 'ai/rsc';
import { generate } from "./actions"
import useQuestionStore from "../../app/store/store"
import { useRouter } from 'next/navigation';

function CreateForm() {

    const placeholderArray = [
        "Javascript",
        "English for beginner",
        "Math for 1st classes",
    ];

    const [placeholder, setPlaceholder] = useState(placeholderArray[0]);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(prevIndex => {
                const newIndex = (prevIndex + 1) % placeholderArray.length;
                setPlaceholder(placeholderArray[newIndex]);
                return newIndex;
            });
        }, 3000);

        return () => clearInterval(interval);
    }, []);

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
                placeholder={placeholder}
                value={inputValue}
                onChange={handleInputChange} />
            <Button variant="primary" type='submit'>Create Quiz</Button>
        </form>
    )
}

export default CreateForm; 