import React from 'react'

const Chooseus = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 pt-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-12">
            Why Choose BiteBuddy?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold text-purple-600">Fresh Ingredients</h3>
              <p className="text-gray-600 mt-4">
                Our meals are prepared with the freshest ingredients to ensure the best taste and nutrition.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold text-purple-600">Affordable Prices</h3>
              <p className="text-gray-600 mt-4">
                Enjoy gourmet meals without breaking the bank. Quality and affordability in every bite.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold text-purple-600">Fast Delivery</h3>
              <p className="text-gray-600 mt-4">
                We value your time. Get your meals delivered hot and fresh in no time.
              </p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Chooseus
