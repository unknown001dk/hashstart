import { motion } from 'framer-motion';

export function FilterContainer({ children }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-wrap gap-2 justify-center px-4 md:px-0"
    >
      {children}
    </motion.div>
  );
}