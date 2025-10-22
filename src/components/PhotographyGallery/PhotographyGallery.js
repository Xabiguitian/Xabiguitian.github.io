// /src/components/PhotographyGallery/PhotographyGallery.js

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './PhotographyGallery.module.css';
import { photos, photoCategories } from '../../data/photos';
import Lightbox from '../Lightbox/Lightbox';

const PhotographyGallery = () => {
  const [activeFilter, setActiveFilter] = useState('Todo');
  const [filteredPhotos, setFilteredPhotos] = useState(photos);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (activeFilter === 'Todo') {
      setFilteredPhotos(photos);
    } else {
      setFilteredPhotos(photos.filter(photo => photo.category === activeFilter));
    }
  }, [activeFilter]);

  const openLightbox = (photo) => {
    setSelectedImage(photo);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const showNext = () => {
    const currentIndex = filteredPhotos.findIndex(p => p.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % filteredPhotos.length;
    setSelectedImage(filteredPhotos[nextIndex]);
  };

  const showPrev = () => {
    const currentIndex = filteredPhotos.findIndex(p => p.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
    setSelectedImage(filteredPhotos[prevIndex]);
  };

  return (
    <div className={`${styles.galleryContainer} container`}>
      <h2 className={styles.title}>Galería Fotográfica</h2>
      <div className={styles.filters}>
        {photoCategories.map(category => (
          <button
            key={category}
            className={`${styles.filterButton} ${activeFilter === category? styles.active : ''}`}
            onClick={() => setActiveFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <motion.div layout className={styles.photoGrid}>
        <AnimatePresence>
          {filteredPhotos.map(photo => (
            <motion.div
              layout
              key={photo.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className={styles.photoItem}
              onClick={() => openLightbox(photo)}
            >
              <img src={photo.src} alt={photo.title} />
              <div className={styles.overlay}>
                <p>{photo.title}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {selectedImage && (
          <Lightbox 
            image={selectedImage} 
            onClose={closeLightbox}
            onNext={showNext}
            onPrev={showPrev}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default PhotographyGallery;