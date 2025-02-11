import React from 'react';
import styles from '../../Components/SkillComponents/SkillContent.module.css';
import { number } from 'prop-types';

const SkillContent = () => {
  const mainSkills = [
    {
      id: 1,
      number: '( 01 )',
      titulo: 'Tecnologias',
      frase:
        ' Ao longo de minha experiencia eu escolhi algumas tecnologias para eu me especializar e ter o melhor desempenho nos projetos.',
      itens: [
        {
          nome: 'React: ',
          descricao:
            ' Desenvolvimento de interfaces dinâmicas e interativas utilizando componentes funcionais e hooks como useState, useEffect, useRef, entre outros',
        },
        {
          nome: 'JavaScript (ES6+):',
          descricao:
            ' Manipulação de DOM, criação de funções assíncronas, e uso de APIs modernas.',
        },
        {
          nome: 'HTML5 & CSS3:',
          descricao:
            ' Estruturação semântica de páginas, utilização de Flexbox e Grid além de estilização avançada.',
        },
        {
          nome: 'SASS:',
          descricao:
            ' Pré-processamento de CSS para facilitar manutenção e reutilização de código, uso de variáveis, mixins e funções.',
        },
        {
          nome: 'CSS-in-JS:',
          descricao:
            ' Estilização de componentes utilizando bibliotecas como Styled-components.',
        },
        {
          nome: 'Git & GitHub:',
          descricao:
            ' Controle de versão, gerenciamento de branches e colaboração em projetos.',
        },
        {
          nome: 'VS Code:',
          descricao:
            ' Editor de código com personalização de plugins e atalhos.',
        },
      ],
    },
    {
      id: 2,
      number: '( 02 )',
      titulo: 'Trabalho em Equipe',
      frase:
        ' Uma das minhas principais virtudes, ao longo de minha carreira mesmo fora da area de tecnologia, é o trabalho em equipe.',
      itens: [
        {
          nome: 'Comunicação Clara:',
          descricao:
            ' Tenho facilidade para discutir ideias e colaborar com outros desenvolvedores, sempre buscando alinhar expectativas e objetivos.',
        },
        {
          nome: 'Resolução de Conflitos:',
          descricao:
            ' Capacidade de lidar com opiniões divergentes de forma construtiva e focada na solução.',
        },
        {
          nome: 'Abertura ao Feedback:',
          descricao:
            ' Busco sempre aprender e crescer com o feedback, entendendo que isso é essencial para o desenvolvimento pessoal e do time.',
        },
        {
          nome: 'Pro atividade:',
          descricao:
            ' Gosto de identificar e sugerir melhorias no projeto, além de ajudar a resolver desafios técnicos da equipe.',
        },
      ],
    },
    {
      id: 3,
      number: '( 03 )',
      titulo: 'Principais Habilidades',
      frase:
        ' Além de aprender sobre as tecnologias é muito importante ter algumas habilidades, para lidar com essas e mais tecnologias na pratica.',
      itens: [
        {
          nome: 'Desenvolvimento Responsivo:',
          descricao:
            ' Experiência em criar layouts que se adaptam a diferentes dispositivos, utilizando media queries e técnicas de design flexível.',
        },
        {
          nome: 'Otimização de Performance:',
          descricao:
            ' Técnicas de lazy loading, code splitting com React, e otimização de imagens para melhorar o tempo de carregamento.',
        },
        {
          nome: 'Acessibilidade:',
          descricao:
            ' Conhecimento de boas práticas de acessibilidade (WCAG), como navegação por teclado, leitura por screen readers, e uso correto de atributos ARIA.',
        },
        {
          nome: 'Integração com APIs REST:',
          descricao:
            ' Consumo de APIs, tratamento de dados assíncronos e manipulação de respostas em JSON.',
        },
        {
          nome: 'Versionamento Semântico:',
          descricao:
            ' Uso de boas práticas de versionamento e controle de dependências.',
        },
        {
          nome: 'UX/UI Design:',
          descricao:
            ' Aplicação de princípios de design centrado no usuário para melhorar a usabilidade e a experiência em interfaces, garantindo uma navegação fluida e visualmente agradável, com auxílio do Figma para prototipagem e colaboração.',
        },
      ],
    },
  ];

  return (
    <>
      {mainSkills.map((skill) => (
        <div className={`${styles.skillItem}`} key={skill.id}>
          <span className="fontLb">{skill.number}</span>
          <div className={`${styles.skillItemText}`}>
            <h2 className="fontLb detail">{skill.titulo}</h2>
            <p className="fontXsb">{skill.frase}</p>
            {skill.itens.map((item, index) => (
              <ul className={`${styles.skillList} fontXs`} key={index}>
                <li className="detailList">
                  <span className="fontSb corDetail">{item.nome}</span>
                  {item.descricao}
                </li>
              </ul>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default SkillContent;
