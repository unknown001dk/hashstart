import { motion } from 'framer-motion';

export function StatCard({ icon, value, label }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="text-center p-6"
    >
      <div className="text-emerald-600 mb-2">{icon}</div>
      <div className="text-3xl font-bold text-gray-900 mb-1">{value}</div>
      <div className="text-gray-600">{label}</div>
    </motion.div>
  );
}