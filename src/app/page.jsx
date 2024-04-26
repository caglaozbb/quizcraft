import React from "react";
import CategoryItem from '/components/category-item';
import { GiSpellBook } from "react-icons/gi";
import SectionItem from "/components/section-item";

import styles from "./styles.module.css"
export default function Home() {

  return (
    <div>
      <div className={styles.container}>
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
      </div>
      <div className={styles.container}>
        <SectionItem imgsrc="/boiler.png" title="Quizini Yarat" subtitle="Seçtiğin alan ve seviyeyi belirle, yapay zekamız senin için özelleştirilmiş bir quiz ve cevap anahtarı hazırlasın. Bu sihirli quizlerle bilginizi test edin ve sonuçlarınızı hemen kontrol edin!" />
        <SectionItem imgsrc="/spellbook.png" title="Cheat Sheet'ini Hazırla" subtitle="Alanını ve seviyeni belirle, yapay zekamız senin için özelleştirilmiş bir cheat sheet oluştursun. Hazırlanan cheat sheet'ini PDF olarak indir ve öğrenme sürecini hızlandır!" />
      </div>

    </div>
  );
}
