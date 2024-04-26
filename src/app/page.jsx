import React from "react";
import CategoryItem from '/components/category-item';
import { GiSpellBook } from "react-icons/gi";
import SectionItem from "/components/section-item";

import styles from "./styles.module.css"
export default function Home() {

  return (
    <div>
      <div className={styles.selection}>
        <GiSpellBook />
        <p>Select a Spellbook !</p>
      </div>
      <div className={styles.category}>
        <CategoryItem>
          English
        </CategoryItem>
        <CategoryItem>
          Turkish
        </CategoryItem>
        <CategoryItem>
          German
        </CategoryItem>
      </div>
      <div>
        <SectionItem imgsrc="/quizcraft-logo.png" title="QUIZCRAFT" subtitle="quizcraftnedir" />
        <SectionItem imgsrc="/background.jpg" title="QUIZCRAFT" subtitle="quizcraftnedir" />
      </div>

    </div>
  );
}
