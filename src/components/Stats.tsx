import React from 'react';
import { Calendar, Users, Code, Award } from 'lucide-react';

const Stats = () => {
  const stats = [
    {
      icon: Calendar,
      number: '4+',
      label: 'Years Experience',
      color: 'text-white'
    },
    {
      icon: Code,
      number: '50+',
      label: 'Projects Completed',
      color: 'text-white'
    },
    {
      icon: Users,
      number: '30+',
      label: 'Happy Clients',
      color: 'text-white'
    },
    {
      icon: Award,
      number: '100%',
      label: 'Client Satisfaction',
      color: 'text-white'
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Proven Track Record
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Numbers that speak to the quality and reliability of my work
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all transform hover:scale-105 border border-white/20"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 font-medium">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Join These Success Stories?
            </h3>
            <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
              Let's discuss your project and see how we can achieve your goals together.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors transform hover:scale-105"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;