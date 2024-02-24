import React from "react";

import styles from "./PoR.module.css";
import { getImageUrl } from "../../utils";

export const PoR =    () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>POSITION OF RESPONSIBILITY </h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("PoR/responsibility.jpg")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
             
              <p>
              Active Core Member of Web Club in College
              </p>
              <p>
                2022-Present  |Anurag University 
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>    
              <p>
              Mentored first-year students on how to start coding and taught them basic problem-solving.
              </p>
            </div>
            
          </li>

          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>       
              <p> 
               Volunteered in Networking events and coding competitions.
              </p>
            </div>
            
          </li>
          
        </ul>
      </div>
    </section>
  );
};
