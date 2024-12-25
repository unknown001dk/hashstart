import React from 'react';
import { Code, Smartphone, TrendingUp, Zap, Database, Cloud, Shield, Settings } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Code className="h-12 w-12" />,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern frameworks and best practices.',
      features: ['Responsive Design', 'SEO Optimization', 'Performance Optimization', 'Custom CMS']
    },
    {
      icon: <Smartphone className="h-12 w-12" />,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android platforms.',
      features: ['Native Development', 'Cross-Platform Solutions', 'UI/UX Design', 'App Store Optimization']
    },
    {
      icon: <TrendingUp className="h-12 w-12" />,
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies to boost your online presence.',
      features: ['SEO', 'Social Media Marketing', 'Content Strategy', 'Analytics & Reporting']
    },
    {
      icon: <Zap className="h-12 w-12" />,
      title: 'API Development',
      description: 'Robust and scalable API solutions for seamless integration.',
      features: ['RESTful APIs', 'GraphQL', 'API Documentation', 'Performance Optimization']
    },
    {
      icon: <Database className="h-12 w-12" />,
      title: 'Database Solutions',
      description: 'Custom database design and optimization for your specific needs.',
      features: ['Database Design', 'Migration Services', 'Performance Tuning', 'Data Security']
    },
    {
      icon: <Cloud className="h-12 w-12" />,
      title: 'Cloud Services',
      description: 'Cloud infrastructure setup and management for scalable applications.',
      features: ['AWS', 'Azure', 'Google Cloud', 'Cloud Migration']
    },
    {
      icon: <Shield className="h-12 w-12" />,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets.',
      features: ['Security Audits', 'Penetration Testing', 'Security Training', 'Compliance']
    },
    {
      icon: <Settings className="h-12 w-12" />,
      title: 'IT Consulting',
      description: 'Expert guidance for your technology decisions and strategy.',
      features: ['Technology Assessment', 'Digital Strategy', 'Process Optimization', 'Tech Stack Selection']
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-indigo-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
              Comprehensive technology solutions tailored to your business needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="text-indigo-600 mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}