import { motion } from 'framer-motion';

export function ServiceTechStack({ technologies }) {
  return (
    <div className="flex flex-wrap gap-2">
      {technologies.map((tech, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1 }}
          className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm"
        >
          {tech}
        </motion.span>
      ))}
    </div>
  );
}