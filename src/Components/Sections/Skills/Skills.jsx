import React from 'react';
import styles from '../Skills/Skills.module.css';
import Title from '../../Common/Title/Title';
import SkillContent from '../../SkillComponents/SkillContent';
import FadeIn from '../../Animation/FadeIn';

const Skills = () => {
  return (
    <section className={`${styles.skillBg}`}>
      <FadeIn>
        <article className={`${styles.skills} container`}>
          <Title text="o que utilizo para criar os" span="melhores resultados"/>
          <SkillContent />
        </article>
      </FadeIn>
    </section>
  );
};

export default Skills;
