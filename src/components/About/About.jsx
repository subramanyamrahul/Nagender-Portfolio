import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>EDUCATION</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.jpg")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img   className={styles.anurag} src={getImageUrl("about/anurag.png")} alt="Cursor icon"  />
            <div className={styles.aboutItemText}>
              <h3>ANURAG UNIVERSITY </h3>
              <p>
               Bachelor of Technology in CSE-Data Scinece 
              </p>
              <p>
                2020-2024 | CGPA:8.37  
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img className={styles.narayana}  src={getImageUrl("about/Narayana.png") } alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>NARAYANA Jr COLLEGE </h3>
              <p>
               HIGH SCHOOL (INTERMEDIATE )
              </p>
              <p>
               2018-2020| Percentage: 84.4
              </p>
              
            

            </div>
          </li>
          
        </ul>
      </div>
    </section>
  );
};
