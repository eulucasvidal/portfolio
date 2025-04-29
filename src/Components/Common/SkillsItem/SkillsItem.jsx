import React from 'react';
import styles from './SkillsItem.module.css';
import Subtitle from '../Subtitle/Subtitle';
import Paragraph from '../Paragraph/Paragraph';
import { number } from 'prop-types';
import { img, title } from 'framer-motion/client';

/*  Import das imagens*/
import Cartoon1 from '../../../Assets/Img/ImagesCartoons/cartoon-1.png';
import Cartoon2 from '../../../Assets/Img/ImagesCartoons/cartoon-2.png';
import Cartoon3 from '../../../Assets/Img/ImagesCartoons/cartoon-3.png';

const SkillsItem = () => {
  const mainSkills = [
    {
      id: 1,
      title: 'colaborativas',
      subtitle: 'tecnologias',
      gradientColor: 'gradientOrange',
      img: Cartoon1,
      paragraph:
        'Ao longo de minha experiencia eu escolhi algumas tecnologias para eu me especializar e ter o melhor desempenho nos projetos.',
      tech: [
        {
          name: 'React',
          description:
            'Desenvolvimento de interfaces dinâmicas e interativas utilizando componentes funcionais e hooks como useState, useEffect, useRef, entre outros',
        },
        {
          name: 'JavaScript (ES6+)',
          description:
            'Manipulação de DOM, criação de funções assíncronas, e uso de APIs modernas.',
        },
        {
          name: 'HTML5 & CSS3',
          description:
            'Estruturação semântica de páginas, utilização de Flexbox e Grid, e estilização avançada.',
        },
        {
          name: 'SASS',
          description:
            'Pré-processamento de CSS para facilitar manutenção e reutilização de código, uso de variáveis, mixins e funções.',
        },
        {
          name: 'Git & GitHub',
          description:
            'Controle de versão, gerenciamento de branches e colaboração em projetos.',
        },
        {
          name: 'VS Code',
          description:
            'Editor de código com personalização de plugins, atalhos além de diversas outras ferramentas.',
        },
      ],
    },
  ];

  return (
    <>
      {mainSkills.map((skill) => (
        <div className={`${styles.skillItem}`} key={skill.id}>
          <Subtitle
            text={skill.title}
            className={`${styles.skillsTitle} ${styles[skill.gradientColor]}`}
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
      ))}
    </>
  );
};

export default SkillsItem;
