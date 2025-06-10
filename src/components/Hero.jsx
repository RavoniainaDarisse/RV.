import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Hero = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="section" ref={ref}>
      <div className="container">
        <div className="section-content">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            style={{
              textAlign: 'center',
              maxWidth: '800px',
              margin: '0 auto'
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                backgroundColor: '#000',
                margin: '0 auto 2rem auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <span style={{
                color: '#fff',
                fontSize: '2.5rem',
                fontWeight: '700'
              }}>
                RN
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="heading-1"
              style={{ marginBottom: '1rem' }}
            >
              RAVONIAINA
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              style={{
                fontSize: '1.5rem',
                fontWeight: '300',
                color: '#666',
                marginBottom: '1rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase'
              }}
            >
              Nalimalala Heritiana Darisse
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              style={{
                fontSize: '2rem',
                fontWeight: '600',
                marginBottom: '2rem',
                letterSpacing: '-0.02em'
              }}
            >
              Développeur Web
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
              className="body-large"
              style={{ marginBottom: '3rem' }}
            >
              Passionné par la création d'applications front-end et back-end modernes, 
              toujours prêt à apprendre et à relever de nouveaux défis technologiques.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.2 }}
              style={{
                display: 'flex',
                gap: '1rem',
                justifyContent: 'center',
                flexWrap: 'wrap'
              }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn"
                onClick={scrollToContact}
              >
                Me contacter
              </motion.button>
              
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="btn btn-outline"
              >
                Voir mes projets
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;