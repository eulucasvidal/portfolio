import React from 'react';
import styles from './ProjectsCards.module.css';
import Subtitle from '../../../Components/Common/Subtitle/Subtitle';
import Paragraph from '../../../Components/Common/Paragraph/Paragraph';
import Button from '../../../Utilities/Buttons/Button/Button';


/* Imports abaixo são das logos dos projetos */
import Logo1 from '../../../Assets/Img/Svg/logo-projects/bikestar.Svg';
import Logo2 from '../../../Assets/Img/Svg/logo-projects/saintrock.svg';
import Logo3 from '../../../Assets/Img/Svg/logo-projects/oceanbank.svg';
import Logo4 from '../../../Assets/Img/Svg/logo-projects/embreve.svg';
/* Imports abaixo são os Teaser de cada Card dos projetos */
import Img1 from '../../../Assets/Img/Projects/bikestar.png';
import Img2 from '../../../Assets/Img/Projects/saintrock.png';
import Img3 from '../../../Assets/Img/Projects/oceanbank.png';
import Img4 from '../../../Assets/Img/Projects/embreve.png';


const ProjectsCards = () => {
  const CardProjects = [
    {
      logo: Logo1,
      img: Img1,
      name: 'bikestar',
      typeProject: 'portal ecommerce',
      description: 'Bike Stars é um e-commerce de bicicletas desenvolvido com foco em uma experiência moderna e intuitiva para o usuário. Inspirado no projeto Bikecraft da Origamid, reestruturei todo o layout aplicando meus conhecimentos em UX e UI Design para criar uma interface mais atual e funcional. Mantive a essência do projeto original, aproveitando a paleta de cores como ponto de partida, mas redesenhei cada detalhe para garantir uma navegação fluida e um visual mais alinhado com as tendências atuais.',
      techs: ['HTML5','CSS3','JavaScript', 'Figma','UX/UI Design', 'Responsividade'],
      deploy:'https://mybikestar.netlify.app/',
      github:'https://github.com/eulucasvidal/bikestar',
    },
    {
      logo: Logo2,
      img: Img2,
      name: 'saintrock',
      typeProject: 'blog portal',
      description: 'Saintrock é um projeto de blog voltado para o universo streetwear, inspirado em plataformas como Sneakers News, ArtWalk e StockX. Desenvolvi esse projeto com o objetivo de praticar e aprofundar meus conhecimentos em Flexbox, Grid Layout e criação de interfaces do zero. Todo o design foi pensado para refletir a estética urbana e contemporânea do streetwear, buscando harmonia entre visual e funcionalidade, sempre com foco em uma experiência moderna e atrativa para o usuário.',
      techs: ['HTML5','CSS3','JavaScript', 'Figma','Display Flex', 'Display Grid', 'Responsividade'],
      deploy:'https://saintrock.netlify.app/',
      github:'https://github.com/eulucasvidal/saintrock',
    },
    {
      logo: Logo3,
      img: Img3,
      name: 'ocean bank',
      typeProject: 'landing page',
      description: 'OceanBank é uma landing page simples desenvolvida com HTML, CSS e JavaScript, com foco principal na organização estrutural do projeto. Mais do que o design ou funcionalidades complexas, esse projeto teve como objetivo aprimorar a estrutura de pastas, a semântica do HTML, o cuidado com clean code (CDO) e boas práticas que impactam diretamente na performance e manutenção de páginas web.',
      techs: ['HTML5','CSS3','JavaScript', 'Figma'],
      deploy:'https://ocean-bank.netlify.app/',
      github:'https://github.com/eulucasvidal/ocean-bank',
    },
    {
      logo: Logo4,
      img: Img4,
      name: 'Em breve',
      typeProject: 'Loading page',
      description: 'Projeto em breve para uma nova experiencia',
      techs: ['Sem Tech', 'Sem Tech', 'Sem Tech', 'Sem Tech'],
      deploy:'#',
      github:'#',
    },
  ];

  return (
    <div>
      {CardProjects.map((card, index) => (
        <div key={index} className={`${styles.cardContainer}`}>
          <div className={`${styles.cardInfo}`}>
            <img src={card.logo} alt="logotipo do projeto" />
            <Subtitle text={card.name} span={card.typeProject}/>
            <Paragraph text={card.description} />
            <ul className={`${styles.techsList}`}>
            {card.techs.map((tech, index) => (
              <li key={index}><span className={`${styles.spanTech}`}>{tech}</span></li>
            ))}
            </ul>
            <div className={`${styles.cardButtons}`}>
                <Button url={card.deploy} text="deploy"/>
                <Button url={card.github} text="github" />
              </div>
          </div>
          <img src={card.img} alt="imagem do projeto"/>
        </div>
      ))}
    </div>
  );
};

export default ProjectsCards;
