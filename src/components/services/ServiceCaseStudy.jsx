import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';

export function ServiceCaseStudy({ caseStudy }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gray-50 p-6 rounded-lg"
    >
      <h4 className="text-lg font-semibold mb-2">{caseStudy.title}</h4>
      <p className="text-gray-600 mb-4">{caseStudy.description}</p>
      <div className="flex items-center text-indigo-600">
        <TrendingUp className="h-4 w-4 mr-2" />
        <span className="font-medium">{caseStudy.metrics}</span>
      </div>
    </motion.div>
  );
}