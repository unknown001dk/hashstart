import React from 'react';

export default function Portfolio() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'Web Development',
      description: 'A full-featured e-commerce platform with advanced product management and analytics.',
      imageUrl: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Fitness Tracking App',
      category: 'Mobile Development',
      description: 'Cross-platform mobile app for tracking workouts and nutrition with social features.',
      imageUrl: 'https://images.unsplash.com/photo-1674574124649-778f9afc0e9c?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Financial Dashboard',
      category: 'Web Development',
      description: 'Real-time financial analytics dashboard with advanced data visualization.',
      imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Healthcare Platform',
      category: 'Web Development',
      description: 'Telemedicine platform connecting patients with healthcare providers.',
      imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Smart Home App',
      category: 'Mobile Development',
      description: 'IoT control app for managing smart home devices and automation.',
      imageUrl: 'https://images.unsplash.com/photo-1558002038-bb4237b50b11?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Learning Management System',
      category: 'Web Development',
      description: 'Educational platform with course management and student progress tracking.',
      imageUrl: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800'
    }
  ];

  const [filter, setFilter] = React.useState('All');

  const categories = ['All', 'Web Development', 'Mobile Development'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-indigo-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-6">Our Portfolio</h1>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
              Explore our latest projects and see how we've helped businesses transform their digital presence
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex justify-center mb-12 space-x-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full ${
                  filter === category
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                } transition-colors`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-64">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}