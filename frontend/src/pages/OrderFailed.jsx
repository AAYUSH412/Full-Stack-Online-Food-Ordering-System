import { Link } from "react-router-dom";
import { XCircle } from "lucide-react";
import { motion } from "framer-motion";

const OrderFailed = () => {
  return (
    <div className="min-h-screen pt-20 px-4 bg-gray-50">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm p-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm p-6 text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <XCircle className="w-16 h-16 text-red-600 mx-auto mb-4" />
          </motion.div>
          {/* ... rest of the component ... */}
        </motion.div>
        <h2 className="text-2xl font-bold text-gray-900">Payment Failed</h2>
        <p className="text-gray-600 mt-2 mb-6">
          Your payment could not be processed. Please try again.
        </p>
        <Link
          to="/cart"
          className="inline-block bg-red-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-red-700"
        >
          Return to Cart
        </Link>
      </div>
    </div>
  );
};

export default OrderFailed;
