import { useState, useEffect } from "react";
import { Link, Navigate, useLocation } from "react-router-dom";
import { CheckCircle, ChefHat, Truck, HomeIcon } from "lucide-react";
import { motion } from "framer-motion";

const OrderSuccess = () => {
  const location = useLocation();
  const orderDetails = location.state?.orderDetails;
  const [orderStatus, setOrderStatus] = useState("Order Received");
  const [progressWidth, setProgressWidth] = useState("25%");


  // Order status steps with their progress percentages
  const steps = [
    { status: "Order Received", icon: CheckCircle, percentage: "25%" },
    { status: "Preparing", icon: ChefHat, percentage: "50%" },
    { status: "Out for Delivery", icon: Truck, percentage: "75%" },
    { status: "Delivered", icon: HomeIcon, percentage: "100%" },
  ];

  useEffect(() => {
    if (!orderDetails?._id && !orderDetails?.orderId && !orderDetails?.razorpayOrderId) return;
  
    const fetchOrderStatus = async () => {
      try {
        const orderId = orderDetails._id || orderDetails.razorpayOrderId;
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/orders/${orderId}`,
          {
            credentials: "include",
          }
        );
        const data = await response.json();
  
        if (data.success) {
          setOrderStatus(data.data.status);
          const currentStep = steps.findIndex(
            (step) => step.status === data.data.status
          );
          if (currentStep >= 0) {
            setProgressWidth(steps[currentStep].percentage);
          }
        }
      } catch (error) {
        console.error("Error fetching order status:", error);
      }
    };
  
    fetchOrderStatus();
    const intervalId = setInterval(fetchOrderStatus, 30000);
  
    return () => clearInterval(intervalId);
  }, [orderDetails, steps]);

  if (!orderDetails) {
    return <Navigate to="/cart" />;
  }

  return (
    <div className="min-h-screen pt-20 px-4 bg-gray-50">
      <div className="max-w-3xl mx-auto my-16">
        {/* Order Status Card */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="text-center mb-8 rounded-lg shadow-sm border border-gray-100 p-8">
            <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900">
              Order Confirmed!
            </h2>
            <p className="text-gray-600 mt-2">Thank you for your order</p>
          </div>

          {/* Order Progress */}
          <div className="relative mb-8">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2" />
            <div
              className="absolute top-1/2 left-0 h-1 bg-green-600 -translate-y-1/2 transition-all duration-500 ease-in-out"
              style={{ width: progressWidth }}
            />

            <div className="relative flex justify-between">
              {steps.map((step, index) => {
                const isCompleted =
                  steps.findIndex((s) => s.status === orderStatus) >= index;
                const isCurrent = step.status === orderStatus;

                return (
                  <div key={index} className="flex flex-col items-center pt-5">
                    <motion.div
                      animate={isCurrent ? { scale: [1, 1.2, 1] } : {}}
                      transition={{ repeat: Infinity, duration: 2 }}
                      className={`w-8 h-8 rounded-full flex items-center justify-center z-10 
                      ${
                        isCompleted
                          ? "bg-green-600 text-white"
                          : "bg-white border-2 border-gray-300"
                      } ${isCurrent ? "ring-4 ring-green-100" : ""}`}
                    >
                      <step.icon className="w-4 h-4" />
                    </motion.div>
                    <span
                      className={`text-sm mt-2 ${
                        isCurrent
                          ? "text-green-600 font-medium"
                          : "text-gray-600"
                      }`}
                    >
                      {step.status}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Order Info */}
          <div className="border-t border-b py-4 space-y-2">
            <div className="flex justify-between">
              <span className="font-medium">Order ID:</span>
              <span>#{orderDetails._id ? orderDetails._id.slice(-6) : orderDetails.orderId?.slice(-6)}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Date:</span>
              <span>{orderDetails.date}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Payment ID:</span>
              <span>{orderDetails.paymentId}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Estimated Delivery:</span>
              <span>30-45 minutes</span>
            </div>
          </div>
        </div>

        {/* Order Items Card */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h3 className="text-lg font-bold mb-4">Order Details</h3>
          <div className="space-y-4">
            {orderDetails.items.map((item) => (
              <div
                key={item._id}
                className="flex justify-between items-center py-2 border-b last:border-0"
              >
                <div>
                  <h4 className="font-medium">{item.menuItem.name}</h4>
                  <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                </div>
                <span className="font-medium">
                  ₹{item.menuItem.price * item.quantity}
                </span>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="mt-6 pt-4 border-t space-y-2">
            <div className="flex justify-between text-sm">
              <span>Subtotal</span>
              <span>₹{orderDetails.total}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Delivery Fee</span>
              <span>₹40</span>
            </div>
            <div className="flex justify-between font-bold text-lg pt-2 border-t">
              <span>Total</span>
              <span>₹{orderDetails.total + 40}</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <Link
            to="/restaurants"
            className="flex-1 text-center bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700"
          >
            Order More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;
