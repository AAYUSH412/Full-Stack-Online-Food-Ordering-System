import { Star, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const Restaurant = () => {
  const featuredRestaurants = [
    { name: 'The Gourmet Kitchen', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80', rating: 4.8 },
    { name: 'Pasta Paradise', image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80', rating: 4.7 },
    { name: 'Sushi Master', image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&q=80', rating: 4.9 },
  ];

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-screen mx-auto px-4 sm:px-6 lg:px-8" >
        <h2 className="text-5xl xs:text-3xl font-bold text-gray-900 text-center mb-8 md:mb-12">Featured Restaurants</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {featuredRestaurants.map((restaurant) => (
            <div key={restaurant.name} className="bg-white rounded-lg shadow-lg overflow-hidden group border border-gray-100">
              <div className="relative aspect-w-16 aspect-h-9">
                <img 
                  src={restaurant.image} 
                  alt={restaurant.name} 
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-110" 
                />
                <div className="absolute top-4 right-4 bg-white rounded-full px-2 py-1 flex items-center shadow-md">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="ml-1 text-sm font-semibold">{restaurant.rating}</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{restaurant.name}</h3>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 md:mt-12 text-center">
          <Link 
            to='/restaurants'
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 cursor-pointer">
            View All
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Restaurant