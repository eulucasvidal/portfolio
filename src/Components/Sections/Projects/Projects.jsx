import React, { useRef, useEffect } from 'react';
import styles from '../Projects/Projects.module.css';
import Title from '../../Common/Title/Title';
import Subtitle from '../../Common/Subtitle/Subtitle';
import ProjectsCards from '../../ProjectsCards/ProjectsCards';
import FadeIn from '../../Animation/FadeIn';

const Projects = () => {

  return (
    <section className={`${styles.projectsBg}`}>
      <article className={`${styles.projectsContentBg}`}>
        <div className={`${styles.projects} container`}>
          <FadeIn>
            <Title text="projetos recentes" />
            <div>
              <div className={`${styles.projectsInfo}`}>
                <Subtitle text="projetos" />
                <p className="fontSb">
                  " Explore os projetos mais recentes onde aplico minhas habilidades para criar interfaces e soluções inovadoras. "
                </p>
              </div>
              <div className={`${styles.projectsContainer}`}>
                <ProjectsCards />
              </div>
            </div>
          </FadeIn>
        </div>
      </article>
    </section>
  );
};

export default Projects;
