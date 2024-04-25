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
                        src='/quizcraft-logo.png'
                        alt="QuizCraft"
                        width={60}
                        height={60}
                        className={styles.logo}
                    />QUIZCRAFT</Link>

                <nav className={styles.navigationMenu}>
                    <Link href="//">Home</Link>
                    <Link href="//">Cheat Sheet</Link>
                    <Link href="//">About</Link>
                </nav>
            </div>
        </header >
    )
}





export default Header;