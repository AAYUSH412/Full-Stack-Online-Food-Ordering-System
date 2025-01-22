import { motion } from 'framer-motion';

const LoadingSpinner = ({ text = "Loading..." }) => {
  return (
    <div className="min-h-screen pt-20 flex flex-col items-center justify-center">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        className="w-16 h-16 border-4 border-purple-600 border-t-transparent rounded-full"
      />
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-4 text-xl text-gray-700"
      >
        {text}
      </motion.p>
    </div>
  );
};

export default LoadingSpinner;