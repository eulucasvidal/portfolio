import React from 'react';
import styles from '../ProjectsCards/ProjectsCards.module.css';
/* Imports abaixo são os Backgrounds de cada Card dos projetos */
import BgCard1 from '../../Assets/Img/Images/Background/bg1.png';
import BgCard2 from '../../Assets/Img/Images/Background/bg2.png';
import BgCard3 from '../../Assets/Img/Images/Background/bg3.png';
import BgCard4 from '../../Assets/Img/Images/Background/bg4.png';

/* Imports abaixo são os Teaser de cada Card dos projetos */

import Teaser1 from '../../Assets/Img/Videos/projeto1.mp4';
import Teaser2 from '../../Assets/Img/Videos/projeto2.mp4';
import Teaser3 from '../../Assets/Img/Videos/projeto3.mp4';
import Teaser4 from '../../Assets/Img/Videos/projeto4.mp4';
import Button from '../../Utilities/Buttons/Button/Button';

const ProjectsCards = () => {
  const CardProjects = [
    {
      detail: '01',
      background: BgCard1,
      video: Teaser1,
      paragrafo: 'Um blog sobre a cultura dos tenis.',
      nome: 'SaintRock',
      deploy:'https://saintrock.netlify.app/',
      github:'https://github.com/eulucasvidal/saintrock',
    },
    {
      detail: '02',
      background: BgCard2,
      video: Teaser2,
      paragrafo: 'O banco feito pra você.',
      nome: 'Ocean Bank',
      deploy:'https://ocean-bank.netlify.app/',
      github:'https://github.com/eulucasvidal/ocean-bank',
    },
    {
      detail: '03',
      background: BgCard3,
      video: Teaser3,
      paragrafo: 'Que tal adquirir as maquinas mais emblematicas.',
      nome: 'Forza Motors Imports',
      deploy:'#',
      github:'',
    },
    {
      detail: '04',
      background: BgCard4,
      video: Teaser4,
      paragrafo: 'Uma seleção de artes do tatuador Gustavo Bill.',
      nome: 'InkBill Tattoo',
      deploy:'#',
      github:'',
    },
  ];

  return (
    <div>
      {CardProjects.map((card, index) => (
        <div key={index} className={`${styles.cardContainer}`}>
          <span className="numberDetail">
            {card.detail}
            <span>.</span>
          </span>
          <div>
            <div>
              <video
                src={card.video}
                className={`${styles.video}`}
                autoPlay
                muted
                loop
                style={{
                  backgroundImage: `url(${card.background})`,
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}
              ></video>
            </div>
            <div className={`${styles.cardInfo}`}>
              <div>
                <p className="fontXs">{card.paragrafo}</p>
                <h3 className="fontLb">{card.nome}</h3>
              </div>
              <div className={`${styles.cardButtons}`}>
                <Button url={card.deploy} text="deploy"/>
                <Button url={card.github} text="github" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectsCards;
