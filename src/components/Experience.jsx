import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Experience = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const experiences = [
    {
      title: "Développeur React.js et FastAPI",
      company: "DataPulse Center",
      type: "Alternance",
      period: "Octobre 2024 - Février 2025",
      description: "Responsable de l'intégration des API développées par l'équipe, ainsi que de la création des parties front-end et back-end, notamment la gestion des espaces utilisateurs (authentification, autorisation)."
    },
    {
      title: "Développeur NextJS",
      company: "Travelia Safari",
      type: "Télétravail",
      period: "Janvier 2024 - Juin 2024",
      description: "Intégration des maquettes Figma sur toutes les pages liées au profil utilisateur dans une application Next.js, avec transformation des designs en interfaces web interactives et responsives. Collaboration avec l'équipe UI/UX pour garantir une fidélité pixel-perfect."
    },
    {
      title: "Développeur React JS et Symfony",
      company: "Ilo Madagascar",
      type: "Stage",
      period: "Juillet 2024 - Septembre 2024",
      description: "Développement de l'interface front-end en React.js à partir des maquettes Figma pour plusieurs modules (étudiants, enseignants, gestion des documents). Intégration des API fournies en Symfony pour la récupération et l'envoi des données."
    }
  ];

  const competition = {
    title: "1ère prix – Hackathon Inter Universitaire",
    location: "Antananarivo",
    period: "Avril 2025",
    description: "Premier prix lors du hackathon inter-universitaire d'Antananarivo"
  };

  return (
    <section id="experience" className="section" ref={ref}>
      <div className="container">
        <div className="section-content">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">Expériences</h2>
            <p className="section-subtitle">Mon parcours professionnel et mes réalisations</p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="card"
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem', flexWrap: 'wrap', gap: '1rem' }}>
                    <div>
                      <h3 className="heading-3">{exp.title}</h3>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                        <span style={{ fontWeight: '600', color: '#000' }}>{exp.company}</span>
                        <span style={{ 
                          background: '#000', 
                          color: '#fff', 
                          padding: '0.25rem 0.75rem', 
                          fontSize: '0.8rem',
                          fontWeight: '500'
                        }}>
                          {exp.type}
                        </span>
                      </div>
                    </div>
                    <span style={{ 
                      color: '#666', 
                      fontSize: '0.9rem',
                      fontWeight: '500'
                    }}>
                      {exp.period}
                    </span>
                  </div>
                  <p className="body-text">{exp.description}</p>
                </motion.div>
              ))}
              
              {/* Competition Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: experiences.length * 0.2 }}
                className="card"
                style={{ backgroundColor: '#000', color: '#fff' }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem', flexWrap: 'wrap', gap: '1rem' }}>
                  <div>
                    <h3 style={{ color: '#fff', fontSize: '1.5rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                      {competition.title}
                    </h3>
                    <span style={{ fontWeight: '600', color: '#fff' }}>{competition.location}</span>
                  </div>
                  <span style={{ 
                    color: '#ccc', 
                    fontSize: '0.9rem',
                    fontWeight: '500'
                  }}>
                    {competition.period}
                  </span>
                </div>
                <p style={{ color: '#ccc', fontSize: '1rem', lineHeight: '1.6' }}>
                  {competition.description}
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;