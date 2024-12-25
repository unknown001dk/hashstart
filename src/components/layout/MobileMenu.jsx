import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { NavLink } from './NavLink';

export function MobileMenu({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/portfolio">Portfolio</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <Link
              to="/contact"
              onClick={onClose}
              className="block w-full text-center bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700 transition-colors mt-4"
            >
              Get Started
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}