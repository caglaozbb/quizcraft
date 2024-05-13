'use client'
import React from 'react'
import styles from './styles.module.css'
import Button from '../button';
import Input from '../input';
import Link from 'next/link';
import { useState } from 'react';


function CreateForm() {

    const [name, setName] = useState('Taylor');


    return (
        <div className={styles.select}>
            <Input onChange={(e) => {
                setName(e.target.value)
            }} placeholder="ww 2" />
            {name}
            <Link href="/quiz/questiondeneme" >
                <Button variant="primary">Create Quiz</Button>
            </Link>

        </div>
    )
}

export default CreateForm;