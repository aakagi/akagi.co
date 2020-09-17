import React from "react";

import ProfilePhoto from "components/ProfilePhoto";
import Bio from "components/Bio";

import styles from "./Home.module.css";

export default function Home(props) {
  return (
    <main className={styles.main}>
      <ProfilePhoto className={styles.profilePhoto} />

      <Bio className={styles.intro} />

      <div className={styles.divider} />

      <img className={styles.akagiLogo} src="/akagi-logo.png" />
    </main>
  );
}
