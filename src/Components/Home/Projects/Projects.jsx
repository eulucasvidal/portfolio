import React, { useRef, useEffect } from 'react';
import styles from '../Projects/Projects.module.css';
import ProjectsCards from '../../Common/ProjectsCards/ProjectsCards';
import FadeIn from '../../Animation/FadeIn';
import AnimateTilte from '../../Common/AnimateTitle/AnimateTitle';
const Projects = () => {
  const fraseProjects = ['explore meus', 'principais', 'trabalhos'];
  return (
    <section className={`${styles.projectsBg}`}>
        <AnimateTilte words={fraseProjects} />
        <article className={`${styles.projects} container`}>
          <FadeIn>
            <div className={`${styles.projectsContainer}`}>
                <ProjectsCards />
            </div>
          </FadeIn>
        </article>
    </section>
  );
};

export default Projects;
