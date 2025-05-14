import React from 'react';
import styles from '../About/About.module.css';
import Paragraph from '../../Common/Paragraph/Paragraph';
import imgCartoon from '../../../Assets/Img/ImagesCartoons/cartoon-intro.png';
import FadeIn from '../../Animation/FadeIn';
import { style } from 'framer-motion/client';

const About = () => {
  return (
    <section className={`${styles.aboutBg}`} id='sobre'>
      <article className={`container`}>
        <FadeIn>
          <div className={`${styles.about}`}>
            <img src={imgCartoon} alt="Imagen cartoon da seção about" />
            <div className={`${styles.aboutText}`}>
              <Paragraph text="Olá, eu sou Lucas Gonçalves e trabalho com desenvolvimento front-end. Gosto de criar interfaces funcionais e bem construídas, sempre focadas em uma boa experiência para o usuário." />
              <div className={`${styles.aboutContenteBtn}`}>
                <span className="fontXs">
                  Vamos tornar seu projeto uma realidade
                </span>
                <a href="#" className={`${styles.buttonAbout}`}>
                  Entrar em contato
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </article>
    </section>
  );
};

export default About;
