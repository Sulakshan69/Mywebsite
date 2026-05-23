import React from 'react';
import { Shield, Monitor, Code, Search, Brain, Users } from 'lucide-react';

const sectionStyle = { background: '#000000' };
const cardStyle = {
  background: 'rgba(0,0,0,0.9)',
  border: '1px solid rgba(0,255,65,0.2)',
  transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
};
const cardHoverIn = (el: HTMLElement) => {
  el.style.borderColor = 'rgba(0,255,65,0.6)';
  el.style.boxShadow = '0 0 16px rgba(0,255,65,0.12)';
};
const cardHoverOut = (el: HTMLElement) => {
  el.style.borderColor = 'rgba(0,255,65,0.2)';
  el.style.boxShadow = 'none';
};

const About = () => {
  const skills = [
    { icon: <Monitor className="h-5 w-5" />, title: 'SOC Monitoring', description: 'Wazuh, SIEM, Security Analytics' },
    { icon: <Shield className="h-5 w-5" />, title: 'Networking & Linux', description: 'Network Security, Linux Administration' },
    { icon: <Code className="h-5 w-5" />, title: 'Python for Security', description: 'Security Automation, Scripting' },
    { icon: <Search className="h-5 w-5" />, title: 'Vulnerability Analysis', description: 'Penetration Testing, Security Assessment' },
    { icon: <Brain className="h-5 w-5" />, title: 'Critical Thinking', description: 'Problem Solving, Analytical Skills' },
    { icon: <Users className="h-5 w-5" />, title: 'Collaboration', description: 'Team Work, Communication' },
  ];

  return (
    <section id="about" className="py-20" style={sectionStyle}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <div
            className="text-xs mb-2"
            style={{ color: 'rgba(0,255,65,0.4)', fontFamily: "'Share Tech Mono', monospace" }}
          >
            $ ls -la ./about/
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold glow-green-text mb-2"
            style={{ color: '#00ff41', fontFamily: "'Share Tech Mono', monospace" }}
          >
            &gt; about_me
          </h2>
          <div style={{ width: '120px', height: '1px', background: 'rgba(0,255,65,0.4)', boxShadow: '0 0 8px rgba(0,255,65,0.4)' }} />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div
              className="rounded p-8"
              style={cardStyle}
              onMouseEnter={(e) => cardHoverIn(e.currentTarget)}
              onMouseLeave={(e) => cardHoverOut(e.currentTarget)}
            >
              <div
                className="text-xs mb-4"
                style={{ color: 'rgba(0,255,65,0.4)', fontFamily: "'Share Tech Mono', monospace" }}
              >
                cat ./my_journey.txt
              </div>
              <h3
                className="text-xl font-bold mb-4"
                style={{ color: '#00ff41', fontFamily: "'Share Tech Mono', monospace" }}
              >
                My Journey
              </h3>
              <p
                className="leading-relaxed mb-4 text-sm"
                style={{ color: 'rgba(255,255,255,0.75)', fontFamily: "'Share Tech Mono', monospace" }}
              >
                I'm a dedicated Cybersecurity and Digital Forensics student at the University of the West of England (UWE),
                with a deep passion for ethical hacking, SOC analysis, and cyber defense. Originally from the beautiful
                mountains of Nepal, I've embarked on an international journey to become a cybersecurity expert.
              </p>
              <p
                className="leading-relaxed mb-6 text-sm"
                style={{ color: 'rgba(255,255,255,0.75)', fontFamily: "'Share Tech Mono', monospace" }}
              >
                My fascination with cybersecurity began with understanding how digital systems can be both vulnerable
                and resilient. Through hands-on learning and practical projects, I've developed expertise in security
                monitoring, digital forensics, and threat analysis.
              </p>
              <div
                className="text-xs space-y-1"
                style={{ color: 'rgba(0,255,65,0.55)', fontFamily: "'Share Tech Mono', monospace" }}
              >
                <div>[+] University of the West of England</div>
                <div>[+] Originally from Nepal</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="rounded p-5"
                style={{ ...cardStyle, cursor: 'default' }}
                onMouseEnter={(e) => cardHoverIn(e.currentTarget)}
                onMouseLeave={(e) => cardHoverOut(e.currentTarget)}
              >
                <div className="flex items-center space-x-3 mb-2">
                  <div style={{ color: '#00ff41', filter: 'drop-shadow(0 0 4px #00ff41)' }}>
                    {skill.icon}
                  </div>
                  <h4
                    className="font-bold text-sm"
                    style={{ color: '#00ff41', fontFamily: "'Share Tech Mono', monospace" }}
                  >
                    {skill.title}
                  </h4>
                </div>
                <p
                  className="text-xs"
                  style={{ color: 'rgba(255,255,255,0.5)', fontFamily: "'Share Tech Mono', monospace" }}
                >
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: '3+', label: 'years_learning' },
            { number: '10+', label: 'projects_completed' },
            { number: '5+', label: 'security_tools' },
            { number: '100%', label: 'passion' },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-4 rounded"
              style={{ border: '1px solid rgba(0,255,65,0.15)' }}
            >
              <div
                className="text-3xl md:text-4xl font-bold mb-1 glow-green-text"
                style={{ color: '#00ff41', fontFamily: "'Share Tech Mono', monospace" }}
              >
                {stat.number}
              </div>
              <div
                className="text-xs"
                style={{ color: 'rgba(0,255,65,0.5)', fontFamily: "'Share Tech Mono', monospace" }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
