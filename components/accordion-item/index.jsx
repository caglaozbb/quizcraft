'use client'
import React from "react";
import { useState } from "react";
import styles from './styles.module.css'

import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";


function AccordionItem({ title, content }) {

    const [open, setOpen] = useState(false);
    const toggle = () => setOpen(!open);

    return (
        <div className={`${styles.accordionWrapper} container`}>
            <div className={styles.accordionItem}
                onClick={toggle}
            >
                <div className={styles.accordionTitle}>{title}             {open ? <IoIosArrowUp /> : <IoIosArrowDown />}

                </div>
                <div className={`${styles.accordionContent} ${open ? styles.show : styles.hide}`}>
                    {content}
                </div>
            </div>
        </div>
    );

}
export default AccordionItem;