import React from 'react';
import styles from '../Intro/Intro.module.css';
import SocialMidia from '../../SocialMidia/SocialMidia';
import ImageLocal from '../../../Assets/Img/Svg/Icons/local.svg';
import FadeIn from '../../Animation/FadeIn';
import Title from '../../Common/Title/Title';

const Intro = () => {
  return (
    <section className={`${styles.introBg}`}>
      <article className={`container`}>
        <div className={`${styles.intro}`}>
          <FadeIn>
            <Title text="Lucas Vidal"/>
            <div className="detailLocal">
              <img src={ImageLocal} alt="Icon localization" />
              <span className='corBlack'>São Roque, SP / Brasil</span>
            </div>
            <SocialMidia />
          </FadeIn>
        </div>
      </article>
    </section>
  );
};

export default Intro;
