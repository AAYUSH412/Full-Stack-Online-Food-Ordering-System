// src/components/admin/ManageOrder.jsx

import { useState, useEffect } from 'react';
import { CheckCircle, Clock, ChefHat, Truck, XCircle } from 'lucide-react';
import { toast } from 'react-toastify';

const ManageOrder = () => {
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
        throw new Error('Failed to fetch orders');
      }
    } catch (error) {
      setError('Error loading orders');
      toast.error('Failed to load orders');
    } finally {
      setLoading(false);
    }
  };

  const updateOrderStatus = async (orderId, newStatus) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/orders/${orderId}/status`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ 
          status: newStatus,
          razorpayOrderId: orderId
        })
      });
  
      const data = await response.json();
      
      if (data.success) {
        setOrders(orders.map(order => 
          order._id === data.data._id ? { ...order, status: newStatus } : order
        ));
        toast.success(`Order status updated to ${newStatus}`);
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error('Failed to update order status');
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Order Received': return <Clock className="w-5 h-5 text-yellow-500" />;
      case 'Preparing': return <ChefHat className="w-5 h-5 text-blue-500" />;
      case 'Out for Delivery': return <Truck className="w-5 h-5 text-purple-500" />;
      case 'Delivered': return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'Cancelled': return <XCircle className="w-5 h-5 text-red-500" />;
      default: return <Clock className="w-5 h-5 text-gray-500" />;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-20 flex justify-center items-center">
        <div className="text-xl">Loading orders...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen pt-20 flex justify-center items-center">
        <div className="text-xl text-red-500">{error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto py-8">
        <h1 className="text-2xl font-bold mb-8">Manage Orders</h1>
        
        <div className="grid gap-6">
          {orders.map((order) => (
            <div
              key={order._id}
              className="bg-white rounded-lg shadow-sm p-6"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-medium">
                    Order #{order._id.slice(-6)}
                  </h3>
                  <p className="text-gray-600">
                    {order.items.length} Items • ₹{order.totalAmount}
                  </p>
                  <p className="text-sm text-gray-500">
                    Ordered on {new Date(order.createdAt).toLocaleDateString().replaceAll('/', '-')} at {new Date(order.createdAt).toLocaleTimeString()}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  {getStatusIcon(order.status)}
                  <select
                    value={order.status}
                    onChange={(e) => updateOrderStatus(order._id, e.target.value)}
                    className="border rounded-md py-1 px-2 text-sm"
                  >
                    <option value="Order Received">Order Received</option>
                    <option value="Preparing">Preparing</option>
                    <option value="Out for Delivery">Out for Delivery</option>
                    <option value="Delivered">Delivered</option>
                    <option value="Cancelled">Cancelled</option>
                  </select>
                </div>
              </div>

              {/* Order Items */}
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
                        <p className="text-sm text-gray-600">
                          Quantity: {item.quantity} • ₹{item.menuItem.price * item.quantity}
                        </p>
                      </div>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      item.menuItem.isVeg ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {item.menuItem.isVeg ? 'Veg' : 'Non-veg'}
                    </span>
                  </div>
                ))}
              </div>

              {/* Payment Info */}
              <div className="mt-4 pt-4 border-t">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Payment ID:</span>
                  <span className="font-medium">{order.paymentId}</span>
                </div>
              </div>
            </div>
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

export default ManageOrder;