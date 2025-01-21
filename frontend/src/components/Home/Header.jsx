import foodImage from '../../assets/food.jpg';
import backgroundImage from '../../assets/image.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header
        className="min-h-screen bg-cover bg-center bg-no-repeat border-b rounded-b-3xl mb-2"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="bg-gradient-to-b from-white/70 to-white/90 min-h-screen flex items-center">
          <main className="max-w-screen mx-auto  sm:px-12 lg:px-16">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Text Content */}
              <div className="space-y-8">
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[8rem] font-bold tracking-tight bg-gradient-to-b from-purple-500 via-purple-600 to-orange-500 bg-clip-text text-transparent pb-4">
                  BiteBuddy
                </h1>
                <p className="text-lg sm:text-xl text-gray-700 max-w-2xl leading-relaxed">
                  Welcome to <span className="font-semibold text-purple-600">BiteBuddy</span>, your go-to destination for flavorful, healthy meals. Discover a wide range of options that cater to your taste buds and nourish your body.
                </p>
                <div className="space-x-4">
                  <Link 
                  to='/restaurants'
                  className="px-6 py-3 text-white bg-purple-600 hover:bg-purple-700 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                    Explore Restaurants
                  </Link>
                  
                </div>
              </div>

              {/* Image Content */}
              <div className="relative">
                <img
                  src={foodImage}
                  alt="Artisanal food presentation"
                  className="rounded-3xl w-full h-auto shadow-2xl object-cover transform hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-3xl"></div>
              </div>
            </div>
          </main>
        </div>
        </header>

  );
};

export default Header;
