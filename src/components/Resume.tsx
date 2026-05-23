import React from 'react';
import { Download, GraduationCap, Award, Code, Globe, Mail, MapPin } from 'lucide-react';

const cardStyle = {
  background: 'rgba(0,0,0,0.9)',
  border: '1px solid rgba(0,255,65,0.2)',
  transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
};
const mono = { fontFamily: "'Share Tech Mono', monospace" };

const Resume = () => {
  const education = [
    {
      degree: 'BSc Cybersecurity and Digital Forensics',
      institution: 'University of the West of England (UWE)',
      period: '2022 - 2025',
      status: 'Current',
    },
  ];

  const certifications = [
    'CompTIA Security+ (In Progress)',
    'Certified Ethical Hacker (CEH) - Preparing',
    'SANS GIAC Security Essentials (GSEC) - Planning',
  ];

  const technicalSkills: Record<string, string[]> = {
    'Security Tools': ['Wazuh', 'Wireshark', 'Nmap', 'Metasploit', 'Kali Linux', 'Autopsy'],
    'Programming': ['Python', 'Bash', 'PowerShell', 'SQL', 'JavaScript'],
    'Operating Systems': ['Linux (Ubuntu, CentOS)', 'Windows', 'macOS'],
    'Cloud & Virtualization': ['VMware', 'VirtualBox', 'AWS Basics', 'Docker'],
    'SIEM & Monitoring': ['ELK Stack', 'Splunk', 'Suricata', 'Snort'],
  };

  const languages = [
    { name: 'English', level: 'Fluent' },
    { name: 'Nepali', level: 'Native' },
    { name: 'Hindi', level: 'Conversational' },
  ];

  const softSkills = [
    'Critical Thinking',
    'Problem Solving',
    'Team Collaboration',
    'Communication',
    'Attention to Detail',
    'Adaptability',
  ];

  return (
    <section id="resume" className="py-20" style={{ background: '#000000' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <div className="text-xs mb-2" style={{ color: 'rgba(0,255,65,0.4)', ...mono }}>
            $ cat ./resume.json | jq '.'
          </div>
          <h2 className="text-4xl md:text-5xl font-bold glow-green-text mb-2" style={{ color: '#00ff41', ...mono }}>
            &gt; resume --full
          </h2>
          <p className="text-sm max-w-2xl mt-3" style={{ color: 'rgba(255,255,255,0.5)', ...mono }}>
            Academic background, skills, and qualifications in cybersecurity and digital forensics
          </p>
          <div style={{ width: '120px', height: '1px', background: 'rgba(0,255,65,0.4)', boxShadow: '0 0 8px rgba(0,255,65,0.4)', marginTop: '12px' }} />
          <div className="mt-8">
            <button
              className="btn-terminal inline-flex items-center space-x-2 px-6 py-3 rounded text-sm"
              style={mono}
            >
              <Download className="h-4 w-4" />
              <span>./download_resume.sh</span>
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          <div className="space-y-6">
            <div
              className="rounded p-7"
              style={cardStyle}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = 'rgba(0,255,65,0.5)';
                el.style.boxShadow = '0 0 14px rgba(0,255,65,0.1)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = 'rgba(0,255,65,0.2)';
                el.style.boxShadow = 'none';
              }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <GraduationCap className="h-5 w-5" style={{ color: '#00ff41' }} />
                <h3 className="text-lg font-bold" style={{ color: '#00ff41', ...mono }}>
                  &gt; education
                </h3>
              </div>
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="pl-5 pb-4"
                  style={{ borderLeft: '2px solid rgba(0,255,65,0.4)' }}
                >
                  <div className="flex items-start justify-between mb-1 gap-2">
                    <h4 className="text-sm font-bold" style={{ color: '#ffffff', ...mono }}>
                      {edu.degree}
                    </h4>
                    <span
                      className="text-xs px-2 py-0.5 rounded shrink-0"
                      style={{
                        background: 'rgba(0,255,65,0.1)',
                        border: '1px solid rgba(0,255,65,0.35)',
                        color: '#00ff41',
                        ...mono,
                      }}
                    >
                      {edu.status}
                    </span>
                  </div>
                  <p className="text-sm" style={{ color: '#00ff41', ...mono }}>{edu.institution}</p>
                  <p className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.4)', ...mono }}>{edu.period}</p>
                </div>
              ))}
            </div>

            <div
              className="rounded p-7"
              style={cardStyle}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = 'rgba(0,255,65,0.5)';
                el.style.boxShadow = '0 0 14px rgba(0,255,65,0.1)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = 'rgba(0,255,65,0.2)';
                el.style.boxShadow = 'none';
              }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <Award className="h-5 w-5" style={{ color: '#00ff41' }} />
                <h3 className="text-lg font-bold" style={{ color: '#00ff41', ...mono }}>
                  &gt; certifications
                </h3>
              </div>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <span style={{ color: '#00ff41', ...mono }} className="text-xs mt-0.5">[+]</span>
                    <span className="text-sm" style={{ color: 'rgba(255,255,255,0.7)', ...mono }}>{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="rounded p-7"
              style={cardStyle}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = 'rgba(0,255,65,0.5)';
                el.style.boxShadow = '0 0 14px rgba(0,255,65,0.1)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = 'rgba(0,255,65,0.2)';
                el.style.boxShadow = 'none';
              }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <Globe className="h-5 w-5" style={{ color: '#00ff41' }} />
                <h3 className="text-lg font-bold" style={{ color: '#00ff41', ...mono }}>
                  &gt; languages
                </h3>
              </div>
              <div className="space-y-3">
                {languages.map((lang, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-sm" style={{ color: '#ffffff', ...mono }}>{lang.name}</span>
                    <span
                      className="text-xs px-2 py-0.5 rounded"
                      style={{ background: 'rgba(0,255,65,0.08)', border: '1px solid rgba(0,255,65,0.25)', color: '#00ff41', ...mono }}
                    >
                      {lang.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div
              className="rounded p-7"
              style={cardStyle}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = 'rgba(0,255,65,0.5)';
                el.style.boxShadow = '0 0 14px rgba(0,255,65,0.1)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = 'rgba(0,255,65,0.2)';
                el.style.boxShadow = 'none';
              }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <Code className="h-5 w-5" style={{ color: '#00ff41' }} />
                <h3 className="text-lg font-bold" style={{ color: '#00ff41', ...mono }}>
                  &gt; technical_skills
                </h3>
              </div>
              <div className="space-y-5">
                {Object.entries(technicalSkills).map(([category, skills], index) => (
                  <div key={index}>
                    <div className="text-xs mb-2" style={{ color: 'rgba(0,255,65,0.5)', ...mono }}>
                      // {category}
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {skills.map((skill, i) => (
                        <span key={i} className="terminal-tag">{skill}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="rounded p-7"
              style={cardStyle}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = 'rgba(0,255,65,0.5)';
                el.style.boxShadow = '0 0 14px rgba(0,255,65,0.1)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = 'rgba(0,255,65,0.2)';
                el.style.boxShadow = 'none';
              }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <Award className="h-5 w-5" style={{ color: '#00ff41' }} />
                <h3 className="text-lg font-bold" style={{ color: '#00ff41', ...mono }}>
                  &gt; soft_skills
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-2.5">
                {softSkills.map((skill, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <span className="text-xs" style={{ color: '#00ff41', ...mono }}>&gt;</span>
                    <span className="text-sm" style={{ color: 'rgba(255,255,255,0.65)', ...mono }}>{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="rounded p-7"
              style={cardStyle}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = 'rgba(0,255,65,0.5)';
                el.style.boxShadow = '0 0 14px rgba(0,255,65,0.1)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = 'rgba(0,255,65,0.2)';
                el.style.boxShadow = 'none';
              }}
            >
              <h3 className="text-lg font-bold mb-5" style={{ color: '#00ff41', ...mono }}>
                &gt; contact_info
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 shrink-0" style={{ color: '#00ff41' }} />
                  <span className="text-sm" style={{ color: 'rgba(255,255,255,0.65)', ...mono }}>sulakshanjoshi1@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-4 w-4 shrink-0" style={{ color: '#00ff41' }} />
                  <span className="text-sm" style={{ color: 'rgba(255,255,255,0.65)', ...mono }}>Kathmandu, Nepal</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
