import React, { useState } from "react";

import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        My Portfolio 
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#about">Education</a>
          </li>
          <li>
            <a href="#experience">Technical Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
         <li>
          <a href="https://drive.google.com/file/d/1a2Jea2pcpt08uPXDcWDlNnha9NrbGEpu/view?usp=sharing" target="_blank">Download Resume</a>
         </li>
          <li>
            <a href="#contact">Contact Me</a>
          </li>
         

      
        </ul>
      </div>
    </nav>
  );
};
