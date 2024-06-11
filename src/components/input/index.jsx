import React from 'react'
import styles from './styles.module.css'



function Input(props) {
    return (
        <input className={styles.input} type="text" placeholder="world war 2" {...props} />
    )
}

export default Input;