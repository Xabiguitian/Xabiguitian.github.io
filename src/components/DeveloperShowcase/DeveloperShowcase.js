import React from 'react';
import styles from './DeveloperShowcase.module.css';
import ProjectCard from '../ProjectCard/ProjectCard';
import { projects } from '../../data/projects';

const DeveloperShowcase = () => {
  return (
    <div className="container">
      {/* Hero Section */}
      <section id="hero" className={styles.hero}>
        <h1 className={styles.heroTitle}>
          Hola, soy Xabier Guitián.
          <br />
          Convierto <span className={styles.highlight}>ideas</span> en código y <span className={styles.highlight}>luz</span> en historias.
        </h1>
        <p className={styles.heroSubtitle}>Estudiante Ingeniería Informática & Fotógrafo Aficionado</p>
        <a href="#projects" className={styles.ctaButton}>Ver mis proyectos</a>
      </section>

      {/* Projects Section */}
      <section id="projects" className={styles.section}>
        <h2 className={styles.sectionTitle}>Proyectos</h2>
        <div className={styles.projectGrid}>
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={styles.section}>
        <h2 className={styles.sectionTitle}>Sobre Mí</h2>
        <p className={styles.aboutText}>
          Soy un desarrollador apasionado por crear soluciones digitales eficientes y elegantes. Con una sólida base en JavaScript y experiencia en el ecosistema de React, disfruto construyendo interfaces de usuario interactivas y APIs robustas. Mi objetivo es escribir código limpio, escalable y bien documentado, siempre buscando aprender y aplicar nuevas tecnologías para resolver problemas complejos.
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" className={styles.section}>
        <h2 className={styles.sectionTitle}>Contacto</h2>
        <p className={styles.contactText}>¿Tienes una idea o un proyecto en mente? Hablemos.</p>
        <form className={styles.contactForm}>
          <input type="text" placeholder="Nombre" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Tu mensaje" rows="5" required></textarea>
          <button type="submit" className={styles.submitButton}>Enviar Mensaje</button>
        </form>
        {/* Aquí irían los iconos de redes sociales */}
      </section>
    </div>
  );
};

export default DeveloperShowcase;