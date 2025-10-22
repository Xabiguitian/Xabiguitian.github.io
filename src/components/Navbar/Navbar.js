import React from 'react';
import styles from './Navbar.module.css';

const Navbar = ({ currentView, onViewChange }) => {
  
  const handleNavClick = (view, anchor = '') => {
    if (currentView!== view) {
      onViewChange(view);
      // Damos tiempo a que la vista cambie antes de intentar hacer scroll
      if (anchor) {
        setTimeout(() => {
          document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth' });
        }, 700); // Debe coincidir con la duración de la animación de App.js
      }
    } else if (anchor) {
      document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <a href="#hero" className={styles.logo} onClick={() => handleNavClick('developer', 'hero')}>
          Xabier Guitián
        </a>
        <ul className={styles.menu}>
          <li>
            <a href="#projects" onClick={() => handleNavClick('developer', 'projects')}>
              Proyectos
            </a>
          </li>
          <li>
            <a href="#about" onClick={() => handleNavClick('developer', 'about')}>
              Sobre Mí
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => handleNavClick('developer', 'contact')}>
              Contacto
            </a>
          </li>
          <li>
            <button 
              className={`${styles.hobbyButton} ${currentView === 'photography'? styles.active : ''}`}
              onClick={() => onViewChange(currentView === 'developer'? 'photography' : 'developer')}
            >
              Hobbies
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;