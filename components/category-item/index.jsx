import React from 'react'
import styles from './styles.module.css'


function CategoryItem({ children }) {
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}

export default CategoryItem;