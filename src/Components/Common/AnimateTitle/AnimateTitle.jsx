import React from 'react';
import styles from '../AnimateTitle/AnimateTitle.module.css';

const AnimateTilte = ({ words }) => {
  return (
    <>
      <section className={`${styles.preSectionBg}`}>
        <article className="container">
          <div className={`${styles.preSection}`}>
            {words.map((word, index) => (
              <span key={index} className={`${styles.preSectionText}`}>
                {word}
              </span>
            ))}
          </div>
        </article>
      </section>
    </>
  );
};
export default AnimateTilte;
