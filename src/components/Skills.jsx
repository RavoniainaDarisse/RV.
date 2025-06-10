import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const skillCategories = [
    {
      title: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "React JS", "Tailwind CSS"]
    },
    {
      title: "Backend",
      skills: ["C#", "ASP.NET MVC", "FastAPI", "SQLite"]
    },
    {
      title: "Outils",
      skills: ["Git", "Rider", "VsCode", "Figma"]
    }
  ];

  return (
    <section id="skills" className="section" ref={ref}>
      <div className="container">
        <div className="section-content">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">Compétences</h2>
            <p className="section-subtitle">Technologies et outils que je maîtrise</p>
            
            <div className="grid-3">
              {skillCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="card"
                >
                  <h3 className="heading-3" style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
                    {category.title}
                  </h3>
                  
                  <div style={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    gap: '1rem' 
                  }}>
                    {category.skills.map((skill, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: (index * 0.2) + (idx * 0.1) }}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '0.75rem',
                          backgroundColor: '#f8f8f8',
                          border: '1px solid #eee'
                        }}
                      >
                        <span style={{ fontWeight: '500' }}>{skill}</span>
                        <div style={{
                          width: '8px',
                          height: '8px',
                          backgroundColor: '#000',
                          borderRadius: '50%'
                        }} />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;