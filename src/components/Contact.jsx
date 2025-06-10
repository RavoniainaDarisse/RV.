import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const navigate = useNavigate();

  const contactInfo = {
    email: "ravoniainaheritiana@gmail.com",
    phone: "+261 34 14 409 33",
    location: "Manakambahiny, Antananarivo, Madagascar"
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      username: "ravoniaina-heritiana-5b8771312",
      url: "https://linkedin.com/in/ravoniaina-heritiana-5b8771312"
    },
    {
      name: "GitHub",
      username: "RavoniainaDarisse",
      url: "https://github.com/RavoniainaDarisse"
    },
    {
      name: "Facebook",
      username: "Diav Heritiana",
      url: "https://facebook.com/diav.heritiana"
    }
  ];

  return (
    <section id="contact" className="section" ref={ref}>
      <div className="container">
        <div className="section-content">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">Contact</h2>
            <p className="section-subtitle">Restons en contact pour collaborer sur vos projets</p>
            
            <div className="grid-2">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="card"
              >
                <h3 className="heading-3" style={{ marginBottom: '2rem' }}>Informations de contact</h3>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '1rem',
                      padding: '1rem',
                      backgroundColor: '#f8f8f8',
                      border: '1px solid #eee'
                    }}
                  >
                    <div style={{
                      width: '40px',
                      height: '40px',
                      backgroundColor: '#000',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <span style={{ color: '#fff', fontSize: '1.2rem' }}>📧</span>
                    </div>
                    <div>
                      <p style={{ fontWeight: '600', marginBottom: '0.25rem' }}>Email</p>
                      <a 
                        href={`mailto:${contactInfo.email}`}
                        style={{ color: '#666', textDecoration: 'none' }}
                      >
                        {contactInfo.email}
                      </a>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '1rem',
                      padding: '1rem',
                      backgroundColor: '#f8f8f8',
                      border: '1px solid #eee'
                    }}
                  >
                    <div style={{
                      width: '40px',
                      height: '40px',
                      backgroundColor: '#000',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <span style={{ color: '#fff', fontSize: '1.2rem' }}>📱</span>
                    </div>
                    <div>
                      <p style={{ fontWeight: '600', marginBottom: '0.25rem' }}>Téléphone</p>
                      <a 
                        href={`tel:${contactInfo.phone}`}
                        style={{ color: '#666', textDecoration: 'none' }}
                      >
                        {contactInfo.phone}
                      </a>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '1rem',
                      padding: '1rem',
                      backgroundColor: '#f8f8f8',
                      border: '1px solid #eee'
                    }}
                  >
                    <div style={{
                      width: '40px',
                      height: '40px',
                      backgroundColor: '#000',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <span style={{ color: '#fff', fontSize: '1.2rem' }}>📍</span>
                    </div>
                    <div>
                      <p style={{ fontWeight: '600', marginBottom: '0.25rem' }}>Localisation</p>
                      <p className="body-text">{contactInfo.location}</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
              
              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="card"
              >
                <h3 className="heading-3" style={{ marginBottom: '2rem' }}>Réseaux sociaux</h3>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '1rem',
                        backgroundColor: '#000',
                        color: '#fff',
                        textDecoration: 'none',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      <div>
                        <p style={{ fontWeight: '600', marginBottom: '0.25rem' }}>{social.name}</p>
                        <p style={{ color: '#ccc', fontSize: '0.9rem' }}>{social.username}</p>
                      </div>
                      <span style={{ fontSize: '1.2rem' }}>→</span>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>
            
            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              style={{
                textAlign: 'center',
                marginTop: '3rem',
                padding: '3rem',
                backgroundColor: '#000',
                color: '#fff'
              }}
            >
              <h3 style={{ 
                fontSize: '2rem', 
                fontWeight: '600', 
                marginBottom: '1rem',
                color: '#fff'
              }}>
                Prêt à collaborer ?
              </h3>
              <p style={{ 
                fontSize: '1.1rem', 
                marginBottom: '2rem',
                color: '#ccc'
              }}>
                Contactez-moi pour discuter de votre prochain projet
              </p>
              <div style={{ 
                display: 'flex', 
                gap: '1rem', 
                justifyContent: 'center',
                flexWrap: 'wrap'
              }}>
                <motion.button
                  onClick={() => navigate('/contact')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    display: 'inline-block',
                    padding: '1rem 2rem',
                    backgroundColor: '#fff',
                    color: '#000',
                    border: 'none',
                    textDecoration: 'none',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                >
                  Formulaire de contact
                </motion.button>
                <motion.a
                  href={`mailto:${contactInfo.email}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    display: 'inline-block',
                    padding: '1rem 2rem',
                    backgroundColor: 'transparent',
                    color: '#fff',
                    border: '2px solid #fff',
                    textDecoration: 'none',
                    fontWeight: '600',
                    transition: 'all 0.3s ease'
                  }}
                >
                  Email direct
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;