
'use client'

import React from "react";
import Image from "next/image";

import SectionItem from "@/components/section-item";
import CreateForm from "@/components/create-form";
import AccordionItem from "@/components/accordion-item";

import styles from "./styles.module.css"


export const dynamic = 'force-dynamic'

export default function Home() {
  return (
    <div>

      <div className={styles.container}>
        <div className={styles.infoWrapper}>
          <div className={styles.info}>
            {/* <Image src="/witch-hat.png" alt="QuizCraft" width={100} height={200} className={styles.infoImage} /> */}
            <h1>Create Your Quiz</h1>
            <p>Enter the topic you&apos;re curious about in the box below, click the &apos;Create Quiz&apos; button, and start solving immediately!</p>
          </div>

          <div>
            <CreateForm />
          </div>
        </div>
      </div>

      <div className={`${styles.sectionList} container`}>
        <SectionItem imgsrc="/crystall-ball.png" title="Quiz Creation" subtitle="Enter a keyword to generate a custom 10-question quiz. Our AI will craft questions for you, and you can solve them immediately to test your knowledge. Enjoy a magical learning experience!" />
        <SectionItem imgsrc="/third-eye.png" title="Discover & Learn" subtitle="Explore a wide range of topics and enhance your knowledge with our AI-generated quizzes. Each quiz is designed to challenge your understanding and help you learn in a fun, engaging way. Compare your scores with others and track your progress over time." />
      </div>

      <div className={styles.faqWrapper}>
        <h1 className={styles.faqTitle}>FAQ</h1>
        <AccordionItem title='What is QuizCraft?' content='QuizCraft is an innovative platform that uses artificial intelligence to generate personalized quizzes based on your chosen topics. It transforms learning into a fun and engaging experience.'></AccordionItem>
        <AccordionItem title='How can I create a quiz in QuizCraft?' content='Creating a quiz in QuizCraft is simple. Just enter your desired topic keywords, and our AI will generate a customized quiz for you. Answer the questions and discover how fun learning can be with QuizCraft!'></AccordionItem>
        <AccordionItem title='How does scoring work in QuizCraft?' content='In QuizCraft, each correct answer increases the users score, which is displayed on their profile. The highest scores are listed on the leaderboard.'></AccordionItem>    </div>
    </div>
  );
}
