// src/pages/UnderMaintenance.jsx
import { Construction } from 'lucide-react';
import { motion } from 'framer-motion';

function UnderMaintenance() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex flex-col items-center justify-center text-center bg-gray-100 dark:bg-gray-900 px-4"
    >
      <motion.div
        initial={{ rotate: -15 }}
        animate={{ rotate: 15 }}
        transition={{ repeat: Infinity, repeatType: 'reverse', duration: 1 }}
      >
        <Construction className="w-20 h-20 text-teal-500 mb-6" />
      </motion.div>

      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-4xl font-bold text-teal-600 mb-4"
      >
        Page Under Maintenance
      </motion.h1>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-lg text-gray-700 dark:text-gray-300 max-w-xl mb-6"
      >
        This page is currently being built and will be live very soon. Stay tuned for updates!
      </motion.p>

      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        href="/"
        className="mt-4 inline-block bg-gradient-to-r from-teal-500 to-emerald-500 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300"
      >
        Go Back Home
      </motion.a>
    </motion.div>
  );
}

export default UnderMaintenance;