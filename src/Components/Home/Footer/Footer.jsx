import React from 'react';
import styles from './Footer.module.css';
import Subtitle from '../../Common/Subtitle/Subtitle';
import ImageLocal from '../../../Assets/Img/Svg/Icons/local.svg';

const Footer = () => {
  return (
    <footer className={`${styles.footerBg}`}>
      <section className={`${styles.footer} container`}>
        <Subtitle text="vamos trabalhar juntos?" />
        <div className={`${styles.footerContainer}`}>
          <div className={`${styles.footerMenu} links`}>
            <ul>
              <li>
                <a href="#">home</a>
              </li>
              <li>
                <a href="#">sobre</a>
              </li>
              <li>
                <a href="#">projetos</a>
              </li>
              <li>
                <a href="#">habilidades</a>
              </li>
              <li>
                <a href="#">contato</a>
              </li>
            </ul>
          </div>
          <div className={`${styles.footerMenu} links`}>
            <ul>
              <li>
                <a href="https://www.instagram.com/eu.lucasvidal/" target='_blank' rel='noopener noreferrer'>instagram</a>
              </li>
              <li>
                <a href="https://github.com/eulucasvidal" target='_blank' rel='noopener noreferrer'>gitHub</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/goncalves-lucas/" target='_blank' rel='noopener noreferrer'>linkedin</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <div className={`${styles.license}`}>
        Desenvolvido por Lucas Gonçalves | Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer;
