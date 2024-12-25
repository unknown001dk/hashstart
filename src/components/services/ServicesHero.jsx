import { motion } from 'framer-motion';

export function ServicesHero() {
  return (
    <section className="bg-emerald-600 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-6"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xl text-emerald-100 max-w-3xl mx-auto"
          >
            Comprehensive technology solutions tailored to your business needs
          </motion.p>
        </div>
      </div>
    </section>
  );
}