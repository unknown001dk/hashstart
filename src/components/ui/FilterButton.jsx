import { motion } from 'framer-motion';

export function FilterButton({ active, label, onClick, className = '' }) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
        active
          ? 'bg-emerald-600 text-white'
          : 'bg-white text-gray-700 hover:bg-emerald-50'
      } ${className}`}
    >
      {label}
    </motion.button>
  );
}