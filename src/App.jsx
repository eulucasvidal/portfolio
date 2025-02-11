import React from 'react';
import '../src/Assets/Global/globalStyles.css';

import Header from './Components/Sections/Header/Header';
import Intro from './Components/Sections/Intro/Intro';
import About from './Components/Sections/About/About';
import Projects from './Components/Sections/Projects/Projects';
import Skills from './Components/Sections/Skills/Skills';
import Footer from './Components/Sections/Footer/Footer';


const App = () => {
  return (
    <>
    <Header/>
    <Intro/>
    <Projects/>
    <About/>
    <Skills/>
    <Footer/>
    </>
  );
};

export default App;
