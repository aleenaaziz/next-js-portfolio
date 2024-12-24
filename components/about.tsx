
import Image from 'next/image';
import React from 'react';
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { lusitana } from "@/components/fonts";
import styles from './Navbar.module.css';

const About = () => {
  return (
    <section className={styles.aboutSection} id="about">
      <h1 className={`${lusitana.className} ${styles.heading}`}>
        About <span className={styles.headingAccent}>Me</span>
      </h1>

      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <Image src="/ms1.jpg" width={300} height={300} alt="Alina" className={styles.image} />
        </div>

        <div className={`${styles.textWrapper} ${styles.textWrapperMd}`}>
          <div className={styles.quoteLeft}>
            <FaQuoteLeft size={24} />
          </div>

          <p className={`${lusitana.className} ${styles.paragraph}`}>
            As a skilled and dedicated Frontend Developer, 
            I bring a strong blend of creativity, technical 
            expertise, and a deep understanding of 
            modern web design principles. 
            With hands-on experience in building responsive 
            and user-centric applications, I am proficient in 
            HTML, CSS, and JavaScript, along with a deep 
            focus on frameworks like React and Next.js.
          </p>

          <div className={styles.quoteRight}>
            <FaQuoteRight size={24} />
          </div>
        </div>
      </div>

      <div className="px-6 md:px-20 lg:px-40 mt-8">
        <h2 className={`${lusitana.className} ${styles.educationHeading}`}>
          Education :
        </h2>
        <div className={styles.line}></div>

        <ul className={styles.educationList}>
          <li className={styles.educationItem}>
            <p className="text-md md:text-lg">Mar 2020 - June 2022</p>
            <h3 className={styles.educationItemHeading}>Intermediate, Pre - Engineering</h3>
            <p className="text-sm md:text-base">Government girls Degree College, karchi</p>
          </li>

          <li className={styles.educationItem}>
            <p className="text-md md:text-lg">Sep 2019 - Dec 2023</p>
            <h3 className={styles.educationItemHeading}>BS Information Technology</h3>
            <p className="text-sm md:text-base">University Of karachi</p>
          </li>

          <li className={styles.educationItem}>
            <p className="text-md md:text-lg">dec 2022 - dec 2023</p>
            <h3 className={styles.educationItemHeading}>Web Development</h3>
            <p className="text-sm md:text-base">Saylani Mass IT Training</p>
          </li>

          <li className={styles.educationItem}>
            <p className="text-md md:text-lg">Feb 2024 - Present</p>
            <h3 className={styles.educationItemHeading}>Web 3, AI, & Metaverse</h3>
            <p className="text-sm md:text-base">Governor Sindh Kamran Tessori Initiative for Artificial Intelligence & Computing</p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default About;
