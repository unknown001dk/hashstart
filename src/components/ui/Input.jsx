import { motion } from 'framer-motion';

export function Input({ label, id, type = 'text', ...props }) {
  return (
    <motion.div className="relative">
      <motion.input
        id={id}
        type={type}
        placeholder=" "
        className="block w-full px-4 py-3 text-gray-900 bg-transparent border-2 border-gray-300 rounded-lg appearance-none peer focus:outline-none focus:border-indigo-600"
        whileFocus={{ scale: 1.01 }}
        {...props}
      />
      <motion.label
        htmlFor={id}
        className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 peer-focus:text-indigo-600"
      >
        {label}
      </motion.label>
    </motion.div>
  );
}