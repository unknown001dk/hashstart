import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

export function ServiceFeatureList({ features }) {
  return (
    <ul className="space-y-3">
      {features.map((feature, index) => (
        <motion.li
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          className="flex items-center text-gray-700"
        >
          <CheckCircle className="h-5 w-5 text-indigo-600 mr-2" />
          {feature}
        </motion.li>
      ))}
    </ul>
  );
}