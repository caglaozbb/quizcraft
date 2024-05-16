'use client'
import React from 'react'
import styles from './styles.module.css'
import Button from '../button';
import Input from '../input';
import Link from 'next/link';
import { readStreamableValue } from 'ai/rsc';
import { generate } from "./actions"

function CreateForm() {

    return (
        <div className={styles.select}>
            <Input
                placeholder="world war 2"
            />
            <Button variant="primary" onClick={async () => {
                const { object } = await generate('araba');

                for await (const partialObject of readStreamableValue(object)) {
                    if (partialObject) {
                        console.log(partialObject);
                    }
                }
            }}>Create Quiz</Button>

        </div>
    )
}

export default CreateForm; 