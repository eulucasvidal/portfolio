import React from 'react';
import { easeInOut, motion } from 'framer-motion';

const FadeIn = ({ children }) => {

  return (
    <>
      {React.Children.map(children, (child, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y:0 }}
          transition={{ duration: 1, delay: index * 0.4, ease: easeInOut}}
        >
          {child}
        </motion.div>
      ))}
    </>
  );
};

export default FadeIn;
