import { motion } from 'framer-motion';
import { ServiceIcon } from '../services/ServiceIcon';

export function ServiceCard({ iconName, title, description, className = '' }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className={`bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow ${className}`}
    >
      <div className="text-emerald-600 mb-4">
        <ServiceIcon name={iconName} />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
}