import React from 'react'
import styles from "./styles.module.css"


function About({ children }) {
    return (
        <div>

            <div className={styles.magic}>
                <img src="/magic3.gif" alt="quizcraft magic" />
            </div>
            <p className={styles.aboutText}>
                QuizCraft transforms learning into a captivating adventure, powered by <span className={styles.highlightedText}>artificial intelligence</span>.
                You can also see your scores and compare them with others.  QuizCraft is made for people of all ages. It makes learning easier and more fun.
                Our platform has a lot of different topics you can learn about. With QuizCraft, you will enjoy learning
                in a fun and magical way.
            </p>

        </div>
    )
}

export default About;