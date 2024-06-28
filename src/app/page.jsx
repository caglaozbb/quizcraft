
'use client'

import React from "react";
import Image from "next/image";

import SectionItem from "@/components/section-item";
import CreateForm from "@/components/create-form";
import AccordionItem from "@/components/accordion-item";

import styles from "./styles.module.css"
export default function Home() {
  return (
    <div>

      <div className={styles.container}>
        <div className={styles.infoWrapper}>
          <div className={styles.info}>
            <Image src="/booknew.png" alt="QuizCraft" width={300} height={250} className={styles.infoImage} />
            <h1>Create Your Quiz</h1>
            <p>Enter the topic you&apos;re curious about in the box below, click the &apos;Create Quiz&apos; button, and start solving immediately!</p>
          </div>

          <div>
            <CreateForm />
          </div>
        </div>
      </div>

      <div className={`${styles.sectionList} container`}>
        <SectionItem imgsrc="/boilerNew.png" title="Create Quiz" subtitle="Choose your field and level, and let our AI craft a customized quiz and answer key for you. Test your knowledge with these magical quizzes and check your results immediately." />
        <SectionItem imgsrc="/spellbookNew.png" title="Create Cheat Sheet" subtitle="Choose your field and level, and let our AI craft a customized cheat sheet for you. Download your cheat sheet in PDF format and accelerate your learning process." />
      </div>

      <div className={styles.faqWrapper}>
        <h1 className={styles.faqTitle}>FAQ</h1>
        <AccordionItem title='What is QuizCraft?' content='QuizCraft is a platform that allows users to create magic-themed quizzes, turning their learning experience into a fun and interactive journey.'></AccordionItem>
        <AccordionItem title='How can I create a quiz in QuizCraft?' content='To create a quiz, go to the main page, enter the topic you want to create a quiz for, and click on the "Create Quiz" button.'></AccordionItem>
        <AccordionItem title='How does scoring work in QuizCraft?' content='In QuizCraft, each correct answer increases the users score, which is displayed on their profile. The highest scores are listed on the leaderboard.'></AccordionItem>    </div>
    </div>
  );
}
