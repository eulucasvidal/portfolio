import React from 'react';
import styles from '../Intro/Intro.module.css';
import imgCartoon from '../../../../public/ImagesCartoons/cartoon-intro.png';
import SocialMidia from '../../SocialMidia/SocialMidia';
import ImageLocal from '../../../Assets/Img/Svg/Icons/local.svg';
import FadeIn from '../../Animation/FadeIn';

const Intro = () => {
  return (
    <article className={`${styles.introBg}`}>
      <section className={`${styles.intro} container`}>
        <div className={`${styles.introContent}`}>
          <FadeIn>
            <span className="fontMb">Olá, eu sou</span>
            <h1 className="fontXxlb">Lucas Gonçalves</h1>
            <h2 className="fontLb">Desenvolvedor Front End</h2>
            <p className="fontS">
              Ajudo sua empresa e startup a obter uma vantagem justa por meio de
              sites de marketing personalizados e voltados para resultados.
            </p>
            <div className="detailLocal">
              <img src={ImageLocal} alt="Icon localization" />
              <span>São Roque, SP / Brasil</span>
            </div>
            <SocialMidia />
          </FadeIn>
        </div>
        <div>
          <FadeIn>
            <img src={imgCartoon} alt="Imagen cartoon da seção intro" />
          </FadeIn>
        </div>
      </section>
    </article>
  );
};

export default Intro;
