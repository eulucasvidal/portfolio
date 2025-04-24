import React from 'react';
import styles from '../Skills/Skills.module.css';
import SkillsItem from '../../SkillsItem/SkillsItem';
import AnimateTilte from '../../Common/AnimateTitle/AnimateTitle';
import FadeIn from '../../Animation/FadeIn';
import Subtitle from '../../Common/Subtitle/Subtitle';

const Skills = () => {
  const fraseSkills = ['habilidades', 'que criam', 'experiências'];
  return (
    <section className={`${styles.skillBg}`}>
      <AnimateTilte words={fraseSkills} />
      <FadeIn>
        <article className={`${styles.skills} container`}>
          <Subtitle text="Habilidades" />
          <div className={`${styles.skillsContainer}`}>
            <SkillsItem />
          </div>
        </article>
      </FadeIn>
    </section>
  );
};

export default Skills;
