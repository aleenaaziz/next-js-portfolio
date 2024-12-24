// Hero.tsx
"use client";
import Image from "next/image";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { MdWavingHand } from "react-icons/md";
import { lusitana } from "@/components/fonts";
import Link from "next/link";
import styles from './Navbar.module.css';

const Hero = () => {
  return (
    <section className={styles.heroSection} id="home">
      <div className={`${styles.heroContainer} ${lusitana.className}`}>
        {/* Text Section */}
        <div className={`${styles.textSection} ${styles.textSectionMd}`}>
          <div className={`${styles.greeting} ${styles.greetingMd}`}>
            <MdWavingHand size={25} />
            <h1 className="text-2xl font-bold">Hello, I&apos;m</h1>
          </div>

          <h1 className={`${styles.name} ${styles.nameMd}`}>
            Alina Aziz
          </h1>
          <h2 className={`${styles.role}`}>
            <span className={styles.roleText}>FrontEnd Developer</span>
          </h2>

          <p className={`${styles.description} ${styles.descriptionMd}`}>
            Frontend Developer skilled in HTML, CSS, and JavaScript, creating
            clean, <br /> responsive, and visually appealing interfaces with React and
            Next.js for a seamless user experience.
          </p>

          <div className={`${styles.buttonContainer} ${styles.buttonContainerMd}`}>
            <Link href={"https://github.com/aleenaaziz"} target="_blank">
              <button className={`${styles.button}`} type="button">
                Github Account
                <FaGithub size={25} />
              </button>
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className={`${styles.imageContainer} ${styles.imageContainerMd}`}>
          <Image
            src="/ms.webp"
            width={400}
            height={300}
            alt="suleman"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
