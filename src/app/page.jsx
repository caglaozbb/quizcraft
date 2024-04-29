import React from "react";
import Image from "next/image";

import SectionItem from "/components/section-item";

import styles from "./styles.module.css"
export default function Home() {

  return (
    <div>

      <div className={styles.container}>
        <div className={styles.info}>
          <Image src="/book.png" alt="QuizCraft" width={300} height={300} />
          <h1>Create Your Quiz</h1>
          <p>Enter the topic you're curious about in the box below, click the 'Create Quiz' button, and start solving immediately!</p>
        </div>

        <div className={styles.select}>
          <input className={styles.input} type="text" placeholder="world war 2" />
          <button className={styles.button} onClick=''>Create Quiz</button>
        </div>
      </div>

      <div className={`${styles.sectionList} container`}>
        <SectionItem imgsrc="/boiler.png" title="Create Quiz" subtitle="Choose your field and level, and let our AI craft a customized quiz and answer key for you. Test your knowledge with these magical quizzes and check your results immediately." />
        <SectionItem imgsrc="/spellbook.png" title="Create Cheat Sheet" subtitle="Choose your field and level, and let our AI craft a customized cheat sheet for you. Download your cheat sheet in PDF format and accelerate your learning process." />
      </div>

    </div>
  );
}
