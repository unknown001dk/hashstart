import { motion } from 'framer-motion';

export function FormTextarea({ label, id, required = false, ...props }) {
  return (
    <motion.div 
      className="relative"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <textarea
        id={id}
        required={required}
        placeholder=" "
        className="peer w-full px-4 py-3 rounded-lg border-2 border-gray-200 
                 placeholder-transparent focus:border-emerald-500 focus:outline-none
                 transition-colors bg-white/50 backdrop-blur-sm min-h-[120px] resize-y"
        {...props}
      />
      <label
        htmlFor={id}
        className="absolute left-2 -top-2.5 bg-white px-2 text-sm text-gray-600
                 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                 peer-placeholder-shown:top-3.5 peer-placeholder-shown:left-4
                 peer-focus:-top-2.5 peer-focus:left-2 peer-focus:text-sm
                 peer-focus:text-emerald-600"
      >
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
    </motion.div>
  );
}