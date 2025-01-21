import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Star, IndianRupee, Clock } from 'lucide-react';

const RestaurantListing = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/restaurants/list`);
      const data = await response.json();
      
      if (data.success) {
        setRestaurants(data.data);
      } else {
        setError('Failed to fetch restaurants');
      }
    } catch (error) {
      console.error(error);
      setError('Error connecting to server');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20 flex justify-center items-center">
        <div className="text-xl">Loading restaurants...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20 flex justify-center items-center">
        <div className="text-xl text-red-500">{error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">All Restaurants</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {restaurants.map((restaurant) => (
            <Link to={`/restaurant/${restaurant._id}`} key={restaurant._id}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative">
                  <img
                    src={restaurant.image[0]}
                    alt={restaurant.name}
                    className="w-full h-48 object-cover"
                  />
                  {restaurant.offers && restaurant.offers[0] && (
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                      <p className="text-white text-sm font-medium">
                        {restaurant.offers[0]}
                      </p>
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {restaurant.name}
                    </h3>
                    <div className="flex items-center bg-green-600 px-2 py-1 rounded text-white">
                      <span className="text-sm font-bold">{restaurant.rating}</span>
                      <Star className="h-4 w-4 ml-1" fill="white" />
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mt-1">{restaurant.cuisine}</p>
                  <div className="flex items-center mt-4 text-sm text-gray-500 space-x-4">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{restaurant.deliveryTime} mins</span>
                    </div>
                    <div className="flex items-center">
                      <IndianRupee className="h-4 w-4 mr-1" />
                      <span>{restaurant.costForTwo} for two</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantListing;