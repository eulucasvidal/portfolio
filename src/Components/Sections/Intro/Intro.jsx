import React from 'react';
import styles from '../Intro/Intro.module.css';
import imgCartoon from '../../../../public/ImagesCartoons/cartoon-intro.png';
import SocialMidia from '../../SocialMidia/SocialMidia';
import ImageLocal from '../../../Assets/Img/Svg/Icons/local.svg';
import FadeIn from '../../Animation/FadeIn';

const Intro = () => {
  return (
    <section className={`${styles.introBg}`}>
      <article className={`${styles.intro} container`}>
        <div className={`${styles.introContent}`}>
          <FadeIn>
            <span className="fontMb">Olá, eu sou</span>
            <h1 className="fontXxlb">Lucas Gonçalves</h1>
            <h2 className="fontLb">Desenvolvedor Front End</h2>
            <p className="fontS">
              " Estou pronto para colaborar e crescer com sua equipe, desenvolvendo soluções front-end que fazem a diferença! "
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
      </article>
    </section>
  );
};

export default Intro;
