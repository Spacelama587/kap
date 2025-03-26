
"use client";

import React, { useState, useEffect } from 'react';
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import styles from './Navbar.module.css';

const Navbar = () => {
  const [time, setTime] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const isHomePage = pathname === "/";

  // Time update effect
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });
      setTime(timeString);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Navigation handler
  const handleNavigation = (event, sectionId) => {
    event.preventDefault();
    setIsMobileMenuOpen(false);

    if (isHomePage) {
      const lenis = window.lenis;
      if (lenis) {
        const element = document.getElementById(sectionId);
        if (element) {
          lenis.scrollTo(element, {
            offset: 0,
            immediate: false,
            duration: 1.5,
          });
        }
      }
    } else {
      router.push(`/#${sectionId}`);
    }
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        {/* Logo and Time */}
        <div className={styles.logoTimeContainer}>
          <Link href="/" className={styles.logo}>
            KAPITAL
          </Link>
          <div className={styles.time}>{time}</div>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className={styles.mobileMenuToggle} 
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>

        {/* Navigation Links */}
        <div className={`${styles.navLinks} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
          <a 
            href="#intro" 
            onClick={(e) => handleNavigation(e, "intro")}
            className={styles.navLink}
          >
            The Origins
          </a>
          <a 
            href="#case-studies" 
            onClick={(e) => handleNavigation(e, "case-studies")}
            className={styles.navLink}
          >
            philosophy
          </a>
          <a 
            href="#works" 
            onClick={(e) => handleNavigation(e, "works")}
            className={styles.navLink}
          >
            team
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;