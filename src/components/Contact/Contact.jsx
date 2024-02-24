import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a className={styles.linkText} href="mailto:20eg110107@anurag.edu.in">20eg110107@anurag.edu.in</a>
        </li>
        <li className={styles.link}>  
          <img className={styles.LinkedinImg}
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a className={styles.linkText} href="https://www.linkedin.com/in/gopu-nagender-reddy-a4031122b/">linkedin.com/nagenderGopu</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a  href="https://github.com/go-naag">github.com/go-naag</a>
        </li>
      </ul>
    </footer>
  );
};
