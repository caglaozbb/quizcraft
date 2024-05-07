import React from 'react'
import styles from './styles.module.css'
import Button from '../button';
import Input from '../input';
import Link from 'next/link';


function CreateForm() {
    return (
        <div className={styles.select}>
            <Input></Input>
            <Link href="/quiz/questiondeneme" >
                <Button variant="primary">Create Quiz</Button>
            </Link>

        </div>
    )
}

export default CreateForm;