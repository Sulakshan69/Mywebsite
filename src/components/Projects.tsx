import React from 'react';
import { ExternalLink, Github, Monitor, Shield, Search, Activity, Network, Lock } from 'lucide-react';

const cardStyle = {
  background: 'rgba(0,0,0,0.9)',
  border: '1px solid rgba(0,255,65,0.2)',
  transition: 'border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease',
};

const Projects = () => {
  const projects = [
    {
      title: 'SIEM Dashboard using Wazuh',
      description: 'Built a comprehensive SOC environment for real-time log analysis, alert correlation, and incident response simulation.',
      tools: ['Wazuh', 'ELK Stack', 'Ubuntu', 'Python'],
      icon: <Monitor className="h-7 w-7" />,
      category: 'SOC Analysis',
      status: 'Completed',
    },
    {
      title: 'Network Security Assessment',
      description: 'Conducted penetration testing on a simulated network environment using industry-standard methodologies.',
      tools: ['Kali Linux', 'Nmap', 'Wireshark', 'Metasploit'],
      icon: <Shield className="h-7 w-7" />,
      category: 'Penetration Testing',
      status: 'In Progress',
    },
    {
      title: 'Digital Forensics Investigation',
      description: 'Performed digital forensics analysis on compromised systems to identify attack vectors and evidence.',
      tools: ['Autopsy', 'Volatility', 'FTK Imager', 'YARA'],
      icon: <Search className="h-7 w-7" />,
      category: 'Digital Forensics',
      status: 'Completed',
    },
    {
      title: 'Vulnerability Scanner',
      description: 'Developed a Python-based vulnerability scanner to identify common security weaknesses in web applications.',
      tools: ['Python', 'Nmap', 'SQLMap', 'BeautifulSoup'],
      icon: <Activity className="h-7 w-7" />,
      category: 'Security Development',
      status: 'Completed',
    },
    {
      title: 'Network Traffic Analysis',
      description: 'Analyzed network packets to identify malicious activities and created custom detection rules.',
      tools: ['Wireshark', 'Suricata', 'Snort', 'tcpdump'],
      icon: <Network className="h-7 w-7" />,
      category: 'Network Security',
      status: 'Completed',
    },
    {
      title: 'Incident Response Playbook',
      description: 'Created comprehensive incident response procedures and automated response workflows for common threats.',
      tools: ['MITRE ATT&CK', 'NIST Framework', 'Python', 'PowerShell'],
      icon: <Lock className="h-7 w-7" />,
      category: 'Incident Response',
      status: 'In Progress',
    },
  ];

  return (
    <section id="projects" className="py-20" style={{ background: '#050505' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <div
            className="text-xs mb-2"
            style={{ color: 'rgba(0,255,65,0.4)', fontFamily: "'Share Tech Mono', monospace" }}
          >
            $ find ./projects -type f -name "*.md"
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold glow-green-text mb-2"
            style={{ color: '#00ff41', fontFamily: "'Share Tech Mono', monospace" }}
          >
            &gt; projects --list
          </h2>
          <p
            className="text-sm max-w-2xl mt-3"
            style={{ color: 'rgba(255,255,255,0.5)', fontFamily: "'Share Tech Mono', monospace" }}
          >
            Hands-on cybersecurity projects demonstrating practical skills in SOC operations,
            digital forensics, and security analysis
          </p>
          <div style={{ width: '120px', height: '1px', background: 'rgba(0,255,65,0.4)', boxShadow: '0 0 8px rgba(0,255,65,0.4)', marginTop: '12px' }} />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded p-6 group"
              style={cardStyle}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = 'rgba(0,255,65,0.6)';
                el.style.boxShadow = '0 0 20px rgba(0,255,65,0.12)';
                el.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = 'rgba(0,255,65,0.2)';
                el.style.boxShadow = 'none';
                el.style.transform = 'none';
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <div style={{ color: '#00ff41', filter: 'drop-shadow(0 0 6px #00ff41)' }}>
                  {project.icon}
                </div>
                <span
                  className="text-xs px-2 py-1 rounded"
                  style={{
                    background: project.status === 'Completed'
                      ? 'rgba(0,255,65,0.1)'
                      : 'rgba(255,200,0,0.1)',
                    border: `1px solid ${project.status === 'Completed' ? 'rgba(0,255,65,0.4)' : 'rgba(255,200,0,0.4)'}`,
                    color: project.status === 'Completed' ? '#00ff41' : '#ffc800',
                    fontFamily: "'Share Tech Mono', monospace",
                  }}
                >
                  [{project.status === 'Completed' ? 'DONE' : 'WIP'}]
                </span>
              </div>

              <div className="space-y-3">
                <div>
                  <div
                    className="text-xs mb-1"
                    style={{ color: 'rgba(0,255,65,0.45)', fontFamily: "'Share Tech Mono', monospace" }}
                  >
                    // {project.category}
                  </div>
                  <h3
                    className="text-base font-bold mb-2"
                    style={{ color: '#ffffff', fontFamily: "'Share Tech Mono', monospace" }}
                  >
                    {project.title}
                  </h3>
                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: 'rgba(255,255,255,0.55)', fontFamily: "'Share Tech Mono', monospace" }}
                  >
                    {project.description}
                  </p>
                </div>

                <div>
                  <div
                    className="text-xs mb-2"
                    style={{ color: 'rgba(0,255,65,0.4)', fontFamily: "'Share Tech Mono', monospace" }}
                  >
                    tools:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tools.map((tool, i) => (
                      <span key={i} className="terminal-tag">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-3 pt-2">
                  <button
                    className="btn-terminal flex items-center space-x-1.5 px-3 py-1.5 text-xs rounded"
                    style={{ fontFamily: "'Share Tech Mono', monospace" }}
                  >
                    <Github className="h-3.5 w-3.5" />
                    <span>./code</span>
                  </button>
                  <button
                    className="btn-terminal flex items-center space-x-1.5 px-3 py-1.5 text-xs rounded"
                    style={{ fontFamily: "'Share Tech Mono', monospace" }}
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    <span>./demo</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p
            className="text-sm mb-6"
            style={{ color: 'rgba(0,255,65,0.4)', fontFamily: "'Share Tech Mono', monospace" }}
          >
            $ git log --oneline --all | head -20
          </p>
          <a
            href="https://github.com/Sulakshan69"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-terminal inline-flex items-center space-x-2 px-6 py-3 rounded text-sm"
            style={{ fontFamily: "'Share Tech Mono', monospace" }}
          >
            <Github className="h-5 w-5" />
            <span>./view_all_on_github.sh</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
