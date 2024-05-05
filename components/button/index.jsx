import React from 'react'
import styles from './styles.module.css'



function Button({ variant, children }) {
    return (
        <button className={styles[variant]} > {children}</button >
    )
}

export default Button;