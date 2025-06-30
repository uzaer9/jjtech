import React from 'react';
import { User, Target, Code2, Brain, Database, Globe } from 'lucide-react';

const About = () => {
  const skills = [
    { icon: Globe, name: 'Full-Stack Web Development', color: 'text-black' },
    { icon: Brain, name: 'AI & Machine Learning', color: 'text-black' },
    { icon: Database, name: 'Data Analytics', color: 'text-black' },
    { icon: Code2, name: 'API Development', color: 'text-black' },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 via-white to-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-black rounded-full mb-8">
              <User className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Hi, I'm <span className="bg-gradient-to-r from-gray-700 to-black bg-clip-text text-transparent">Jaid Ali Shaikh</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Founder of JJ Tech Solutions 👋
            </p>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              I'm a passionate software developer and AI enthusiast with 4+ years of experience in building full-stack applications that solve real-world problems.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Target className="h-8 w-8 text-black mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">My Vision</h2>
              </div>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                💡 Empower businesses and startups with intelligent digital solutions that drive growth and innovation.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                I believe technology should be accessible, powerful, and transformative. Every project I take on is an opportunity to create something meaningful that makes a real difference in how businesses operate and grow.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <div className="grid grid-cols-2 gap-6">
                {skills.map((skill, index) => {
                  const IconComponent = skill.icon;
                  return (
                    <div key={index} className="text-center">
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-white shadow-sm mb-3 border border-gray-200`}>
                        <IconComponent className={`h-6 w-6 ${skill.color}`} />
                      </div>
                      <p className="text-sm font-medium text-gray-700">{skill.name}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">🛠️ Tech Stack</h2>
            <p className="text-xl text-gray-600">The tools and technologies I use to bring ideas to life</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Frontend</h3>
              <div className="space-y-2">
                <span className="inline-block bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm mr-2 mb-2">React</span>
                <span className="inline-block bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm mr-2 mb-2">TypeScript</span>
                <span className="inline-block bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm mr-2 mb-2">Node.js</span>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Backend</h3>
              <div className="space-y-2">
                <span className="inline-block bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm mr-2 mb-2">Python</span>
                <span className="inline-block bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm mr-2 mb-2">Django</span>
                <span className="inline-block bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm mr-2 mb-2">MongoDB</span>
                <span className="inline-block bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm mr-2 mb-2">SQL</span>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">AI & ML</h3>
              <div className="space-y-2">
                <span className="inline-block bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm mr-2 mb-2">OpenCV</span>
                <span className="inline-block bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm mr-2 mb-2">Gemini AI</span>
                <span className="inline-block bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm mr-2 mb-2">ChatGPT API</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Let's Connect and Build Impactful Tech Together!
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Ready to turn your ideas into reality? Let's discuss how we can create something amazing together.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors transform hover:scale-105"
          >
            Start Your Project
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;