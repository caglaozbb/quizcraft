import React from 'react'
import styles from './styles.module.css'
import Button from '../button';
import Input from '../input';


function CreateForm() {
    return (
        <div className={styles.select}>
            <Input></Input>
            <Button variant="primary">Create Quiz</Button>
        </div>
    )
}

export default CreateForm;