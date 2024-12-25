import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

export function TestimonialCard({ name, role, company, content }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white p-6 rounded-lg shadow-lg"
    >
      <Quote className="h-8 w-8 text-emerald-600 mb-4" />
      <p className="text-gray-600 mb-4">{content}</p>
      <div>
        <h4 className="font-semibold text-gray-900">{name}</h4>
        <p className="text-gray-500">{role} at {company}</p>
      </div>
    </motion.div>
  );
}