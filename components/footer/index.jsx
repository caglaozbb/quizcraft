import React from 'react'
import styles from './styles.module.css'
import Link from 'next/link';
import { FaGithub, FaTwitter } from "react-icons/fa";


function Footer() {
    return (
        <footer className={styles.footer}>
            <div>
                <p>
                    quizcraft
                </p>
            </div>
            <div>
                <ul className={styles.socialList}>
                    <li>
                        <a href='github.com'>
                            <FaGithub />
                        </a>
                    </li>
                    <li>
                        <a href='github.com'>
                            <FaTwitter />
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;