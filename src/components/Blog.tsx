import React from 'react';
import { Calendar, Clock, ArrowRight, FileText, Shield, Search } from 'lucide-react';

const mono = { fontFamily: "'Share Tech Mono', monospace" };
const cardStyle = {
  background: 'rgba(0,0,0,0.9)',
  border: '1px solid rgba(0,255,65,0.2)',
  transition: 'border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease',
};

const Blog = () => {
  const blogPosts = [
    {
      title: "Understanding SIEM: A Beginner's Guide to Security Information and Event Management",
      excerpt: 'Learn the fundamentals of SIEM technology, how it works, and why it\'s crucial for modern cybersecurity operations.',
      date: 'Coming Soon',
      readTime: '8 min read',
      category: 'SOC Analysis',
      icon: <Shield className="h-4 w-4" />,
      status: 'draft',
    },
    {
      title: 'Digital Forensics in Action: Investigating a Simulated Cyber Attack',
      excerpt: 'A step-by-step walkthrough of a digital forensics investigation, from evidence collection to analysis and reporting.',
      date: 'Coming Soon',
      readTime: '12 min read',
      category: 'Digital Forensics',
      icon: <Search className="h-4 w-4" />,
      status: 'draft',
    },
    {
      title: 'Building Your First Home Lab for Cybersecurity Practice',
      excerpt: 'A comprehensive guide to setting up a cybersecurity home lab with VMs, tools, and practice scenarios.',
      date: 'Coming Soon',
      readTime: '15 min read',
      category: 'Lab Setup',
      icon: <FileText className="h-4 w-4" />,
      status: 'draft',
    },
  ];

  return (
    <section id="blog" className="py-20" style={{ background: '#050505' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <div className="text-xs mb-2" style={{ color: 'rgba(0,255,65,0.4)', ...mono }}>
            $ tail -f ./blog/posts.log
          </div>
          <h2 className="text-4xl md:text-5xl font-bold glow-green-text mb-2" style={{ color: '#00ff41', ...mono }}>
            &gt; blog --articles
          </h2>
          <p className="text-sm max-w-2xl mt-3" style={{ color: 'rgba(255,255,255,0.5)', ...mono }}>
            Sharing insights, tutorials, and experiences in cybersecurity, digital forensics, and security research
          </p>
          <div style={{ width: '120px', height: '1px', background: 'rgba(0,255,65,0.4)', boxShadow: '0 0 8px rgba(0,255,65,0.4)', marginTop: '12px' }} />
        </div>

        <div className="mb-10">
          <div
            className="inline-flex items-center space-x-2 px-5 py-3 rounded"
            style={{
              background: 'rgba(0,255,65,0.06)',
              border: '1px solid rgba(0,255,65,0.25)',
              ...mono,
              color: '#00ff41',
              fontSize: '0.8rem',
            }}
          >
            <FileText className="h-4 w-4" />
            <span>[INFO] Blog content incoming. Stay tuned for cybersecurity insights and tutorials.</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="rounded overflow-hidden"
              style={cardStyle}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = 'rgba(0,255,65,0.55)';
                el.style.boxShadow = '0 0 18px rgba(0,255,65,0.1)';
                el.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = 'rgba(0,255,65,0.2)';
                el.style.boxShadow = 'none';
                el.style.transform = 'none';
              }}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2" style={{ color: '#00ff41' }}>
                    {post.icon}
                    <span className="text-xs" style={{ ...mono, color: 'rgba(0,255,65,0.7)' }}>// {post.category}</span>
                  </div>
                  <span
                    className="text-xs px-2 py-0.5 rounded"
                    style={{
                      background: 'rgba(255,200,0,0.08)',
                      border: '1px solid rgba(255,200,0,0.3)',
                      color: '#ffc800',
                      ...mono,
                    }}
                  >
                    [DRAFT]
                  </span>
                </div>

                <h3
                  className="text-sm font-bold mb-3 line-clamp-2"
                  style={{ color: '#ffffff', ...mono, lineHeight: '1.5' }}
                >
                  {post.title}
                </h3>

                <p className="text-xs leading-relaxed mb-4 line-clamp-3" style={{ color: 'rgba(255,255,255,0.5)', ...mono }}>
                  {post.excerpt}
                </p>

                <div className="flex items-center space-x-4 text-xs mb-4" style={{ color: 'rgba(0,255,65,0.4)', ...mono }}>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-3.5 w-3.5" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <button
                  className="flex items-center space-x-1.5 text-xs transition-all duration-200"
                  style={{ color: '#00ff41', ...mono }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.textShadow = '0 0 6px #00ff41';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.textShadow = 'none';
                  }}
                >
                  <span>./read_more.sh</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <div
            className="rounded p-8"
            style={{
              background: 'rgba(0,0,0,0.9)',
              border: '1px solid rgba(0,255,65,0.2)',
            }}
          >
            <div className="text-xs mb-3" style={{ color: 'rgba(0,255,65,0.4)', ...mono }}>
              $ subscribe --newsletter
            </div>
            <h3 className="text-xl font-bold mb-3" style={{ color: '#00ff41', ...mono }}>
              &gt; stay_updated
            </h3>
            <p className="text-sm mb-6" style={{ color: 'rgba(255,255,255,0.5)', ...mono }}>
              Subscribe to get notified when I publish new cybersecurity articles and tutorials
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md">
              <input
                type="email"
                placeholder="user@domain.com"
                className="terminal-input flex-1 rounded px-4 py-2.5 text-sm"
              />
              <button
                className="btn-terminal px-6 py-2.5 rounded text-sm"
                style={mono}
              >
                ./subscribe.sh
              </button>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-xs mb-4" style={{ color: 'rgba(0,255,65,0.4)', ...mono }}>
            $ echo "Follow my cybersecurity journey"
          </p>
          <div className="flex justify-center space-x-6">
            {[
              { label: './linkedin', href: 'https://www.linkedin.com/in/sulakshan-joshi/' },
              { label: './github', href: 'https://github.com/Sulakshan69' },
              { label: './email', href: 'mailto:Sulakshanjoshi1@gmail.com' },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
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
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
