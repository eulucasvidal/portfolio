import React from 'react';
import styles from '../Skills/Skills.module.css';
import SkillContent from '../../SkillComponents/SkillContent';
import FadeIn from '../../Animation/FadeIn';
import AnimateTilte from '../../Common/AnimateTitle/AnimateTitle';

const Skills = () => {
  const fraseSkills = ['habilidades','que criam','experiências'];
  return (
    <section className={`${styles.skillBg}`}>
      <AnimateTilte words={fraseSkills} />
      <FadeIn>
        <article className={`${styles.skills} container`}>
          <SkillContent />
        </article>
      </FadeIn>
    </section>
  );
};

export default Skills;
