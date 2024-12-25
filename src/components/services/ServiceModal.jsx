import { motion } from 'framer-motion';
import { ServiceFeatureList } from './ServiceFeatureList';
import { ServiceTechStack } from './ServiceTechStack';
import { ServiceCaseStudy } from './ServiceCaseStudy';

export function ServiceModal({ service }) {
  const Icon = service.icon;

  return (
    <div className="p-8">
      <div className="flex items-center mb-6">
        <Icon className="h-12 w-12 text-indigo-600 mr-4" />
        <h2 className="text-3xl font-bold">{service.title}</h2>
      </div>
      
      <p className="text-gray-600 mb-8">{service.description}</p>

      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h3 className="text-xl font-semibold mb-4">Key Features</h3>
          <ServiceFeatureList features={service.features} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h3 className="text-xl font-semibold mb-4">Technologies</h3>
          <ServiceTechStack technologies={service.technologies} />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-8"
      >
        <h3 className="text-xl font-semibold mb-4">Our Process</h3>
        <div className="flex flex-wrap gap-4">
          {service.process.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center"
            >
              <span className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center mr-2">
                {index + 1}
              </span>
              {step}
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-8"
      >
        <h3 className="text-xl font-semibold mb-4">Case Studies</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {service.caseStudies.map((caseStudy, index) => (
            <ServiceCaseStudy key={index} caseStudy={caseStudy} />
          ))}
        </div>
      </motion.div>
    </div>
  );
}