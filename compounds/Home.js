import React from "react";

import ProfilePhoto from 'components/ProfilePhoto';

import styles from "./Home.module.css";

const Red = ({ children }) => <span className={styles.red}>{children}</span>;

const RedAnchor = (props) => <a className={styles.redAnchor} {...props} />;

export default function Home(props) {
  return (
    <main className={styles.main}>
      <ProfilePhoto className={styles.profilePhoto} />

      <div className={styles.intro}>
        <p>
          Hi<Red>,</Red> I<Red>’</Red>m Alex<Red>!</Red>
        </p>
        <p>
          I<Red>’</Red>m an Engineer <Red>/</Red> Entrepreneur primarily based
          out of{" "}
          <RedAnchor
            href={
              "https://www.google.com/maps/place/San+Francisco,+CA/data=!4m2!3m1!1s0x80859a6d00690021:0x4a501367f076adff"
            }
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
          so that I can live from <Red>~</Red> anywhere <Red>~</Red>
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

      <img
        className={styles.akagiLogo}
        src="/akagi-logo.png"
      />

    </main>
  );
}
