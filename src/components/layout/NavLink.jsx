import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

export function NavLink({ to, children }) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`relative ${
        isActive ? 'text-emerald-600' : 'text-gray-700 hover:text-emerald-600'
      } transition-colors`}
    >
      {children}
      {isActive && (
        <motion.div
          layoutId="activeIndicator"
          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-emerald-600"
          initial={false}
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />
      )}
    </Link>
  );
}