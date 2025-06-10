import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Only update active section on home page
      if (location.pathname === '/') {
        const sections = ['hero', 'about', 'experience', 'projects', 'skills', 'education', 'contact'];
        const scrollPosition = window.scrollY + 100;
        
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const offsetTop = element.offsetTop;
            const height = element.offsetHeight;
            
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
              setActiveSection(section);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const navItems = [
    { id: 'hero', label: 'Accueil' },
    { id: 'about', label: 'À propos' },
    { id: 'experience', label: 'Expérience' },
    { id: 'projects', label: 'Projets' },
    { id: 'skills', label: 'Compétences' },
    { id: 'education', label: 'Formation' },
    { id: 'contact', label: 'Contact' }
  ];

  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
      style={{
        padding: '1rem 0',
        borderBottom: isScrolled ? '1px solid #eee' : 'none'
      }}
    >
      <div className="container">
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              cursor: 'pointer'
            }}
            onClick={() => navigate('/')}
          >
            RN.
          </motion.div>
          
          <div style={{
            display: 'flex',
            gap: '2rem',
            alignItems: 'center'
          }}>
            {location.pathname === '/' ? (
              // Navigation normale pour la page d'accueil
              navItems.map((item) => (
                <motion.button
                  key={item.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => item.id === 'contact' ? handleContactClick() : scrollToSection(item.id)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: activeSection === item.id ? '#000' : '#666',
                    fontSize: '0.9rem',
                    fontWeight: activeSection === item.id ? '600' : '400',
                    cursor: 'pointer',
                    padding: '0.5rem 0',
                    borderBottom: activeSection === item.id ? '2px solid #000' : '2px solid transparent',
                    transition: 'all 0.3s ease'
                  }}
                >
                  {item.label}
                </motion.button>
              ))
            ) : (
              // Navigation simplifiée pour les autres pages
              <>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate('/')}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#666',
                    fontSize: '0.9rem',
                    fontWeight: '400',
                    cursor: 'pointer',
                    padding: '0.5rem 0',
                    transition: 'all 0.3s ease'
                  }}
                >
                  Accueil
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate('/contact')}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: location.pathname === '/contact' ? '#000' : '#666',
                    fontSize: '0.9rem',
                    fontWeight: location.pathname === '/contact' ? '600' : '400',
                    cursor: 'pointer',
                    padding: '0.5rem 0',
                    borderBottom: location.pathname === '/contact' ? '2px solid #000' : '2px solid transparent',
                    transition: 'all 0.3s ease'
                  }}
                >
                  Contact
                </motion.button>
              </>
            )}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;