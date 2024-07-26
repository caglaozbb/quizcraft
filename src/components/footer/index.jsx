import React from 'react'
import styles from './styles.module.css'
import Link from 'next/link';
import { FaGithub, FaTwitter } from "react-icons/fa";


function Footer() {
    return (
        <footer className={`${styles.footer} container`}>
            <div>
                <p>
                    quizcraft.quest
                </p>
            </div>
            <div>
                <ul className={styles.socialList}>
                    <li>
                        <a href='https://github.com/caglaozbb'>
                            <FaGithub size="20px" />
                        </a>
                    </li>
                    <li>
                        <a href='https://twitter.com/quizcraftapp'>
                            <FaTwitter size="20px" />
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;