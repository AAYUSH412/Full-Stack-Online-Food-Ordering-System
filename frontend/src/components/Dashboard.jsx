import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Clock, ChefHat, Truck, HomeIcon } from 'lucide-react';

const Dashboard = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/orders/user`, {
        credentials: 'include'
      });
      const data = await response.json();
      
      if (data.success) {
        setOrders(data.data);
      } else {
        setError('Failed to fetch orders');
      }
    } catch (error) {
      setError('Error loading orders');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="min-h-screen pt-20 flex justify-center items-center">
      <div className="text-xl">Loading orders...</div>
    </div>;
  }

  if (error) {
    return <div className="min-h-screen pt-20 flex justify-center items-center">
      <div className="text-xl text-red-500">{error}</div>
    </div>;
  }

  return (
    <div className="min-h-screen pt-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto py-8">
        <h1 className="text-2xl font-bold mb-8">Order History</h1>
        
        <div className="space-y-4">
          {orders.map((order) => (
            <motion.div
              key={order._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-lg shadow-sm p-6"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-medium">Order ID: #{order._id.slice(-6)}</h3>
                  <p className="text-gray-600">
                    {order.items.length} Items • ₹{order.totalAmount}
                  </p>
                  <p className="text-sm text-gray-500">
                    Ordered on {new Date(order.createdAt).toLocaleDateString()}
                  </p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium
                  ${order.status === 'Delivered' ? 'bg-green-100 text-green-800' : 
                    order.status === 'Cancelled' ? 'bg-red-100 text-red-800' : 
                    'bg-yellow-100 text-yellow-800'}`}
                >
                  {order.status}
                </span>
              </div>

              <div className="border-t pt-4">
                {order.items.map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-2">
                    <div className="flex items-center">
                      {item.menuItem.image && (
                        <img 
                          src={item.menuItem.image} 
                          alt={item.menuItem.name}
                          className="w-12 h-12 rounded object-cover mr-4"
                        />
                      )}
                      <div>
                        <h4 className="font-medium">{item.menuItem.name}</h4>
                        <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                      </div>
                    </div>
                    <span className="font-medium">₹{item.menuItem.price * item.quantity}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}

          {orders.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-600">No orders found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;