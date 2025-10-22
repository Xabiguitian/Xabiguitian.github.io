import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import styles from './App.module.css';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import DeveloperShowcase from './components/DeveloperShowcase/DeveloperShowcase';
import PhotographyGallery from './components/PhotographyGallery/PhotographyGallery';

function App() {
  const [view, setView] = useState('developer'); // 'developer' o 'photography'

  const pageVariants = {
    initial: { opacity: 0, y: 30 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -30 },
  };

  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.6,
  };

  return (
    <div className={`${styles.app} ${view === 'photography'? 'photoMode' : ''}`}>
      <Navbar currentView={view} onViewChange={setView} />
      <main className={styles.mainContent}>
        <AnimatePresence mode="wait">
          {view === 'developer'? (
            <motion.div
              key="developer"
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <DeveloperShowcase />
            </motion.div>
          ) : (
            <motion.div
              key="photography"
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <PhotographyGallery />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

export default App;