import React from 'react';
import styles from '../AnimateTitle/AnimateTitle.module.css';

const AnimateTilte = ({ words }) => {
  return (
    <>
      <section className="container">
        <div className={`${styles.preSection}`}>
          {words.map((word, index) => (
            <span key={index} className={`${styles.textAnimate}`}>
              {word}
            </span>
          ))}
        </div>
      </section>
    </>
  );
};
export default AnimateTilte;
