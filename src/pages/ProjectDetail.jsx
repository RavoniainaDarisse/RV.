import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projectsData } from '../data/projectsData';

const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  
  const project = projectsData.find(p => p.id === projectId);
  
  if (!project) {
    return (
      <div style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '2rem'
      }}>
        <h1>Projet non trouvé</h1>
        <button 
          onClick={() => navigate('/')}
          className="btn"
        >
          Retour à l'accueil
        </button>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#fff' }}>
      {/* Header avec navigation */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          backgroundColor: '#fff',
          borderBottom: '1px solid #eee',
          padding: '1rem 0'
        }}
      >
        <div className="container">
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/')}
              style={{
                background: 'none',
                border: 'none',
                fontSize: '1.5rem',
                fontWeight: '700',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              ← RN.
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/')}
              className="btn btn-outline"
            >
              Retour aux projets
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Contenu principal */}
      <main style={{ paddingTop: '6rem' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ maxWidth: '1000px', margin: '0 auto' }}
          >
            {/* En-tête du projet */}
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={{
                  fontSize: '3.5rem',
                  fontWeight: '700',
                  marginBottom: '1rem',
                  letterSpacing: '-0.02em'
                }}
              >
                {project.title}
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                style={{
                  fontSize: '1.2rem',
                  color: '#666',
                  fontWeight: '500',
                  marginBottom: '2rem'
                }}
              >
                {project.technologies}
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                  justifyContent: 'center'
                }}
              >
                {project.features.map((feature, idx) => (
                  <span
                    key={idx}
                    style={{
                      background: '#000',
                      color: '#fff',
                      padding: '0.5rem 1rem',
                      fontSize: '0.9rem',
                      fontWeight: '500'
                    }}
                  >
                    {feature}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* Vidéo du projet */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="card"
              style={{ marginBottom: '3rem' }}
            >
              <h3 style={{ 
                fontSize: '1.5rem', 
                fontWeight: '600', 
                marginBottom: '2rem',
                textAlign: 'center'
              }}>
                Démonstration du projet
              </h3>
              
              <div style={{
  width: '100%',
  height: '400px',
  backgroundColor: '#f5f5f5',
  border: '2px dashed #ccc',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  gap: '1rem',
  borderRadius: '8px',
  overflow: 'hidden' // Pour éviter le débordement
}}>
  {project.video ? (
    <video 
      width="100%" 
      height="100%" 
      controls 
      autoPlay 
      muted 
      loop 
      style={{ 
        objectFit: 'cover', 
        width: '100%', 
        height: '100%', 
        borderRadius: '8px' 
      }}
    >
      <source src={project.video} type="video/mp4" />
      Votre navigateur ne supporte pas la lecture de vidéos.
    </video>
  ) : (
    <div style={{ textAlign: 'center' }}>
      <div style={{
        width: '80px',
        height: '80px',
        backgroundColor: '#000',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto'
      }}>
        <span style={{ color: '#fff', fontSize: '2rem' }}>▶</span>
      </div>
      <p style={{ 
        color: '#666', 
        fontSize: '1.1rem',
        textAlign: 'center',
        maxWidth: '400px',
        margin: '0 auto'
      }}>
        Espace réservé pour la vidéo de démonstration du projet {project.title}
      </p>
      <p style={{ 
        color: '#999', 
        fontSize: '0.9rem',
        fontStyle: 'italic'
      }}>
        Glissez-déposez votre fichier vidéo ici ou cliquez pour sélectionner
      </p>
    </div>
  )}
</div>

            </motion.div>

            {/* Description détaillée */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="card"
              style={{ marginBottom: '3rem' }}
            >
              <h3 style={{ 
                fontSize: '1.5rem', 
                fontWeight: '600', 
                marginBottom: '2rem'
              }}>
                Description détaillée
              </h3>
              
              <p style={{ 
                fontSize: '1.1rem', 
                lineHeight: '1.8', 
                color: '#333',
                marginBottom: '2rem'
              }}>
                {project.description}
              </p>
              
              <div style={{ marginBottom: '2rem' }}>
                <h4 style={{ 
                  fontSize: '1.2rem', 
                  fontWeight: '600', 
                  marginBottom: '1rem'
                }}>
                  Objectifs du projet
                </h4>
                <ul style={{ 
                  listStyle: 'none', 
                  paddingLeft: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem'
                }}>
                  {project.objectives?.map((objective, idx) => (
                    <li key={idx} style={{ 
                      display: 'flex', 
                      alignItems: 'flex-start', 
                      gap: '0.5rem'
                    }}>
                      <span style={{ color: '#000', fontWeight: '600' }}>•</span>
                      <span style={{ color: '#666' }}>{objective}</span>
                    </li>
                  )) || (
                    <>
                      <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                        <span style={{ color: '#000', fontWeight: '600' }}>•</span>
                        <span style={{ color: '#666' }}>Développer une solution innovante et performante</span>
                      </li>
                      <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                        <span style={{ color: '#000', fontWeight: '600' }}>•</span>
                        <span style={{ color: '#666' }}>Créer une interface utilisateur intuitive et moderne</span>
                      </li>
                      <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                        <span style={{ color: '#000', fontWeight: '600' }}>•</span>
                        <span style={{ color: '#666' }}>Optimiser les performances et l'expérience utilisateur</span>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </motion.div>

            {/* Technologies utilisées */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="card"
              style={{ marginBottom: '3rem' }}
            >
              <h3 style={{ 
                fontSize: '1.5rem', 
                fontWeight: '600', 
                marginBottom: '2rem'
              }}>
                Technologies et outils
              </h3>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1rem'
              }}>
                {project.techStack?.map((tech, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: '1rem',
                      backgroundColor: '#f8f8f8',
                      border: '1px solid #eee',
                      textAlign: 'center'
                    }}
                  >
                    <span style={{ fontWeight: '500' }}>{tech}</span>
                  </div>
                )) || (
                  project.technologies.split(' et ').map((tech, idx) => (
                    <div
                      key={idx}
                      style={{
                        padding: '1rem',
                        backgroundColor: '#f8f8f8',
                        border: '1px solid #eee',
                        textAlign: 'center'
                      }}
                    >
                      <span style={{ fontWeight: '500' }}>{tech.trim()}</span>
                    </div>
                  ))
                )}
              </div>
            </motion.div>

            {/* Défis et solutions */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="card"
              style={{ marginBottom: '3rem' }}
            >
              <h3 style={{ 
                fontSize: '1.5rem', 
                fontWeight: '600', 
                marginBottom: '2rem'
              }}>
                Défis techniques et solutions
              </h3>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem'
              }}>
                <div>
                  <h4 style={{ 
                    fontSize: '1.1rem', 
                    fontWeight: '600', 
                    marginBottom: '1rem',
                    color: '#000'
                  }}>
                    Défis rencontrés
                  </h4>
                  <ul style={{ 
                    listStyle: 'none', 
                    paddingLeft: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.5rem'
                  }}>
                    {project.challenges?.map((challenge, idx) => (
                      <li key={idx} style={{ 
                        display: 'flex', 
                        alignItems: 'flex-start', 
                        gap: '0.5rem'
                      }}>
                        <span style={{ color: '#e74c3c', fontWeight: '600' }}>⚠</span>
                        <span style={{ color: '#666' }}>{challenge}</span>
                      </li>
                    )) || (
                      <>
                        <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                          <span style={{ color: '#e74c3c', fontWeight: '600' }}>⚠</span>
                          <span style={{ color: '#666' }}>Intégration complexe des APIs</span>
                        </li>
                        <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                          <span style={{ color: '#e74c3c', fontWeight: '600' }}>⚠</span>
                          <span style={{ color: '#666' }}>Optimisation des performances</span>
                        </li>
                        <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                          <span style={{ color: '#e74c3c', fontWeight: '600' }}>⚠</span>
                          <span style={{ color: '#666' }}>Gestion de l'état complexe</span>
                        </li>
                      </>
                    )}
                  </ul>
                </div>
                
                <div>
                  <h4 style={{ 
                    fontSize: '1.1rem', 
                    fontWeight: '600', 
                    marginBottom: '1rem',
                    color: '#000'
                  }}>
                    Solutions apportées
                  </h4>
                  <ul style={{ 
                    listStyle: 'none', 
                    paddingLeft: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.5rem'
                  }}>
                    {project.solutions?.map((solution, idx) => (
                      <li key={idx} style={{ 
                        display: 'flex', 
                        alignItems: 'flex-start', 
                        gap: '0.5rem'
                      }}>
                        <span style={{ color: '#27ae60', fontWeight: '600' }}>✓</span>
                        <span style={{ color: '#666' }}>{solution}</span>
                      </li>
                    )) || (
                      <>
                        <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                          <span style={{ color: '#27ae60', fontWeight: '600' }}>✓</span>
                          <span style={{ color: '#666' }}>Architecture modulaire et scalable</span>
                        </li>
                        <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                          <span style={{ color: '#27ae60', fontWeight: '600' }}>✓</span>
                          <span style={{ color: '#666' }}>Mise en cache intelligente</span>
                        </li>
                        <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                          <span style={{ color: '#27ae60', fontWeight: '600' }}>✓</span>
                          <span style={{ color: '#666' }}>Patterns de design avancés</span>
                        </li>
                      </>
                    )}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Navigation vers d'autres projets */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '2rem',
                marginBottom: '4rem',
                flexWrap: 'wrap'
              }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/')}
                className="btn"
              >
                Voir tous les projets
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/#contact')}
                className="btn btn-outline"
              >
                Me contacter
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetail;