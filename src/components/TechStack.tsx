import React from 'react';

const TechStack = () => {
  const techCategories = [
    {
      category: 'Frontend',
      technologies: [
        { name: 'React', color: 'bg-gray-100 text-gray-800' },
        { name: 'TypeScript', color: 'bg-gray-100 text-gray-800' },
        { name: 'Next.js', color: 'bg-gray-100 text-gray-800' },
        { name: 'Tailwind CSS', color: 'bg-gray-100 text-gray-800' }
      ]
    },
    {
      category: 'Backend',
      technologies: [
        { name: 'Node.js', color: 'bg-gray-100 text-gray-800' },
        { name: 'Django', color: 'bg-gray-100 text-gray-800' },
        { name: 'Python', color: 'bg-gray-100 text-gray-800' },
        { name: 'Express.js', color: 'bg-gray-100 text-gray-800' }
      ]
    },
    {
      category: 'Database',
      technologies: [
        { name: 'MongoDB', color: 'bg-gray-100 text-gray-800' },
        { name: 'PostgreSQL', color: 'bg-gray-100 text-gray-800' },
        { name: 'MySQL', color: 'bg-gray-100 text-gray-800' },
        { name: 'Redis', color: 'bg-gray-100 text-gray-800' }
      ]
    },
    {
      category: 'AI & ML',
      technologies: [
        { name: 'OpenCV', color: 'bg-gray-100 text-gray-800' },
        { name: 'Gemini AI', color: 'bg-gray-100 text-gray-800' },
        { name: 'ChatGPT API', color: 'bg-gray-100 text-gray-800' },
        { name: 'TensorFlow', color: 'bg-gray-100 text-gray-800' }
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Technologies I Work With
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Cutting-edge tools and frameworks to build robust, scalable solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-200"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
                {category.category}
              </h3>
              <div className="space-y-3">
                {category.technologies.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className={`${tech.color} px-4 py-2 rounded-lg text-center font-medium transition-transform hover:scale-105 border border-gray-200`}
                  >
                    {tech.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-black rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Always Learning, Always Evolving</h3>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              The tech landscape is constantly changing, and I stay ahead of the curve by continuously 
              learning new technologies and best practices to deliver the most effective solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;