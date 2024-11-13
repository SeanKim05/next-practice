import React from "react";
import styles from "@/styles/Setting.module.css";

export default function settings() {
  return (
    <div>
      <h1 className={styles.title}>설정</h1>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>테마 설정</h2>
      </section>
    </div>
  );
}
