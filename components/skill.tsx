// Skill.tsx
import React from "react";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiFigma,
} from "react-icons/si";
import { RiReactjsFill } from "react-icons/ri";
import { lusitana } from "@/components/fonts";
import styles from './Navbar.module.css';

const Skill = () => {
  return (
    <section id="skill" className={styles.skillSection}>
      <h1 className={`${lusitana.className} ${styles.heading}`}>
        My <span className={styles.headingAccent}>Skills</span>
      </h1>

      <div className={styles.skillContainer}>
        {/* Skill Card for Next.js */}
        <div className={styles.skillCard}>
          <div className={styles.skillIcon}>
            <SiNextdotjs />
          </div>
          <h1 className={`${lusitana.className} ${styles.skillTitle}`}>Next Js</h1>
          <div className={styles.skillProgressBar}>
            <div className={styles.skillProgress}></div>
          </div>
        </div>

        {/* Skill Card for React.js */}
        <div className={styles.skillCard}>
          <div className={styles.skillIcon}>
            <RiReactjsFill />
          </div>
          <h1 className={`${lusitana.className} ${styles.skillTitle}`}>React Js</h1>
          <div className={styles.skillProgressBar}>
            <div className={styles.skillProgress}></div>
          </div>
        </div>

        {/* Skill Card for Tailwind CSS */}
        <div className={styles.skillCard}>
          <div className={styles.skillIcon}>
            <SiTailwindcss />
          </div>
          <h1 className={`${lusitana.className} ${styles.skillTitle}`}>Tailwind CSS</h1>
          <div className={styles.skillProgressBar}>
            <div className={styles.skillProgress}></div>
          </div>
        </div>
      </div>

      <div className={styles.skillContainer}>
        {/* Skill Card for TypeScript */}
        <div className={styles.skillCard}>
          <div className={styles.skillIcon}>
            <SiTypescript />
          </div>
          <h1 className={`${lusitana.className} ${styles.skillTitle}`}>TypeScript</h1>
          <div className={styles.skillProgressBar}>
            <div className={styles.skillProgress}></div>
          </div>
        </div>

        {/* Skill Card for JavaScript */}
        <div className={styles.skillCard}>
          <div className={styles.skillIcon}>
            <SiJavascript />
          </div>
          <h1 className={`${lusitana.className} ${styles.skillTitle}`}>JavaScript</h1>
          <div className={styles.skillProgressBar}>
            <div className={styles.skillProgress}></div>
          </div>
        </div>

        {/* Skill Card for Figma */}
        <div className={styles.skillCard}>
          <div className={styles.skillIcon}>
            <SiFigma />
          </div>
          <h1 className={`${lusitana.className} ${styles.skillTitle}`}>Figma</h1>
          <div className={styles.skillProgressBar}>
            <div className={styles.skillProgress}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
