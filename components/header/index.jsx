import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

import styles from './styles.module.css';


function Header() {
    return (
        <header className={`${styles.header} container fluid`}>
            <div className={styles.headerWrapper}>
                <Link href="//" className={styles.logo}>
                    <Image
                        src='/icon.png'
                        alt="QuizCraft"
                        width={80}
                        height={80}
                        className={styles.logo}
                    />QUIZCRAFT</Link>

                <nav className={styles.navigationMenu}>
                    <Link href="//">Home</Link>
                    <Link href="/cheatsheet">Cheat Sheet</Link>
                    <Link href="/about">About</Link>
                </nav>
            </div>
        </header >
    )
}





export default Header;