import React, {useEffect, useState} from 'react';
import styles from '../Skills/Skills.module.css';
import SkillsItem from '../../Common/SkillsItem/SkillsItem';
import AnimateTilte from '../../Common/AnimateTitle/AnimateTitle';
import FadeIn from '../../Animation/FadeIn';
import Subtitle from '../../Common/Subtitle/Subtitle';
/*  Import das imagens*/
import Cartoon1 from '../../../Assets/Img/ImagesCartoons/cartoon-1.png';
import Cartoon2 from '../../../Assets/Img/ImagesCartoons/cartoon-2.png';
import Cartoon3 from '../../../Assets/Img/ImagesCartoons/cartoon-3.png';

const Skills = () => {

  const mainSkills = [
    {
      id: 1,
      title: 'digitais',
      subtitle: 'tecnologias',
      gradientColor: 'gradientBlue',
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
    {
      id: 2,
      title: 'tecnicas',
      subtitle: 'principais habilidades',
      gradientColor: 'gradientOrange',
      img: Cartoon2,
      paragraph:
        'Além de aprender sobre as tecnologias é muito importante ter algumas habilidades, para lidar com essas e mais tecnologias na pratica.',
      tech: [
        {
          name: 'Desenvolvimento Responsivo:',
          description:
            'Experiência em criar layouts que se adaptam a diferentes dispositivos, utilizando media queries e técnicas de design flexível.',
        },
        {
          name: 'Otimização de Performance:',
          description:
            'Técnicas de lazy loading, code splitting com React, e otimização de imagens para melhorar o tempo de carregamento.',
        },
        {
          name: 'Acessibilidade: ',
          description:
            'Conhecimento de boas práticas de acessibilidade (WCAG), como navegação por teclado, leitura por screen readers, e uso correto de atributos ARIA.',
        },
        {
          name: 'Versionamento Semântico:',
          description:
            'Uso de boas práticas de versionamento e controle de dependências.',
        },
        {
          name: 'UX/UI Design:',
          description:
            'Aplicação de princípios de design centrado no usuário para melhorar a usabilidade e a experiência em interfaces, garantindo uma navegação fluida e visualmente agradável, com auxílio do Figma para prototipagem e colaboração.',
        },
      ],
    },
    {
      id: 3,
      title: 'colaborativas',
      subtitle: 'trabalho em equipe',
      gradientColor: 'gradientGreen',
      img: Cartoon3,
      paragraph:
        'Uma das minhas principais virtudes, ao longo de minha carreira mesmo fora da area de tecnologia, é o trabalho em equipe.',
      tech: [
        {
          name: 'Comunicação Clara:',
          description:
            'Tenho facilidade para discutir ideias e colaborar com outros desenvolvedores, sempre buscando alinhar expectativas e objetivos.',
        },
        {
          name: 'Resolução de Conflitos:',
          description:
            'Capacidade de lidar com opiniões divergentes de forma construtiva e focada na solução.',
        },
        {
          name: 'Abertura ao Feedback:',
          description:
            'Busco sempre aprender e crescer com o feedback, entendendo que isso é essencial para o desenvolvimento pessoal e do time.',
        },
        {
          name: 'Pro atividade: ',
          description:
            'Gosto de identificar e sugerir melhorias no projeto, além de ajudar a resolver desafios técnicos da equipe.',
        },
      ],
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSkills = mainSkills.length;

  const nextItem = () =>{
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSkills);
  };
  const prevItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSkills) % totalSkills);
  }
  useEffect(()=>{
    const intervalId = setInterval(nextItem, 5000);

    return() => clearInterval(intervalId);
  },[])


  const fraseSkills = ['habilidades', 'que criam', 'experiências'];
  return (
    <section className={`${styles.skillBg}`}>
      <AnimateTilte words={fraseSkills} />
      <FadeIn>
        <article className={`${styles.skills} container`}>
          <Subtitle text="Habilidades" />
          <div className={`${styles.arrows}`}>
            <button className={`${styles.arrowBtn}`} onClick={prevItem} id='prev'></button>
            <button className={`${styles.arrowBtn}`} onClick={nextItem} id='next'></button>
          </div>
          <div className={`${styles.skillsContainer}`}>
            <SkillsItem  skill={mainSkills[currentIndex]}/>
          </div>
        </article>
      </FadeIn>
    </section>
  );
};

export default Skills;
