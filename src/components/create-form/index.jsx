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
import Select from '../select';


const difficultyOptions = [
    {
        key: "0",
        label: "Easy"
    },
    {
        key: "1",
        label: "Medium"
    }, {
        key: "2",
        label: "Hard"
    },
    {
        key: "3",
        label: "EXTRA HARD"
    }
];


function CreateForm() {
    const [isVerified, setIsVerified] = useState(false);

    const placeholderArray = [
        "Javascript",
        "English",
        "Math for 1st elementary classes",
    ];
    const [difficulty, setDifficulty] = useState(difficultyOptions[0].key);
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

        const { object } = await generate({
            topic: inputValue,
            difficulty: difficulty
        });


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

    const handleDifficultyChange = (event) => {
        setDifficulty(event.target.value);
    }




    return (
        <form className={styles.select} onSubmit={handleButtonClick}>
            <div className={styles.inputContainer}>
                <Input
                    placeholder={placeholder}
                    value={inputValue}
                    onChange={handleInputChange}
                    style={{ maxWidth: '400px' }}
                />

                <Select
                    options={difficultyOptions}
                    onChange={handleDifficultyChange}
                    value={difficulty}
                    style={{ maxWidth: '100px' }}
                />
            </div>


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