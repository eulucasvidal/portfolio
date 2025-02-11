import React, { useRef, useEffect } from 'react';
import styles from '../Projects/Projects.module.css';
import Title from '../../Common/Title/Title';
import Subtitle from '../../Common/Subtitle/Subtitle';
import ProjectsCards from '../../ProjectsCards/ProjectsCards';
import FadeIn from '../../Animation/FadeIn';

const Projects = () => {

  return (
    <article className={`${styles.projectsBg}`}>
      <section className={`${styles.projectsContentBg}`}>
        <div className={`${styles.projects} container`}>
          <FadeIn>
            <Title text="projetos recentes" />
            <div className={`${styles.projectsInfo}`}>
              <Subtitle text="projetos" />
              <p className="fontXsb">
                Apresentou projetos que ter estive meticulosamente feito a mão
                com paixão para dirigir resultados e impacto
              </p>
            </div>
            <div className={`${styles.projectsContainer}`}>
              <ProjectsCards />
            </div>
          </FadeIn>
        </div>
      </section>
    </article>
  );
};

export default Projects;
