import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

import styles from './styles.module.css';


function Header() {
    return (
        <header className={`${styles.header} fluid`}>
            <div className={`${styles.headerWrapper} container`}>
                <Link href="//" className={styles.logo}>
                    <Image
                        src='/witch-hat.png'
                        alt="QuizCraft"
                        width={40}
                        height={40}
                        className={styles.logo}
                    />Quizcraft</Link>

                <nav className={styles.navigationMenu}>
                    <Link href="//">Home</Link>
                    <Link href="/scoreboard">Scoreboard</Link>
                    <Link href="/about">About</Link>
                </nav>
            </div>
        </header >
    )
}





export default Header;