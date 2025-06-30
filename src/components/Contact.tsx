import React from 'react';
import { Mail, MessageCircle, Phone, Send, MapPin } from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      description: 'Drop me a line anytime',
      contact: 'jjtechsolu@gmail.com',
      href: 'mailto:jjtechsolu@gmail.com',
      color: 'text-black'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      description: 'Quick chat about your project',
      contact: '+91 8329087516',
      href: 'https://wa.me/918329087516',
      color: 'text-black'
    },
    {
      icon: Phone,
      title: 'Phone',
      description: 'Let\'s talk directly',
      contact: '+91 8329087516',
      href: 'tel:+918329087516',
      color: 'text-black'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Let's Start Your Project
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to transform your ideas into reality? Get in touch and let's discuss how we can work together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">Get In Touch</h3>
            <div className="space-y-6">
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon;
                return (
                  <a
                    key={index}
                    href={method.href}
                    className="flex items-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group border border-gray-200"
                  >
                    <div className={`flex-shrink-0 w-12 h-12 rounded-lg bg-white shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform border border-gray-200`}>
                      <IconComponent className={`h-6 w-6 ${method.color}`} />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold text-gray-900">{method.title}</h4>
                      <p className="text-gray-600">{method.description}</p>
                      <p className={`font-medium ${method.color}`}>{method.contact}</p>
                    </div>
                  </a>
                );
              })}
            </div>

            <div className="mt-8 p-6 bg-gray-50 rounded-xl border border-gray-200">
              <div className="flex items-center mb-4">
                <MapPin className="h-5 w-5 text-gray-600 mr-2" />
                <span className="text-gray-700 font-medium">Based in India</span>
              </div>
              <p className="text-gray-600">
                Working with clients worldwide. Available for remote collaboration and can accommodate different time zones.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Project Type
                </label>
                <select
                  id="subject"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-colors"
                >
                  <option>Select a project type</option>
                  <option>Web Application</option>
                  <option>AI/ML Project</option>
                  <option>Data Dashboard</option>
                  <option>API Development</option>
                  <option>Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Project Details
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Tell me about your project requirements, timeline, and any specific features you need..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-all transform hover:scale-105 flex items-center justify-center"
              >
                <Send className="h-5 w-5 mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-black rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
            Don't wait – let's turn your vision into a powerful digital solution that drives results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:jjtechsolu@gmail.com"
              className="inline-flex items-center bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Email Me Directly
            </a>
            <a
              href="https://wa.me/918329087516"
              className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-full font-semibold hover:bg-white/30 transition-colors border border-white/20"
            >
              WhatsApp Chat
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;