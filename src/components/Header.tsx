import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, Download } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { name: 'home', href: '#home' },
    { name: 'about', href: '#about' },
    { name: 'projects', href: '#projects' },
    { name: 'resume', href: '#resume' },
    { name: 'blog', href: '#blog' },
    { name: 'contact', href: '#contact' },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(0,0,0,0.97)' : 'rgba(0,0,0,0.8)',
        borderBottom: '1px solid rgba(0,255,65,0.2)',
        boxShadow: scrolled ? '0 0 24px rgba(0,255,65,0.08)' : 'none',
        backdropFilter: 'blur(12px)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Terminal className="h-5 w-5" style={{ color: '#00ff41' }} />
            <span
              className="text-base font-bold glow-green-text-sm"
              style={{ color: '#00ff41', fontFamily: "'Share Tech Mono', monospace" }}
            >
              sulakshan@portfolio:~$
            </span>
            <span className="cursor-blink" style={{ color: '#00ff41' }}>█</span>
          </div>

          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-3 py-1.5 text-sm rounded transition-all duration-200"
                style={{
                  color: 'rgba(0,255,65,0.6)',
                  fontFamily: "'Share Tech Mono', monospace",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.color = '#00ff41';
                  el.style.textShadow = '0 0 8px #00ff41';
                  el.style.background = 'rgba(0,255,65,0.07)';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.color = 'rgba(0,255,65,0.6)';
                  el.style.textShadow = 'none';
                  el.style.background = 'transparent';
                }}
              >
                ./{item.name}
              </a>
            ))}
            <button
              className="btn-terminal flex items-center space-x-2 px-4 py-2 ml-2 text-sm rounded"
              style={{ fontFamily: "'Share Tech Mono', monospace" }}
            >
              <Download className="h-4 w-4" />
              <span>./cv.pdf</span>
            </button>
          </nav>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              style={{ color: '#00ff41' }}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div
            className="md:hidden pb-4"
            style={{ borderTop: '1px solid rgba(0,255,65,0.15)' }}
          >
            <div className="flex flex-col space-y-1 pt-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="px-3 py-2 text-sm rounded transition-all duration-200"
                  style={{
                    color: 'rgba(0,255,65,0.8)',
                    fontFamily: "'Share Tech Mono', monospace",
                  }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span style={{ color: '#00ff41' }}>$ </span>
                  cd {item.name}
                </a>
              ))}
              <button
                className="btn-terminal flex items-center justify-center space-x-2 px-4 py-2 mt-2 text-sm rounded"
                style={{ fontFamily: "'Share Tech Mono', monospace" }}
              >
                <Download className="h-4 w-4" />
                <span>./download_cv.sh</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
