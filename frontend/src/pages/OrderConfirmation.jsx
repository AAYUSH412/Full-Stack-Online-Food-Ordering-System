import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const OrderConfirmation = () => {
  const location = useLocation();
  const orderDetails = location.state?.orderDetails;

  if (!orderDetails) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-xl text-red-500">No order details found</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 px-4 bg-gray-50">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm p-6">
        <div className="text-center mb-6">
          <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900">Order Confirmed!</h2>
          <p className="text-gray-600 mt-2">Thank you for your order</p>
        </div>

        <div className="border-t border-b py-4 my-6">
          <div className="flex justify-between mb-2">
            <span className="font-medium">Order ID:</span>
            <span>{orderDetails.orderId}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="font-medium">Date:</span>
            <span>{orderDetails.date}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Total Amount:</span>
            <span>₹{orderDetails.total}</span>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-bold text-lg">Order Items</h3>
          {orderDetails.items.map((item) => (
            <div key={item._id} className="flex justify-between">
              <span>{item.menuItem.name} x {item.quantity}</span>
              <span>₹{item.menuItem.price * item.quantity}</span>
            </div>
          ))}
        </div>

        <Link 
          to="/restaurants" 
          className="block w-full text-center bg-green-600 text-white py-3 rounded-lg mt-6 font-medium hover:bg-green-700"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default OrderConfirmation;