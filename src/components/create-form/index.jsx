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
import { Turnstile } from '@marsidev/react-turnstile'

function CreateForm() {
    const [isVerified, setIsVerified] = useState(false);

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

        if (!isVerified) {
            alert("Please verify your turnstile");
            return;
        }

        const { object } = await generate(inputValue);

        router.push('/quiz/solve')

        for await (const partialObject of readStreamableValue(object)) {
            if (partialObject?.questions) {
                setQuestions(partialObject.questions)
            }
        }
    };

    const handleTurnstileSuccess = (token) => {
        if (!token) return;

        setIsVerified(true);
    }



    return (
        <form className={styles.select} onSubmit={handleButtonClick}>
            <Input
                placeholder={placeholder}
                value={inputValue}
                onChange={handleInputChange} />

            <Turnstile
                siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
                onSuccess={handleTurnstileSuccess}
                options={{
                    size: "invisible"
                }}
            />
            <Button variant="primary" type='submit' disabled={!isVerified}>Create Quiz</Button>
        </form>
    )
}

export default CreateForm; 