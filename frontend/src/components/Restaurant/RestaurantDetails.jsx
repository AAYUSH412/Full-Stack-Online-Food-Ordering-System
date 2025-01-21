import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Star, Clock, IndianRupee, Plus} from 'lucide-react';

const RestaurantDetail = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [cartMessage, setCartMessage] = useState('');

  useEffect(() => {
    const fetchRestaurantAndMenu = async () => {
      try {
        const restaurantRes = await fetch(`${import.meta.env.VITE_API_URL}/api/restaurants/list/${id}`);
        const restaurantData = await restaurantRes.json();
  
        if (restaurantData.success) {
          setRestaurant(restaurantData.data);
  
          const menuRes = await fetch(`${import.meta.env.VITE_API_URL}/api/menus/restaurant/${id}`);
          const menuData = await menuRes.json();
  
          if (menuData.success) {
            setMenu(menuData.data.items || []);
          }
        } else {
          setError('Restaurant not found');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Failed to load restaurant details');
      } finally {
        setLoading(false);
      }
    };
  
    fetchRestaurantAndMenu();
  }, [id]);

  const addToCart = async (item) => {
    setIsAddingToCart(true);
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/cart/add`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          menuItem: {
            name: item.name,
            price: item.price,
            image: item.image[0],
            isVeg: item.isVeg
          },
          restaurantId: id
        })
      });
      
      const data = await response.json();
      if (data.success) {
        setCartMessage('Item added to cart');
        setTimeout(() => setCartMessage(''), 3000);
      }
    } catch (error) {
      console.error('Error adding to cart:', error);
      setCartMessage('Failed to add item to cart');
    } finally {
      setIsAddingToCart(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20 flex justify-center items-center">
        <div className="text-xl">Loading restaurant details...</div>
      </div>
    );
  }

  if (error || !restaurant) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20 flex justify-center items-center">
        <div className="text-xl text-red-500">{error || 'Restaurant not found'}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cart Button */}
        

        {/* Restaurant Header */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-8">
          <img
            src={restaurant.image[0]}
            alt={restaurant.name}
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">{restaurant.name}</h1>
                <p className="text-gray-600 mt-2">{restaurant.cuisine}</p>
                <div className="flex items-center mt-2 text-sm text-gray-500 space-x-4">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{restaurant.deliveryTime}</span>
                  </div>
                  <div className="flex items-center">
                    <IndianRupee className="h-4 w-4 mr-1" />
                    <span>₹{restaurant.costForTwo} for two</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center bg-green-600 px-3 py-1 rounded text-white">
                <span className="text-lg font-bold">{restaurant.rating}</span>
                <Star className="h-5 w-5 ml-1" fill="white" />
              </div>
            </div>
            {restaurant.offers && restaurant.offers.length > 0 && (
              <div className="mt-4 p-3 bg-gray-50 rounded-md">
                <h3 className="font-semibold text-gray-900">Offers</h3>
                <ul className="mt-2 space-y-1">
                  {restaurant.offers.map((offer, index) => (
                    <li key={index} className="text-green-600">{offer}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Menu Section */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Menu</h2>
          {menu.map((item) => (
            <div key={item._id} className="mb-8">
              <div className="flex justify-between items-center border-b pb-4">
                <div className="flex-1">
                  <h4 className="text-lg font-medium text-gray-900">
                    {item.name}
                    {item.isVeg ? (
                      <span className="ml-2 text-green-600">🟢</span>
                    ) : (
                      <span className="ml-2 text-red-600">🔴</span>
                    )}
                  </h4>
                  <p className="text-gray-600">{item.description}</p>
                  <p className="text-gray-900 font-semibold mt-1">₹{item.price}</p>
                </div>
                {item.image && item.image[0] && (
                  <img
                    src={item.image[0]}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-lg mr-4"
                  />
                )}
                <button
                  onClick={() => addToCart(item)}
                  disabled={isAddingToCart}
                  className={`bg-white border border-gray-300 rounded-lg px-4 py-2 flex items-center ${
                    isAddingToCart ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50'
                  }`}
                >
                  <Plus className="h-5 w-5 text-green-600" />
                  <span className="ml-2 text-green-600 font-medium">
                    {isAddingToCart ? 'Adding...' : 'ADD'}
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cart Message */}
      {cartMessage && (
        <div className="fixed bottom-20 right-4 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg">
          {cartMessage}
        </div>
      )}
    </div>
  );
};

export default RestaurantDetail;