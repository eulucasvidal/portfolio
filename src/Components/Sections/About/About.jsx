import React from 'react';
import styles from '../About/About.module.css';
import Title from '../../Common/Title/Title';
import Subtitle from '../../Common/Subtitle/Subtitle';
import imgCartoon from '../../../../public/ImagesCartoons/cartoon-about.png';
import SocialMidia from '../../SocialMidia/SocialMidia';
import FadeIn from '../../Animation/FadeIn';


const About = () => {
  return (
    <article className={`${styles.aboutBg}`}>
      <section className={`${styles.about} container`}>
        <FadeIn>
        <Title text="alem do front end"/>
        <div className={`${styles.aboutContent}`}>
          <div className={`${styles.aboutImg}`}>
            <Subtitle text="sobre mim"/>
            <img src={imgCartoon} alt="Imagen cartoon da seção about" />
          </div>
          <div className={`${styles.aboutInfo}`}>
            <FadeIn>
            <p className="fontXsb">
              "Olá, eu sou Lucas Gonçalves e trabalho com desenvolvimento front-end. Gosto de criar interfaces funcionais e bem construídas, sempre focadas em uma boa experiência para o usuário."
            </p>
            <div className={`${styles.aboutText}`}>
              <FadeIn>
              <span className="fontXsb">(Sobre Mim)</span>
              <p className="fontXs">
              Atualmente morando na cidade turística de São Roque/SP, comecei trabalhando em empregos variados, como manutenção de internet e área de vendas no setor varejista entre outros.
              </p>
              <p className="fontXs">
              Embora o turismo seja a principal fonte de emprego na região, meu verdadeiro interesse sempre foi a tecnologia.
              </p>
              <p className="fontXs">Após conhecer pessoas que trabalhavam com tecnologia, fui apresentado à programação há cerca de 4 anos. Desde então, tenho estudado e me dedicado à criação de interfaces e aplicações por meio de graduações a distância.</p>
              <SocialMidia/>
              </FadeIn>
            </div>
            </FadeIn>
          </div>
        </div>
        </FadeIn>
      </section>
    </article>
  );
};

export default About;
