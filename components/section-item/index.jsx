import React from 'react'
import styles from './styles.module.css'
import Image from 'next/image';


function SectionItem({ imgsrc, title, subtitle }) {
    return (
        <div className={styles.container}>
            <div>
                <Image src={imgsrc} alt="QuizCraft" width={400} height={400} className={styles.image} />
            </div>
            <div className={styles.info}>
                <h1>{title}</h1>
                <p>{subtitle}</p>
            </div>
        </div>
    )
}

export default SectionItem;