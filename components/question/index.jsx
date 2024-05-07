import React from "react";
import styles from "./styles.module.css"


function Question() {

    return (
        <div className={styles.questionWrapper}>
            <h2>question</h2>
            <div key="deneme" className={styles.answerWrapper}>
                <label className={styles.option}>
                    <input
                        type="hidden"
                        name="option"
                        value="deneme"
                    />
                    option
                </label>
                <label className={styles.option}>
                    <input
                        type="hidden"
                        name="option"
                        value="deneme"
                    />
                    option
                </label>

            </div>
        </div>
    )


}

export default Question;