import React from 'react';
import styles from '../Skills/Skills.module.css';
import Title from '../../Common/Title/Title';
import Subtitle from '../../Common/Subtitle/Subtitle';
import SkillContent from '../../SkillComponents/SkillContent';
import FadeIn from '../../Animation/FadeIn';

const Skills = () => {
  return (
    <article className={`${styles.skillBg}`}>
      <FadeIn>
        <section className={`${styles.skills} container`}>
          <Title text="minhas habilidades" />
          <Subtitle text="habilidades técnicas e soft skills" />
          <SkillContent />
        </section>
      </FadeIn>
    </article>
  );
};

export default Skills;
