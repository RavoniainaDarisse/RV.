import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Education = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const education = [
    {
      degree: "Licence professionnelle",
      field: "Génie Logiciel",
      institution: "Institut National Supérieur Informatique",
      location: "Ambanidia",
      period: "Janvier 2022 - PRÉSENT",
      status: "En cours"
    },
    {
      degree: "Baccalauréat",
      field: "Gestion G2",
      institution: "Lycée Technique Commercial Ampefiloha",
      location: "Antananarivo, Ampefiloha",
      period: "Septembre 2019 - Juillet 2020",
      status: "Obtenu"
    }
  ];

  const certification = {
    title: "Certificat American English Club",
    institution: "FMOS Anosizato",
    period: "Juin 2020 - Juillet 2022",
    description: "Formation en anglais professionnel"
  };

  return (
    <section id="education" className="section" ref={ref}>
      <div className="container">
        <div className="section-content">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">Formation</h2>
            <p className="section-subtitle">Mon parcours académique et certifications</p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {/* Education */}
              <div>
                <h3 style={{ fontSize: '1.8rem', fontWeight: '600', marginBottom: '2rem', textAlign: 'center' }}>
                  Formations Académiques
                </h3>
                
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="card"
                    style={{ marginBottom: '1.5rem' }}
                  >
                    <div style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between', 
                      alignItems: 'flex-start', 
                      marginBottom: '1rem',
                      flexWrap: 'wrap',
                      gap: '1rem'
                    }}>
                      <div>
                        <h4 className="heading-3">{edu.degree}</h4>
                        <p style={{ 
                          fontSize: '1.1rem', 
                          fontWeight: '500', 
                          color: '#666',
                          marginBottom: '0.5rem'
                        }}>
                          {edu.field}
                        </p>
                        <p style={{ fontWeight: '600' }}>{edu.institution}</p>
                        <p className="body-text">{edu.location}</p>
                      </div>
                      
                      <div style={{ textAlign: 'right' }}>
                        <span style={{ 
                          background: edu.status === 'En cours' ? '#000' : '#666',
                          color: '#fff',
                          padding: '0.5rem 1rem',
                          fontSize: '0.8rem',
                          fontWeight: '500',
                          display: 'block',
                          marginBottom: '0.5rem'
                        }}>
                          {edu.status}
                        </span>
                        <span style={{ 
                          color: '#666', 
                          fontSize: '0.9rem',
                          fontWeight: '500'
                        }}>
                          {edu.period}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Certification */}
              <div>
                <h3 style={{ fontSize: '1.8rem', fontWeight: '600', marginBottom: '2rem', textAlign: 'center' }}>
                  Certifications
                </h3>
                
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="card"
                  style={{ backgroundColor: '#f8f8f8' }}
                >
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'flex-start', 
                    marginBottom: '1rem',
                    flexWrap: 'wrap',
                    gap: '1rem'
                  }}>
                    <div>
                      <h4 className="heading-3">{certification.title}</h4>
                      <p style={{ fontWeight: '600', marginBottom: '0.5rem' }}>
                        {certification.institution}
                      </p>
                      <p className="body-text">{certification.description}</p>
                    </div>
                    
                    <span style={{ 
                      color: '#666', 
                      fontSize: '0.9rem',
                      fontWeight: '500'
                    }}>
                      {certification.period}
                    </span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;