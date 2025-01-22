import { Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Restaurant = () => {
  const featuredRestaurants = [
    { name: 'The Gourmet Kitchen', image: 'https://ik.imagekit.io/xh3awoalr/food-delivery/jason-leung-poI7DelFiVA-unsplash.jpg?updatedAt=1737529754411', rating: 4.8 },
    { name: 'Pasta Paradise', image: 'https://ik.imagekit.io/xh3awoalr/food-delivery/jay-wennington-N_Y88TWmGwA-unsplash.jpg?updatedAt=1737529753552', rating: 4.7 },
    { name: 'The Sky Lounge', image: 'https://ik.imagekit.io/xh3awoalr/food-delivery/75ac19f133169b828a81357ab2010130.jpeg?updatedAt=1737529753318', rating: 4.9 },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-screen mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl xs:text-3xl font-bold text-gray-900 text-center mb-8 md:mb-12"
        >
          Featured Restaurants
        </motion.h2>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {featuredRestaurants.map((restaurant) => (
            <motion.div
              key={restaurant.name}
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden group border border-gray-100"
            >
              <div className="relative aspect-w-16 aspect-h-9">
                <img 
                  src={restaurant.image} 
                  alt={restaurant.name} 
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-110" 
                />
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="absolute top-4 right-4 bg-white rounded-full px-2 py-1 flex items-center shadow-md"
                >
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="ml-1 text-sm font-semibold">{restaurant.rating}</span>
                </motion.div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{restaurant.name}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-8 md:mt-12 text-center"
        >
          <Link 
            to='/restaurants'
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 cursor-pointer"
          >
            View All
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Restaurant;