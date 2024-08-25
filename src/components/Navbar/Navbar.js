import React, { useState } from 'react';
import styles from './Navbar.module.css';

const NAV_LINKS = [
  {
    id: 1,
    label: "Home",
    href: "home"
  },
  {
    id: 2,
    label: "About Me",
    href: "about"
  },
  {
    id: 3,
    label: "Education",
    href: "education"
  },
  {
    id: 4,
    label: "Skill",
    href: "skill"
  },
  {
    id: 5,
    label: "Projects",
    href: "project"
  },
  {
    id: 6,
    label: "Contact",
    href: "contact"
  }
]

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContent}>
        <h1 className={styles.navbarTitle}>Shrikant Jha</h1>
        <button className={styles.hamburger} onClick={toggleMenu}>
          <div className={styles.hamburgerLines}></div>
          <div className={styles.hamburgerLines}></div>
          <div className={styles.hamburgerLines}></div>
        </button>
        <ul className={`${styles.navbarMenu} ${isMenuOpen ? styles.navbarMenuOpen : ''}`}>
          {NAV_LINKS?.map(({ id, label, href }) => {
            return (
              <li key={id} className={styles.navbarMenuItem}>
                <a href={`#${href}`} className={styles.navbarMenuLink}>
                  {label}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </nav >
  );
};

export default Navbar;
