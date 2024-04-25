import React from "react";
import CategoryItem from '/components/category-item';

import styles from "./styles.module.css"
export default function Home() {

  return (
    <div className={styles.category}> <CategoryItem>
      English
    </CategoryItem>
      <CategoryItem>
        Turkish
      </CategoryItem>
      <CategoryItem>
        German
      </CategoryItem></div>
  );
}
