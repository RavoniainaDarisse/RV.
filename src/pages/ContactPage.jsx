import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';


const ContactPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const SERVICE_ID = "service_sc8brgl"
  const TEMPLATE_ID = "template_d2qeigi"
  const PUBLIC_KEY = "eLiIigVcOqNqA-f2u"


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    console.log(formData)
  
    try {
      console.log(formData)
      // Envoi réel avec EmailJS
      const result = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        PUBLIC_KEY
      );
  
      console.log('Email envoyé :', result.text);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Erreur lors de l’envoi :', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };
  

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
              Retour à l'accueil
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Contenu principal */}
      <main style={{ paddingTop: '6rem', paddingBottom: '4rem' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ maxWidth: '1200px', margin: '0 auto' }}
          >
            {/* En-tête */}
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
                Contactez-moi
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                style={{
                  fontSize: '1.2rem',
                  color: '#666',
                  maxWidth: '600px',
                  margin: '0 auto'
                }}
              >
                Vous avez un projet en tête ? Une question ? N'hésitez pas à me contacter. 
                Je serais ravi de discuter de vos besoins et de voir comment je peux vous aider.
              </motion.p>
            </div>

            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', 
              gap: '3rem',
              alignItems: 'start'
            }}>
              {/* Formulaire de contact */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="card"
              >
                <h3 style={{ 
                  fontSize: '1.8rem', 
                  fontWeight: '600', 
                  marginBottom: '2rem'
                }}>
                  Envoyez-moi un message
                </h3>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div>
                    <label style={{ 
                      display: 'block', 
                      marginBottom: '0.5rem', 
                      fontWeight: '500',
                      color: '#333'
                    }}>
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      style={{
                        width: '100%',
                        padding: '1rem',
                        border: '2px solid #eee',
                        fontSize: '1rem',
                        transition: 'border-color 0.3s ease',
                        backgroundColor: '#fff'
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#000'}
                      onBlur={(e) => e.target.style.borderColor = '#eee'}
                    />
                  </div>

                  <div>
                    <label style={{ 
                      display: 'block', 
                      marginBottom: '0.5rem', 
                      fontWeight: '500',
                      color: '#333'
                    }}>
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      style={{
                        width: '100%',
                        padding: '1rem',
                        border: '2px solid #eee',
                        fontSize: '1rem',
                        transition: 'border-color 0.3s ease',
                        backgroundColor: '#fff'
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#000'}
                      onBlur={(e) => e.target.style.borderColor = '#eee'}
                    />
                  </div>

                  <div>
                    <label style={{ 
                      display: 'block', 
                      marginBottom: '0.5rem', 
                      fontWeight: '500',
                      color: '#333'
                    }}>
                      Sujet *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      style={{
                        width: '100%',
                        padding: '1rem',
                        border: '2px solid #eee',
                        fontSize: '1rem',
                        transition: 'border-color 0.3s ease',
                        backgroundColor: '#fff'
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#000'}
                      onBlur={(e) => e.target.style.borderColor = '#eee'}
                    />
                  </div>

                  <div>
                    <label style={{ 
                      display: 'block', 
                      marginBottom: '0.5rem', 
                      fontWeight: '500',
                      color: '#333'
                    }}>
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows="6"
                      style={{
                        width: '100%',
                        padding: '1rem',
                        border: '2px solid #eee',
                        fontSize: '1rem',
                        transition: 'border-color 0.3s ease',
                        backgroundColor: '#fff',
                        resize: 'vertical',
                        fontFamily: 'inherit'
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#000'}
                      onBlur={(e) => e.target.style.borderColor = '#eee'}
                    />
                  </div>

                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      style={{
                        padding: '1rem',
                        backgroundColor: '#d4edda',
                        border: '1px solid #c3e6cb',
                        color: '#155724',
                        borderRadius: '4px'
                      }}
                    >
                      ✓ Votre message a été envoyé avec succès ! Je vous répondrai dans les plus brefs délais.
                    </motion.div>
                  )}

                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      style={{
                        padding: '1rem',
                        backgroundColor: '#f8d7da',
                        border: '1px solid #f5c6cb',
                        color: '#721c24',
                        borderRadius: '4px'
                      }}
                    >
                      ✗ Une erreur s'est produite. Veuillez réessayer ou me contacter directement par email.
                    </motion.div>
                  )}

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    style={{
                      padding: '1rem 2rem',
                      backgroundColor: isSubmitting ? '#ccc' : '#000',
                      color: '#fff',
                      border: 'none',
                      fontSize: '1rem',
                      fontWeight: '600',
                      cursor: isSubmitting ? 'not-allowed' : 'pointer',
                      transition: 'all 0.3s ease',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem'
                    }}
                  >
                    {isSubmitting ? (
                      <>
                        <div style={{
                          width: '20px',
                          height: '20px',
                          border: '2px solid #fff',
                          borderTop: '2px solid transparent',
                          borderRadius: '50%',
                          animation: 'spin 1s linear infinite'
                        }} />
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        Envoyer le message
                        <span>→</span>
                      </>
                    )}
                  </motion.button>
                </form>
              </motion.div>

              {/* Informations de contact */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
              >
                {/* Contact direct */}
                <div className="card">
                  <h3 style={{ 
                    fontSize: '1.8rem', 
                    fontWeight: '600', 
                    marginBottom: '2rem'
                  }}>
                    Contact direct
                  </h3>
                  
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
                        <p style={{ color: '#666', margin: 0 }}>{contactInfo.location}</p>
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Réseaux sociaux */}
                <div className="card">
                  <h3 style={{ 
                    fontSize: '1.8rem', 
                    fontWeight: '600', 
                    marginBottom: '2rem'
                  }}>
                    Réseaux sociaux
                  </h3>
                  
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
                          <p style={{ fontWeight: '600', marginBottom: '0.25rem', margin: 0 }}>{social.name}</p>
                          <p style={{ color: '#ccc', fontSize: '0.9rem', margin: 0 }}>{social.username}</p>
                        </div>
                        <span style={{ fontSize: '1.2rem' }}>→</span>
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* Disponibilité */}
                <div className="card" style={{ backgroundColor: '#000', color: '#fff' }}>
                  <h3 style={{ 
                    fontSize: '1.8rem', 
                    fontWeight: '600', 
                    marginBottom: '1rem',
                    color: '#fff'
                  }}>
                    Disponibilité
                  </h3>
                  <p style={{ color: '#ccc', marginBottom: '1rem' }}>
                    Je suis actuellement disponible pour de nouveaux projets et collaborations.
                  </p>
                  <p style={{ color: '#ccc', fontSize: '0.9rem' }}>
                    Temps de réponse habituel : 24-48 heures
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Animation CSS pour le spinner */}
      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default ContactPage;