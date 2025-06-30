import React from 'react';
import { ArrowRight, Rocket, CheckCircle } from 'lucide-react';

const Hero = () => {
  const benefits = [
    'Fast delivery',
    'Modern UI/UX',
    'Scalable & secure code',
    '4+ years of experience in AI, Web Dev, and Data'
  ];

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-2xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-8">
            <Rocket className="h-4 w-4 text-gray-300 mr-2" />
            <span className="text-gray-100 font-medium">Welcome to JJ Tech Solutions</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Your Tech Partner for{' '}
            <span className="bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent">
              Smart Solutions
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            🚀 Need a reliable freelancer to build your next app or website?
          </p>

          <p className="text-lg md:text-xl text-gray-200 mb-12 max-w-5xl mx-auto leading-relaxed">
            Whether it's a full-stack web application, data-driven dashboard, or AI-powered platform, 
            I deliver powerful tech solutions tailored to your needs.
          </p>

          {/* Benefits */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-white mb-6">✨ Why JJ Tech Solutions?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <CheckCircle className="h-5 w-5 text-gray-300 mr-3 flex-shrink-0" />
                  <span className="text-white font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contact"
              className="inline-flex items-center bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-all transform hover:scale-105 shadow-lg border border-gray-700"
            >
              Let's Build Something Amazing Together
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="/about"
              className="inline-flex items-center bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all border border-white/20"
            >
              Learn More About Me
            </a>
          </div>

          {/* Rocket Animation */}
          <div className="absolute bottom-10 right-10 animate-bounce">
            <div className="text-6xl">🚀</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;