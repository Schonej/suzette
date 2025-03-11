// components/Navbar.js
"use client"; // Required for client-side interactivity in App Router
import { useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
          <Image src="/suzette/p3logo-svg.svg" alt="Logo" width={150} height={150} />
        </Link>
      </div>
      <div className={styles.hamburger} onClick={toggleMenu}>
        <span className={isOpen ? styles.open : ""}></span>
        <span className={isOpen ? styles.open : ""}></span>
        <span className={isOpen ? styles.open : ""}></span>
      </div>
      <ul className={`${styles.navLinks} ${isOpen ? styles.active : ""}`}>
        <li>
          <Link href="/features">Board Members</Link>
        </li>
        <li>
          <Link href="/features">Join</Link>
        </li>
        <li>
          <Link href="/pricing">Events</Link>
        </li>
        <li>
          <Link href="/about">News</Link>
        </li>
        <li>
          <Link href="/about">Contact</Link>
        </li>
        <li>
          <button className={styles.cta}>
            <Link href="/signup">Login</Link>
          </button>
        </li>
      </ul>
    </nav>
  );
}
