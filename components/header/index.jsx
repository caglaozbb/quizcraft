import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

import styles from './styles.module.css';

import logo from '../../media/quizcraft-logo.png'

function Header() {
    return (
        <header className={`${styles.header} container fluid`}>
            <div className={styles.headerWrapper}>
                <Image src={logo} alt="quizcraft" className={styles.logo} />
                <nav className={styles.navigationMenu}>
                    <Link href="//">Home</Link>
                    <Link href="//">Cheat Sheet</Link>
                    <Link href="//">About</Link>
                </nav>
            </div>
        </header>
    )
}





export default Header;