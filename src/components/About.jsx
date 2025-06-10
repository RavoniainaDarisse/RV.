import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  return (
    <section id="about" className="section" ref={ref}>
      <div className="container">
        <div className="section-content">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">Profil</h2>
            
            <div className="grid-2">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="card"
              >
                <h3 className="heading-3">À propos de moi</h3>
                <p className="body-text" style={{ marginBottom: '1.5rem' }}>
                  Développeur Web passionné, expérimenté en création d'applications 
                  front-end et back-end, toujours prêt à apprendre et à relever de nouveaux défis.
                </p>
                <p className="body-text">
                   Je combine créativité 
                  et expertise technique pour développer des solutions web innovantes et performantes.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="card"
              >
                <h3 className="heading-3">Informations</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div>
                    <strong>Localisation:</strong>
                    <span className="body-text" style={{ marginLeft: '0.5rem' }}>
                      Antananarivo, Madagascar
                    </span>
                  </div>
                  <div>
                    <strong>Téléphone:</strong>
                    <span className="body-text" style={{ marginLeft: '0.5rem' }}>
                      +261 34 14 409 33
                    </span>
                  </div>
                  <div>
                    <strong>Email:</strong>
                    <span className="body-text" style={{ marginLeft: '0.5rem' }}>
                      ravoniainaheritiana@gmail.com
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="card"
              style={{ marginTop: '2rem' }}
            >
              <h3 className="heading-3">Langues & Centres d'intérêt</h3>
              <div className="grid-2">
                <div>
                  <h4 style={{ marginBottom: '1rem', fontWeight: '600' }}>Langues</h4>
                  <ul style={{ listStyle: 'none', gap: '0.5rem', display: 'flex', flexDirection: 'column' }}>
                    <li className="body-text">• Malagasy (Natif)</li>
                    <li className="body-text">• Français (Courant)</li>
                    <li className="body-text">• Anglais (Intermédiaire)</li>
                  </ul>
                </div>
                <div>
                  <h4 style={{ marginBottom: '1rem', fontWeight: '600' }}>Centres d'intérêt</h4>
                  <ul style={{ listStyle: 'none', gap: '0.5rem', display: 'flex', flexDirection: 'column' }}>
                    <li className="body-text">• Musique & Guitare</li>
                    <li className="body-text">• Jeux vidéos</li>
                    <li className="body-text">• Lecture & Dessin</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;