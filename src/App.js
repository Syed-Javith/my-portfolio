import { useEffect, useState } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Home from './components/Home/Home';
import ProgressBar from './components/ProgressBar/ProgressBar';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import About from './components/About/About';
function App() {
  useEffect(()=>{
    AOS.init();
  })
 
  return (
    <div>
      <ProgressBar/>      
      <NavBar />
      <Home />
      <About/>
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
