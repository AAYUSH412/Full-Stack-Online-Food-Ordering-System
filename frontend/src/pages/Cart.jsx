import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MapPin, Plus, Minus, Trash2 } from 'lucide-react';
import initializeRazorpay from '../utils/initializeRazorpay';

const Cart = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [deliveryTip, setDeliveryTip] = useState(0);
  const [distance] = useState(10);

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/cart`);
      const data = await response.json();
      if (data.success) {
        setCart(data.data);
      }
    } catch (error) {
      console.error('Error fetching cart:', error);
      setError('Failed to load cart');
    } finally {
      setLoading(false);
    }
  };

  const updateItemQuantity = async (itemId, newQuantity) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/cart/update`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ itemId, quantity: newQuantity })
      });
      const data = await response.json();
      if (data.success) {
        setCart(data.data);
      }
    } catch (error) {
      console.error('Error updating quantity:', error);
    }
  };

  const handlePaymentSuccess = (orderId) => {
    const orderDetails = {
      orderId,
      items: cart.items,
      total,
      date: new Date().toLocaleString()
    };
    navigate('/payment-success', { state: { orderDetails } });
  };

  const handlePaymentFailure = () => {
    navigate('/payment-failed');
  };

  const handleCheckout = () => {
    initializeRazorpay(total, handlePaymentSuccess, handlePaymentFailure);
  };

  if (loading) return <div className="min-h-screen pt-20 flex items-center justify-center">
    <div className="text-xl">Loading cart...</div>
  </div>;

  if (error) return <div className="min-h-screen pt-20 flex items-center justify-center">
    <div className="text-xl text-red-500">{error}</div>
  </div>;

  if (!cart?.items?.length) return <div className="min-h-screen pt-20 flex flex-col items-center justify-center">
    <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
    <Link to="/restaurants" className="text-blue-600 hover:text-blue-800">Browse Restaurants</Link>
  </div>;

  const subtotal = cart.items.reduce((total, item) => total + (item.menuItem.price * item.quantity), 0);
  const deliveryFee = Math.ceil(distance / 10) * 10;
  const platformFee = 10;
  const gstAndCharges = Math.round(subtotal * 0.10);
  const total = subtotal + deliveryFee + platformFee + gstAndCharges + deliveryTip;
  const tipOptions = [10, 20, 30, 50];

  return (
    <div className="min-h-screen pt-20 px-4 bg-gray-50">
      <div className="max-w-3xl mx-auto my-10">
        

        {/* Cart Items */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
          {cart.items.map((item) => (
            <div key={item._id} className="flex justify-between items-center py-4 border-b last:border-0">
              <div className="flex items-center gap-4">
                {item.menuItem.image && (
                  <img src={item.menuItem.image} alt={item.menuItem.name} className="w-16 h-16 object-cover rounded" />
                )}
                <div>
                  <h3 className="font-medium">{item.menuItem.name}</h3>
                  <p className="text-gray-500">₹{item.menuItem.price}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <button onClick={() => updateItemQuantity(item._id, 0)} className="text-red-500 hover:text-red-700">
                  <Trash2 className="h-5 w-5" />
                </button>
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => updateItemQuantity(item._id, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                    className="p-1 rounded-full hover:bg-gray-100 disabled:opacity-50"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="w-8 text-center">{item.quantity}</span>
                  <button onClick={() => updateItemQuantity(item._id, item.quantity + 1)} className="p-1 rounded-full hover:bg-gray-100">
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
                <span className="font-medium">₹{item.menuItem.price * item.quantity}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bill Details */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
          <h3 className="font-bold mb-4">Bill Details</h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span>Item Total</span>
              <span>₹{subtotal}</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery Fee ({distance}km)</span>
              <span>₹{deliveryFee}</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Delivery Tip</span>
              <div className="flex gap-2">
                {tipOptions.map((tip) => (
                  <button
                    key={tip}
                    onClick={() => setDeliveryTip(tip)}
                    className={`px-3 py-1 rounded ${
                      deliveryTip === tip ? 'bg-green-600 text-white' : 'bg-gray-100'
                    }`}
                  >
                    ₹{tip}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex justify-between">
              <span>Platform fee</span>
              <span>₹{platformFee}</span>
            </div>
            <div className="flex justify-between">
              <span>GST and Restaurant Charges (10%)</span>
              <span>₹{gstAndCharges}</span>
            </div>
            <div className="flex justify-between items-center py-2 border-t">
              <span className="font-bold">TO PAY</span>
              <span className="font-bold">₹{total}</span>
            </div>
          </div>
        </div>

        {/* Checkout Button */}
        <button 
          onClick={handleCheckout}
          className="w-full bg-green-600 text-white py-3 rounded-lg mt-4 font-medium hover:bg-green-700"
        >
          Proceed to Pay ₹{total}
        </button>
      </div>
    </div>
  );
};

export default Cart;