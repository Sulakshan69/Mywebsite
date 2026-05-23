import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MatrixBackground from './components/MatrixBackground';

function App() {
  return (
    <div className="min-h-screen" style={{ background: '#000000', color: '#00ff41' }}>
      <MatrixBackground />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Header />
        <main>
          <Hero />
          <About />
          <Projects />
          <Resume />
          <Blog />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;