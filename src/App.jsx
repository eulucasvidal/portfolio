import React from 'react';
import '../src/Assets/Global/globalStyles.css';
import Header from './Components/Home/Header/Header';
import Intro from './Components/Home/Intro/Intro';
import About from './Components/Home/About/About';
import Projects from './Components/Home/Projects/Projects';
import Skills from './Components/Home/Skills/Skills';
import Footer from './Components/Home/Footer/Footer';


const App = () => {
  return (
    <>
    <Header/>
    <Intro/>
    <About/>
    <Projects/>
    <Skills/>
    <Footer/>
    </>
  );
};

export default App;
