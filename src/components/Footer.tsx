import React from 'react';
import { Terminal, Github, Linkedin, Mail } from 'lucide-react';

const mono = { fontFamily: "'Share Tech Mono', monospace" };

const Footer = () => {
  const quickLinks = [
    { name: './home', href: '#home' },
    { name: './about', href: '#about' },
    { name: './projects', href: '#projects' },
    { name: './resume', href: '#resume' },
    { name: './blog', href: '#blog' },
    { name: './contact', href: '#contact' },
  ];

  const resources = [
    { name: './download_resume.sh', href: '/Sulakshan_Joshi__Resume.pdf', download: 'Sulakshan_Joshi__Resume.pdf' },
    { name: './github_portfolio', href: 'https://github.com/Sulakshan69' },
    { name: './linkedin_profile', href: 'https://www.linkedin.com/in/sulakshan-joshi/' },
    { name: './send_email.sh', href: 'mailto:Sulakshanjoshi1@gmail.com' },
  ] as const;

  return (
    <footer
      style={{
        background: '#000000',
        borderTop: '1px solid rgba(0,255,65,0.15)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Terminal className="h-6 w-6" style={{ color: '#00ff41', filter: 'drop-shadow(0 0 4px #00ff41)' }} />
              <span className="text-base font-bold glow-green-text-sm" style={{ color: '#00ff41', ...mono }}>
                sulakshan@sec
              </span>
            </div>
            <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)', ...mono }}>
              Aspiring Cybersecurity Professional passionate about digital forensics,
              SOC operations, and ethical hacking. Currently studying at UWE.
            </p>
            <div className="flex space-x-3">
              {[
                { href: 'https://github.com/Sulakshan69', icon: <Github className="h-4 w-4" /> },
                { href: 'https://www.linkedin.com/in/sulakshan-joshi/', icon: <Linkedin className="h-4 w-4" /> },
                { href: 'mailto:sulakshanjoshi1@gmail.com', icon: <Mail className="h-4 w-4" /> },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="transition-all duration-200"
                  style={{ color: 'rgba(0,255,65,0.45)' }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.color = '#00ff41';
                    el.style.filter = 'drop-shadow(0 0 4px #00ff41)';
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.color = 'rgba(0,255,65,0.45)';
                    el.style.filter = 'none';
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="text-xs mb-4" style={{ color: 'rgba(0,255,65,0.4)', ...mono }}>// quick_links</div>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-xs transition-all duration-200"
                    style={{ color: 'rgba(0,255,65,0.5)', ...mono }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLAnchorElement;
                      el.style.color = '#00ff41';
                      el.style.textShadow = '0 0 6px #00ff41';
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLAnchorElement;
                      el.style.color = 'rgba(0,255,65,0.5)';
                      el.style.textShadow = 'none';
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs mb-4" style={{ color: 'rgba(0,255,65,0.4)', ...mono }}>// resources</div>
            <ul className="space-y-2">
              {resources.map((resource, index) => (
                <li key={index}>
                  <a
                    href={resource.href}
                    download={(resource as { download?: string }).download}
                    target={resource.href.startsWith('http') ? '_blank' : undefined}
                    rel={resource.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-xs transition-all duration-200"
                    style={{ color: 'rgba(0,255,65,0.5)', ...mono }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLAnchorElement;
                      el.style.color = '#00ff41';
                      el.style.textShadow = '0 0 6px #00ff41';
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLAnchorElement;
                      el.style.color = 'rgba(0,255,65,0.5)';
                      el.style.textShadow = 'none';
                    }}
                  >
                    {resource.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs mb-4" style={{ color: 'rgba(0,255,65,0.4)', ...mono }}>// contact_info</div>
            <div className="space-y-2 text-xs" style={{ color: 'rgba(255,255,255,0.4)', ...mono }}>
              <p>
                <span style={{ color: 'rgba(0,255,65,0.6)' }}>email: </span>
                sulakshanjoshi1@gmail.com
              </p>
              <p>
                <span style={{ color: 'rgba(0,255,65,0.6)' }}>location: </span>
                Kathmandu, Nepal
              </p>
              <p>
                <span style={{ color: 'rgba(0,255,65,0.6)' }}>university: </span>
                UWE Bristol
              </p>
            </div>
          </div>
        </div>

        <div
          className="mt-12 pt-8"
          style={{ borderTop: '1px solid rgba(0,255,65,0.1)' }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs" style={{ color: 'rgba(0,255,65,0.35)', ...mono }}>
              [*] Copyright (C) 2024 Sulakshan Joshi. All rights reserved.
            </p>
            <p className="text-xs" style={{ color: 'rgba(0,255,65,0.35)', ...mono }}>
              root@sec-portfolio:~$ <span className="cursor-blink">_</span>
            </p>
          </div>
          <div className="text-center mt-4">
            <p className="text-xs" style={{ color: 'rgba(0,255,65,0.2)', ...mono }}>
              // cybersecurity_excellence | Nepal to UK | v2.0.0
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
