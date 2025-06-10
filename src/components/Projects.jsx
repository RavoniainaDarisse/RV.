import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import { projectsData } from '../data/projectsData';

const Projects = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const navigate = useNavigate();

  const handleViewDetails = (projectId) => {
    navigate(`/project/${projectId}`);
  };

  return (
    <section id="projects" className="section" ref={ref}>
      <div className="container">
        <div className="section-content">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">Projets</h2>
            <p className="section-subtitle">Découvrez mes réalisations techniques et créatives</p>
            
            <div className="grid-2">
              {projectsData.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="card"
                >
                  <div style={{ marginBottom: '1.5rem' }}>
                    <h3 className="heading-3">{project.title}</h3>
                    <span style={{ 
                      color: '#666', 
                      fontSize: '0.9rem',
                      fontWeight: '500',
                      fontStyle: 'italic'
                    }}>
                      {project.technologies}
                    </span>
                  </div>
                  
                  <p className="body-text" style={{ marginBottom: '1.5rem' }}>
                    {project.description.length > 150 
                      ? `${project.description.substring(0, 150)}...` 
                      : project.description
                    }
                  </p>
                  
                  <div style={{ marginBottom: '2rem' }}>
                    <h4 style={{ 
                      fontSize: '0.9rem', 
                      fontWeight: '600', 
                      marginBottom: '0.75rem',
                      color: '#000'
                    }}>
                      Fonctionnalités clés :
                    </h4>
                    <div style={{ 
                      display: 'flex', 
                      flexWrap: 'wrap', 
                      gap: '0.5rem' 
                    }}>
                      {project.features.map((feature, idx) => (
                        <span
                          key={idx}
                          style={{
                            background: '#f5f5f5',
                            color: '#333',
                            padding: '0.25rem 0.75rem',
                            fontSize: '0.8rem',
                            borderRadius: '20px',
                            fontWeight: '500'
                          }}
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleViewDetails(project.id)}
                    style={{
                      width: '100%',
                      padding: '1rem',
                      backgroundColor: '#000',
                      color: '#fff',
                      border: 'none',
                      fontWeight: '500',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem'
                    }}
                  >
                    Voir les détails
                    <span style={{ fontSize: '1.2rem' }}>→</span>
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;