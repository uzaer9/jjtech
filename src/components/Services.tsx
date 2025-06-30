import React from 'react';
import { Code, Database, Brain, Globe, Smartphone, BarChart3 } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: 'Full-Stack Web Applications',
      description: 'Complete web solutions from frontend to backend, built with modern technologies.',
      bgColor: 'bg-gray-50',
      iconColor: 'text-black'
    },
    {
      icon: BarChart3,
      title: 'Data-Driven Dashboards',
      description: 'Interactive dashboards and analytics platforms to visualize your business data.',
      bgColor: 'bg-gray-50',
      iconColor: 'text-black'
    },
    {
      icon: Brain,
      title: 'AI-Powered Platforms',
      description: 'Intelligent applications leveraging machine learning and AI APIs.',
      bgColor: 'bg-gray-50',
      iconColor: 'text-black'
    },
    {
      icon: Smartphone,
      title: 'Mobile-First Solutions',
      description: 'Responsive applications that work perfectly across all devices.',
      bgColor: 'bg-gray-50',
      iconColor: 'text-black'
    },
    {
      icon: Code,
      title: 'API Development',
      description: 'Robust and scalable APIs to power your applications and integrations.',
      bgColor: 'bg-gray-50',
      iconColor: 'text-black'
    },
    {
      icon: Database,
      title: 'Database Solutions',
      description: 'Efficient data storage and management systems for optimal performance.',
      bgColor: 'bg-gray-50',
      iconColor: 'text-black'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Services I Offer
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive tech solutions to bring your vision to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-gray-300 hover:-translate-y-1"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl ${service.bgColor} mb-6 group-hover:scale-110 transition-transform duration-300 border border-gray-200`}>
                  <IconComponent className={`h-8 w-8 ${service.iconColor}`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <p className="text-lg text-gray-700 mb-8">
            Have a specific project in mind? Let's discuss how I can help bring it to life.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-all transform hover:scale-105 shadow-lg"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;