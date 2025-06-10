import React from 'react';
import { motion } from 'framer-motion';

const OrganicShape = () => {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: -1,
      overflow: 'hidden'
    }}>
      {/* Large organic shape */}
      <motion.div
        initial={{ scale: 0, rotate: 0 }}
        animate={{ scale: 1, rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{
          position: 'absolute',
          top: '10%',
          right: '-10%',
          width: '60vw',
          height: '60vw',
          background: '#000',
          borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
          opacity: 0.05
        }}
      />
      
      {/* Medium organic shape */}
      <motion.div
        initial={{ scale: 0, rotate: 180 }}
        animate={{ scale: 1, rotate: -180 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        style={{
          position: 'absolute',
          bottom: '20%',
          left: '-5%',
          width: '40vw',
          height: '40vw',
          background: '#000',
          borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
          opacity: 0.03
        }}
      />
      
      {/* Small organic shapes */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: [-100, 100], opacity: [0.02, 0.05, 0.02] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: 'absolute',
          top: '60%',
          right: '20%',
          width: '20vw',
          height: '20vw',
          background: '#000',
          borderRadius: '80% 20% 55% 45% / 25% 75% 25% 75%'
        }}
      />
      
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: [100, -100], opacity: [0.01, 0.04, 0.01] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: 'absolute',
          top: '30%',
          left: '70%',
          width: '15vw',
          height: '15vw',
          background: '#000',
          borderRadius: '40% 60% 60% 40% / 60% 40% 60% 40%'
        }}
      />
    </div>
  );
};

export default OrganicShape;