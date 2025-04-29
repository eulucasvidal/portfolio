import React from 'react';
import styles from './SkillsItem.module.css';
import Subtitle from '../Subtitle/Subtitle';
import Paragraph from '../Paragraph/Paragraph';
import { number } from 'prop-types';
import { img, title } from 'framer-motion/client';

const SkillsItem = ({ skill }) => {
  return (
      <div className={`${styles.skillItem}`} key={skill.id}>
        <Subtitle
          text={skill.title}
          className={`${styles.skillsTitle}`}
        />
        <div className={`${styles.skillContainer}`}>
          <img src={skill.img} alt="aaaaa" />
          <div className={`${styles.skillInfo}`}>
            <Subtitle text={skill.subtitle} />
            <Paragraph
              text={skill.paragraph}
              className={`${styles.skillsParagraph}`}
            />
            <ul className={`${styles.skillListItem}`}>
              {skill.tech.map((tech, index) => (
                <li key={index}>
                  <span>{tech.name}</span>
                  <Paragraph text={tech.description} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
  );
};

export default SkillsItem;
