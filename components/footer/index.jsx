import React from 'react'
import styles from './styles.module.css'
import Link from 'next/link';


function Footer() {
    return (
        <footer className={styles.footer}>
            Made with ♥️ by &nbsp;<Link href="https://github.com/caglaozbb" target="_blank">Cagla Ozbaba</Link>
        </footer>
    )
}

export default Footer;