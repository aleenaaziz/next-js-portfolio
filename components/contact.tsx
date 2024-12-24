// Contact.tsx
import React from "react";
import { MdEmail } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { IoCallSharp } from "react-icons/io5";
import { FaInstagram, FaLinkedinIn, FaFacebook } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Link from "next/link";
import { lusitana } from "@/components/fonts";
import styles from './Navbar.module.css';

const Contact = () => {
  return (
    <section id="contact" className={styles.contactSection}>
      <h1 className={`${lusitana.className} ${styles.contactHeading}`}>
        Contact <span className={styles.contactHeadingAccent}>Me</span>
      </h1>

      <div className={styles.contactContainer}>
        {/* Email */}
        <div className={styles.contactItem}>
          <div className={styles.iconContainer}>
            <MdEmail size={38} />
          </div>
          <IoIosArrowForward size={30} className={styles.arrowIcon} />
          <h2 className={styles.contactInfo}>alinaaziz831@gmail.com</h2>
        </div>

        {/* Phone */}
        <div className={styles.contactItem}>
          <div className={styles.iconContainer}>
            <IoCallSharp size={38} />
          </div>
          <IoIosArrowForward size={30} className={styles.arrowIcon} />
          <h2 className={styles.contactInfo}>0316 - 2606110</h2>
        </div>

        {/* Location */}
        <div className={styles.contactItem}>
          <div className={styles.iconContainer}>
            <FaLocationDot size={38} />
          </div>
          <IoIosArrowForward size={30} className={styles.arrowIcon} />
          <h2 className={styles.contactInfo}>5 E New Karachi</h2>
        </div>

        <hr className={styles.separator} />

        {/* Social Links */}
        <div className={styles.socialLinks}>
          <Link href={"https://www.facebook.com/profile.php?id=61567886520643"} target="_blank">
            <div className={styles.socialLink}>
              <FaFacebook size={30} />
            </div>
          </Link>

          <Link href={"https://www.instagram.com/alinaaziz831/?next=https%3A%2F%2Fwww.instagram.com%2Fdirect%2Finbox%2F%3Fnext%3D%252Faccounts%252Fsignupviafb%252F%26__coig_login%3D1"} target="_blank">
            <div className={styles.socialLink}>
              <FaInstagram size={30} />
            </div>
          </Link>

          <Link href={"https://www.linkedin.com/in/alina-aziz-495878296/"} target="_blank">
            <div className={styles.socialLink}>
              <FaLinkedinIn size={30} />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;
