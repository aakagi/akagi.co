import React from "react";

import styles from "./Home.module.css";

const Red = ({ children }) => <span className={styles.red}>{children}</span>;

const RedAnchor = ({ children }) => (
  <a className={styles.redAnchor}>{children}</a>
);

export default function Home(props) {
  return (
    <main className={styles.main}>
      <img className={styles.profilePhoto} src="/profile.jpg" />

      <div>
        <p>
          Hi I<Red>’</Red>m Alex<Red>!</Red>
        </p>
        <p>
          I<Red>’</Red>m an Engineer <Red>/</Red> Entrepreneur primarily based
          out of{" "}
          <RedAnchor
            href={"https://en.wikipedia.org/wiki/San_Francisco"}
            target={"_blank"}
          >
            San Francisco
          </RedAnchor>
          <Red>,</Red> but I live out of a{" "}
          <RedAnchor
            href={
              "https://medium.com/@akagi/living-lavish-out-of-a-backpack-61a80401d6a4"
            }
            target={"_blank"}
          >
            backpack
          </RedAnchor>{" "}
          so that I can go <Red>~</Red> anywhere <Red>~</Red>
          <Red>.</Red>
        </p>
        <p>
          You can reach me at{" "}
          <RedAnchor href="mailto:alex@akagi.co">alex@akagi.co</RedAnchor>
          <Red>.</Red>
        </p>
        <p>
          Let<Red>’</Red>s keep in touch<Red>!</Red>
        </p>
      </div>
    </main>
  );
}
