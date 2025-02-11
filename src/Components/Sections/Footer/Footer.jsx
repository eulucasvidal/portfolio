import React from 'react';
import styles from './Footer.module.css';
import Subtitle from '../../Common/Subtitle/Subtitle';
import ImageLocal from '../../../Assets/Img/Svg/Icons/local.svg';

const Footer = () => {
  return (
    <footer className={`${styles.footerBg}`}>
      <section className={`${styles.footer} container`}>
        <Subtitle text="vamos trabalhar juntos?" />
        <div className={`${styles.footerMenu} links`}>
          <ul>
            <li className="detailList">
              <a href="#">home</a>
            </li>
            <li className="detailList">
              <a href="#">sobre</a>
            </li>
            <li className="detailList">
              <a href="#">trabalhos</a>
            </li>
            <li className="detailList">
              <a href="#">contato</a>
            </li>
          </ul>
        </div>
        <div className={`${styles.footerMenu} links`}>
          <ul>
            <li className="detailList">
              <a href="#">instagram</a>
            </li>
            <li className="detailList">
              <a href="#">gitHub</a>
            </li>
            <li className="detailList">
              <a href="#">linkedin</a>
            </li>
            <li className="detailLocal">
              <img src={ImageLocal} alt="Icon localization" />
              <span>São Roque, SP / Brasil</span>
            </li>
          </ul>
        </div>
      </section>
      <div className={`${styles.license}`}>
        Desenvolvido por Lucas Gonçalves | Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer;
