// Navbar.tsx
"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { lusitana } from "@/components/fonts";
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isMenuOpen, setisMenuOpen] = useState(false);

  const toggleMenu = (): void => {
    setisMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className={styles.navbarHeader}>
        <nav className={styles.navbar}>
          {/* Logo Section */}
          <div className={styles.logo}>
            <h1 className={lusitana.className}>Alina.</h1>
          </div>

          {/* Desktop Menu */}
          <ul className={`${styles.desktopMenu}`}>
            <li className={`${lusitana.className} ${styles.menuItem} ${styles.menuItemActive}`}><Link href="#home">Home</Link></li>
            <li className={`${lusitana.className} ${styles.menuItem}`}><Link href="#about">About</Link></li>
            <li className={`${lusitana.className} ${styles.menuItem}`}><Link href="#skill">Skills</Link></li>
            <li className={`${lusitana.className} ${styles.menuItem}`}><Link href="#project">Projects</Link></li>
            <li className={`${lusitana.className} ${styles.menuItem}`}><Link href="#contact">Contact</Link></li>
          </ul>

          {/* Mobile Menu Icon */}
          <div className={styles.menuIcon} onClick={toggleMenu}>
            {isMenuOpen ? (
              <IoCloseSharp size={30} />
            ) : (
              <GiHamburgerMenu size={30} />
            )}
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <ul className={styles.mobileMenu}>
            <li className={`${lusitana.className} ${styles.menuItem}`}><Link href="#home" onClick={toggleMenu}>Home</Link></li>
            <li className={`${lusitana.className} ${styles.menuItem}`}><Link href="#about" onClick={toggleMenu}>About</Link></li>
            <li className={`${lusitana.className} ${styles.menuItem}`}><Link href="#skill" onClick={toggleMenu}>Skills</Link></li>
            <li className={`${lusitana.className} ${styles.menuItem}`}><Link href="#project" onClick={toggleMenu}>Projects</Link></li>
            <li className={`${lusitana.className} ${styles.menuItem}`}><Link href="#contact" onClick={toggleMenu}>Contact</Link></li>
          </ul>
        )}
      </header>
    </>
  );
};

export default Navbar;
