import React from 'react';

const Offers = () => {
  return (
    <section className="py-12 bg-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-purple-800">Exclusive Offers & Discounts</h2>
          <p className="text-lg text-gray-700 mt-2">
            Grab the best deals before they're gone!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Offer 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative">
              <img
                src="https://via.placeholder.com/400x250"
                alt="Offer 1"
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <h3 className="text-white text-xl font-bold">20% OFF</h3>
              </div>
            </div>
            <div className="p-4">
              <h4 className="text-lg font-semibold text-gray-900">First Order Discount</h4>
              <p className="text-gray-700 mt-2">
                Enjoy 20% off on your first order. Use code: <span className="font-bold text-purple-700">WELCOME20</span>
              </p>
              <button className="mt-4 px-4 py-2 w-full bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition duration-300">
                Shop Now
              </button>
            </div>
          </div>

          {/* Offer 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative">
              <img
                src="https://via.placeholder.com/400x250"
                alt="Offer 2"
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <h3 className="text-white text-xl font-bold">Buy 1 Get 1 Free</h3>
              </div>
            </div>
            <div className="p-4">
              <h4 className="text-lg font-semibold text-gray-900">Limited Time Offer</h4>
              <p className="text-gray-700 mt-2">
                Buy one meal and get another absolutely free. Valid till: <span className="font-bold text-red-500">31st Jan</span>
              </p>
              <button className="mt-4 px-4 py-2 w-full bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition duration-300">
                Grab the Deal
              </button>
            </div>
          </div>

          {/* Offer 3 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative">
              <img
                src="https://via.placeholder.com/400x250"
                alt="Offer 3"
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <h3 className="text-white text-xl font-bold">Free Delivery</h3>
              </div>
            </div>
            <div className="p-4">
              <h4 className="text-lg font-semibold text-gray-900">On Orders Above $50</h4>
              <p className="text-gray-700 mt-2">
                Get free delivery on all orders above $50. Enjoy delicious meals at your doorstep!
              </p>
              <button className="mt-4 px-4 py-2 w-full bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition duration-300">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offers;
