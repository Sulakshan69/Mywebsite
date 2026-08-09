import React from 'react';
import { ArrowDown, Github, Linkedin } from 'lucide-react';
import TypingAnimation from './TypingAnimation';

const Hero = () => {
  const typingTexts = [
    'Cybersecurity Student',
    'SOC Analyst in Training',
    'Digital Forensics Explorer',
    'Cyber Defense Enthusiast',
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
      style={{ background: '#000000' }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,255,65,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,65,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(0,255,65,0.05) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-8">
          <div className="space-y-4 pt-8">
            <div
              className="text-sm mb-2"
              style={{
                color: 'rgba(0,255,65,0.5)',
                fontFamily: "'Share Tech Mono', monospace",
              }}
            >
              $ whoami
            </div>
            <h1
              className="text-5xl md:text-7xl font-bold flicker"
              style={{
                color: '#ffffff',
                fontFamily: "'Share Tech Mono', monospace",
                textShadow: '0 0 2px #fff',
              }}
            >
              Hi, I'm{' '}
              <span className="glow-green-text" style={{ color: '#00ff41' }}>
                Sulakshan Joshi
              </span>
            </h1>
            <div
              className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed min-h-[3rem] flex items-center justify-center"
              style={{ fontFamily: "'Share Tech Mono', monospace" }}
            >
              <span style={{ color: 'rgba(0,255,65,0.5)' }}>role: </span>
              <TypingAnimation
                texts={typingTexts}
                typingSpeed={70}
                deletingSpeed={35}
                pauseDuration={2500}
                className="glow-green-text-sm ml-2"
                style={{ color: '#00ff41' }}
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#projects"
              className="btn-terminal px-8 py-3 rounded text-sm"
              style={{ fontFamily: "'Share Tech Mono', monospace" }}
            >
              ./view_projects.sh
            </a>
            <a
              href="/Sulakshan_Joshi__Resume.pdf"
              download="Sulakshan_Joshi__Resume.pdf"
              className="btn-terminal px-8 py-3 rounded text-sm"
              style={{ fontFamily: "'Share Tech Mono', monospace" }}
            >
              ./download_cv.sh
            </a>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/Sulakshan69"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-200"
              style={{ color: 'rgba(0,255,65,0.5)' }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.color = '#00ff41';
                el.style.filter = 'drop-shadow(0 0 6px #00ff41)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.color = 'rgba(0,255,65,0.5)';
                el.style.filter = 'none';
              }}
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/sulakshan-joshi/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-200"
              style={{ color: 'rgba(0,255,65,0.5)' }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.color = '#00ff41';
                el.style.filter = 'drop-shadow(0 0 6px #00ff41)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.color = 'rgba(0,255,65,0.5)';
                el.style.filter = 'none';
              }}
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <ArrowDown
            className="h-6 w-6 animate-bounce"
            style={{ color: '#00ff41', filter: 'drop-shadow(0 0 4px #00ff41)' }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
