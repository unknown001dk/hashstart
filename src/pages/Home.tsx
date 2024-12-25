import React from 'react';
import { ArrowRight, Code, Smartphone, TrendingUp, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Transform Your Digital Presence
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-indigo-100">
              We create innovative digital solutions that help businesses thrive in the modern world.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-indigo-50 transition-colors"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
        <div className="h-32 bg-white" style={{ clipPath: 'polygon(0 0, 100% 100%, 100% 100%, 0% 100%)' }}></div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Comprehensive solutions for your digital needs</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Code className="h-8 w-8" />,
                title: 'Web Development',
                description: 'Custom websites and web applications built with the latest technologies.'
              },
              {
                icon: <Smartphone className="h-8 w-8" />,
                title: 'Mobile Apps',
                description: 'Native and cross-platform mobile applications for iOS and Android.'
              },
              {
                icon: <TrendingUp className="h-8 w-8" />,
                title: 'Digital Marketing',
                description: 'Strategic marketing solutions to grow your online presence.'
              },
              {
                icon: <Zap className="h-8 w-8" />,
                title: 'API Development',
                description: 'Robust and scalable API solutions for your business needs.'
              }
            ].map((service, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="text-indigo-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Project?</h2>
            <p className="text-xl text-indigo-100 mb-8">Let's create something amazing together</p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-indigo-50 transition-colors"
            >
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}