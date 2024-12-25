import { motion } from 'framer-motion';
import { ServiceIcon } from './ServiceIcon';

export function ServiceCard({ iconName, title, description, features }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
    >
      <div className="text-emerald-600 mb-4">
        <ServiceIcon name={iconName} />
      </div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-center text-gray-700">
            <span className="w-2 h-2 bg-emerald-600 rounded-full mr-2"></span>
            {feature}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}