import React from 'react';
import { Code, Smartphone, TrendingUp, Zap, Database, Cloud, Shield, Settings } from 'lucide-react';
import { ServiceCard } from '../components/services/ServiceCard';
import { ServicesHero } from '../components/services/ServicesHero';
import { services } from '../data/services';

export default function Services() {
  return (
    <div className="min-h-screen pt-16">
      <ServicesHero />

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}