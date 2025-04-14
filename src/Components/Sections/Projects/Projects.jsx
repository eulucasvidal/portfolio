import React, { useRef, useEffect } from 'react';
import styles from '../Projects/Projects.module.css';
import Title from '../../Common/Title/Title';
import ProjectsCards from '../../Common/ProjectsCards/ProjectsCards';
import FadeIn from '../../Animation/FadeIn';

const Projects = () => {

  return (
    <section className={`${styles.projectsBg}`}>
        <article className={`${styles.projects} container`}>
          <FadeIn>
            <Title text="explore os meus" span="principais trabalhos"/>
            <div>
              <div className={`${styles.projectsContainer}`}>
                <ProjectsCards />
              </div>
            </div>
          </FadeIn>
        </article>
    </section>
  );
};

export default Projects;
