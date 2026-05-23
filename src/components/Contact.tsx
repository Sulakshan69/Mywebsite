import React, { useState } from 'react';
import { Mail, MapPin, Send, Github, Linkedin } from 'lucide-react';

const mono = { fontFamily: "'Share Tech Mono', monospace" };
const cardStyle = {
  background: 'rgba(0,0,0,0.9)',
  border: '1px solid rgba(0,255,65,0.2)',
  transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
};

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(data as never).toString(),
    })
      .then(() => {
        window.location.href = '/success.html';
      })
      .catch((error) => {
        console.error('Form submission error:', error);
        alert('There was an error sending your message. Please try again.');
      });
  };

  return (
    <section id="contact" className="py-20" style={{ background: '#000000' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <div className="text-xs mb-2" style={{ color: 'rgba(0,255,65,0.4)', ...mono }}>
            $ ping sulakshan@portfolio --ttl 64
          </div>
          <h2 className="text-4xl md:text-5xl font-bold glow-green-text mb-2" style={{ color: '#00ff41', ...mono }}>
            &gt; contact --init
          </h2>
          <p className="text-sm max-w-2xl mt-3" style={{ color: 'rgba(255,255,255,0.5)', ...mono }}>
            Interested in cybersecurity collaboration, internship opportunities, or just want to connect?
            Let's have a conversation!
          </p>
          <div style={{ width: '120px', height: '1px', background: 'rgba(0,255,65,0.4)', boxShadow: '0 0 8px rgba(0,255,65,0.4)', marginTop: '12px' }} />
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
              <h3 className="text-lg font-bold mb-2" style={{ color: '#00ff41', ...mono }}>
                &gt; establish_connection
              </h3>
              <p className="text-sm mb-6" style={{ color: 'rgba(255,255,255,0.55)', ...mono }}>
                I'm always open to discussing cybersecurity topics, potential collaborations,
                internship opportunities, or sharing knowledge with fellow security enthusiasts.
              </p>

              <div className="space-y-5">
                <div className="flex items-center space-x-4">
                  <div
                    className="p-2.5 rounded"
                    style={{ background: 'rgba(0,255,65,0.08)', border: '1px solid rgba(0,255,65,0.2)' }}
                  >
                    <Mail className="h-5 w-5" style={{ color: '#00ff41' }} />
                  </div>
                  <div>
                    <div className="text-xs mb-0.5" style={{ color: 'rgba(0,255,65,0.5)', ...mono }}>// email</div>
                    <p className="text-sm" style={{ color: 'rgba(255,255,255,0.7)', ...mono }}>sulakshanjoshi1@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div
                    className="p-2.5 rounded"
                    style={{ background: 'rgba(0,255,65,0.08)', border: '1px solid rgba(0,255,65,0.2)' }}
                  >
                    <MapPin className="h-5 w-5" style={{ color: '#00ff41' }} />
                  </div>
                  <div>
                    <div className="text-xs mb-0.5" style={{ color: 'rgba(0,255,65,0.5)', ...mono }}>// location</div>
                    <p className="text-sm" style={{ color: 'rgba(255,255,255,0.7)', ...mono }}>Kathmandu, Nepal</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <div className="text-xs mb-3" style={{ color: 'rgba(0,255,65,0.5)', ...mono }}>
                  // social_links
                </div>
                <div className="flex space-x-3">
                  {[
                    { href: 'https://github.com/Sulakshan69', icon: <Github className="h-5 w-5" />, label: 'GitHub' },
                    { href: 'https://www.linkedin.com/in/sulakshan-joshi/', icon: <Linkedin className="h-5 w-5" />, label: 'LinkedIn' },
                    { href: 'mailto:Sulakshanjoshi1@gmail.com', icon: <Mail className="h-5 w-5" />, label: 'Email' },
                  ].map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target={social.href.startsWith('http') ? '_blank' : undefined}
                      rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="p-2.5 rounded transition-all duration-200"
                      style={{
                        background: 'rgba(0,255,65,0.04)',
                        border: '1px solid rgba(0,255,65,0.2)',
                        color: 'rgba(0,255,65,0.6)',
                      }}
                      onMouseEnter={(e) => {
                        const el = e.currentTarget as HTMLAnchorElement;
                        el.style.color = '#00ff41';
                        el.style.borderColor = 'rgba(0,255,65,0.6)';
                        el.style.boxShadow = '0 0 10px rgba(0,255,65,0.2)';
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget as HTMLAnchorElement;
                        el.style.color = 'rgba(0,255,65,0.6)';
                        el.style.borderColor = 'rgba(0,255,65,0.2)';
                        el.style.boxShadow = 'none';
                      }}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
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
              <div className="text-xs mb-3" style={{ color: 'rgba(0,255,65,0.5)', ...mono }}>// geolocation</div>
              <h4 className="text-sm font-bold mb-4" style={{ color: '#00ff41', ...mono }}>
                &gt; traceroute Nepal --to UK
              </h4>
              <div
                className="h-40 rounded flex items-center justify-center"
                style={{ background: 'rgba(0,255,65,0.03)', border: '1px solid rgba(0,255,65,0.1)' }}
              >
                <div className="text-center">
                  <MapPin className="h-10 w-10 mx-auto mb-2" style={{ color: 'rgba(0,255,65,0.4)' }} />
                  <p className="text-xs" style={{ color: 'rgba(0,255,65,0.4)', ...mono }}>Interactive map coming soon</p>
                  <p className="text-xs mt-1" style={{ color: 'rgba(0,255,65,0.3)', ...mono }}>Nepal → Bristol, UK</p>
                </div>
              </div>
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
            <div className="text-xs mb-2" style={{ color: 'rgba(0,255,65,0.4)', ...mono }}>
              {'$ curl -X POST /api/message --data \'{...}\''}
            </div>
            <h3 className="text-lg font-bold mb-6" style={{ color: '#00ff41', ...mono }}>
              &gt; send_message
            </h3>

            <form
              name="contact"
              method="POST"
              netlify
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p hidden>
                <label>
                  Don't fill this out if you're human:
                  <input name="bot-field" />
                </label>
              </p>

              <div>
                <label
                  htmlFor="name"
                  className="block text-xs mb-1.5"
                  style={{ color: 'rgba(0,255,65,0.6)', ...mono }}
                >
                  // your_name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="terminal-input w-full rounded px-4 py-3 text-sm"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs mb-1.5"
                  style={{ color: 'rgba(0,255,65,0.6)', ...mono }}
                >
                  // email_address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="terminal-input w-full rounded px-4 py-3 text-sm"
                  placeholder="user@domain.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs mb-1.5"
                  style={{ color: 'rgba(0,255,65,0.6)', ...mono }}
                >
                  // message_body
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="terminal-input w-full rounded px-4 py-3 text-sm resize-none"
                  placeholder="Tell me about your project, opportunity, or just say hello..."
                />
              </div>

              <button
                type="submit"
                className="btn-terminal w-full flex items-center justify-center space-x-2 py-3 rounded text-sm"
                style={mono}
              >
                <Send className="h-4 w-4" />
                <span>./send_message.sh --encrypt</span>
              </button>
            </form>

            <div className="mt-5 text-center">
              <p className="text-xs" style={{ color: 'rgba(0,255,65,0.35)', ...mono }}>
                [*] Response within 24-48 hours. Encrypted channel preferred.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
