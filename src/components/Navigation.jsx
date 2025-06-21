import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Only update active section on home page
      if (location.pathname === '/') {
        const sections = ['hero', 'about', 'experience', 'projects', 'skills', 'education', 'contact'];
        const scrollPosition = window.scrollY + 150; // Ajusté pour mobile
        
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

  // Fermer le menu mobile lors du changement de route
  useEffect(() => {
    setIsMobileMenuOpen(false);
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
    setIsMobileMenuOpen(false); // Fermer le menu mobile
    
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop - 80; // Compensation pour le header fixe
          window.scrollTo({ 
            top: offsetTop, 
            behavior: 'smooth' 
          });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const offsetTop = element.offsetTop - 80; // Compensation pour le header fixe
        window.scrollTo({ 
          top: offsetTop, 
          behavior: 'smooth' 
        });
      }
    }
  };

  const handleContactClick = () => {
    setIsMobileMenuOpen(false);
    navigate('/contact');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
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
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                cursor: 'pointer',
                zIndex: 60
              }}
              onClick={() => {
                setIsMobileMenuOpen(false);
                navigate('/');
              }}
            >
              RN.
            </motion.div>
            
            {/* Desktop Navigation */}
            <div style={{
              display: 'flex',
              gap: '2rem',
              alignItems: 'center'
            }} className="desktop-nav">
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
                      transition: 'all 0.3s ease',
                      whiteSpace: 'nowrap'
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

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={toggleMobileMenu}
              className="mobile-menu-btn"
              style={{
                display: 'none',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '0.5rem',
                zIndex: 60,
                position: 'relative'
              }}
            >
              <div style={{
                width: '24px',
                height: '24px',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <motion.span
                  animate={{
                    rotate: isMobileMenuOpen ? 45 : 0,
                    y: isMobileMenuOpen ? 0 : -6
                  }}
                  style={{
                    display: 'block',
                    width: '20px',
                    height: '2px',
                    backgroundColor: '#000',
                    position: 'absolute',
                    transformOrigin: 'center'
                  }}
                />
                <motion.span
                  animate={{
                    opacity: isMobileMenuOpen ? 0 : 1
                  }}
                  style={{
                    display: 'block',
                    width: '20px',
                    height: '2px',
                    backgroundColor: '#000',
                    position: 'absolute'
                  }}
                />
                <motion.span
                  animate={{
                    rotate: isMobileMenuOpen ? -45 : 0,
                    y: isMobileMenuOpen ? 0 : 6
                  }}
                  style={{
                    display: 'block',
                    width: '20px',
                    height: '2px',
                    backgroundColor: '#000',
                    position: 'absolute',
                    transformOrigin: 'center'
                  }}
                />
              </div>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              zIndex: 55,
              backdropFilter: 'blur(4px)'
            }}
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              width: '280px',
              height: '100vh',
              backgroundColor: '#fff',
              zIndex: 56,
              padding: '6rem 2rem 2rem 2rem',
              boxShadow: '-4px 0 20px rgba(0, 0, 0, 0.1)',
              overflowY: 'auto'
            }}
          >
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem'
            }}>
              {location.pathname === '/' ? (
                navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => item.id === 'contact' ? handleContactClick() : scrollToSection(item.id)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: activeSection === item.id ? '#000' : '#666',
                      fontSize: '1.1rem',
                      fontWeight: activeSection === item.id ? '600' : '400',
                      cursor: 'pointer',
                      padding: '1rem 0',
                      textAlign: 'left',
                      borderBottom: '1px solid #f0f0f0',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    {item.label}
                  </motion.button>
                ))
              ) : (
                <>
                  <motion.button
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigate('/')}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#666',
                      fontSize: '1.1rem',
                      fontWeight: '400',
                      cursor: 'pointer',
                      padding: '1rem 0',
                      textAlign: 'left',
                      borderBottom: '1px solid #f0f0f0',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    Accueil
                  </motion.button>
                  <motion.button
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigate('/contact')}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: location.pathname === '/contact' ? '#000' : '#666',
                      fontSize: '1.1rem',
                      fontWeight: location.pathname === '/contact' ? '600' : '400',
                      cursor: 'pointer',
                      padding: '1rem 0',
                      textAlign: 'left',
                      borderBottom: '1px solid #f0f0f0',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    Contact
                  </motion.button>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
        }
        
        @media (min-width: 769px) {
          .mobile-menu-btn {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
};

export default Navigation;