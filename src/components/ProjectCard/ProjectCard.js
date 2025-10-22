import React from 'react';
import styles from './ProjectCard.module.css';

const ProjectCard = ({ project }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={project.imageUrl} alt={project.title} className={styles.image} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>
        <div className={styles.tags}>
          {project.technologies.map(tech => (
            <span key={tech} className={styles.tag}>{tech}</span>
          ))}
        </div>
        <div className={styles.links}>
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">Demo</a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;