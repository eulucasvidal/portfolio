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
              Com um paixão para projeto e desenvolvimento,EU pegar projetos de
              ideação para lançar, garantindo um sem costura jornada que folhas
              um duradouro positivo impacto sobre o digital paisagem e seu
              negócios.
            </p>
            <div className={`${styles.aboutText}`}>
              <FadeIn>
              <span className="fontXsb">(Sobre Mim)</span>
              <p className="fontXs">
                Criar ótimas experiências na web é meu foco principal. Garanto
                que cada projeto deixe os usuários com uma sensação de bem-estar
                por meio de atenção meticulosa aos detalhes e princípios de
                design centrados no usuário.
              </p>
              <p className="fontXs">
                Quando não estou imerso em desenvolvimento e design da web, você
                pode me encontrar compartilhando insights sobre minha jornada
                freelance no YouTube, praticando escalada, tocando música ou
                cuidando das minhas queridas plantas domésticas.
              </p>
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
