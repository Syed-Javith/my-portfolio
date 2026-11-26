import { useEffect } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Home from './components/Home/Home';
import Experience from './components/Experience/Experience';
import ProgressBar from './components/ProgressBar/ProgressBar';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import ChatWidget from './components/ChatWidget/ChatWidget';

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <ProgressBar />
      <NavBar />
      <Home />
      <Experience />
      <About />
      <Skills />
      <Projects />
      <Footer />
      {/* Floating AI Assistant Powered by Langflow & Gemini */}
      <ChatWidget />
    </div>
  );
}

export default App;
