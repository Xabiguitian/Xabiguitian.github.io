import React from 'react';
import { motion } from 'framer-motion';
import styles from './Lightbox.module.css';

const Lightbox = ({ image, onClose, onNext, onPrev }) => {
  return (
    <motion.div
      className={styles.backdrop}
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className={styles.content}
        onClick={(e) => e.stopPropagation()} // Evita que el clic en la imagen cierre el lightbox
        initial={{ scale: 0.8, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.8, y: 50 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        <img src={image.src} alt={image.title} className={styles.image} />
        <p className={styles.title}>{image.title}</p>
      </motion.div>
      <button className={`${styles.navButton} ${styles.prev}`} onClick={onPrev}>&#10094;</button>
      <button className={`${styles.navButton} ${styles.next}`} onClick={onNext}>&#10095;</button>
      <button className={styles.closeButton} onClick={onClose}>&times;</button>
    </motion.div>
  );
};

export default Lightbox;