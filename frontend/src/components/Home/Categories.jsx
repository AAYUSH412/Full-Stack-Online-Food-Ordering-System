import { Link } from 'react-router-dom';
import { categories } from '../../assets/assets';

const Categories = () => {
  return (
    <section className="py-12 md:py-16 bg-gray-50 ">
      <div className="max-w-screen mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl xs:text-3xl font-bold text-gray-900 text-center mb-8 md:mb-12">
          Meal Categories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {categories.map((category) => (
            <Link
              to={category.link}
              key={category.name}
              className="group block bg-white rounded-lg shadow-lg overflow-hidden w-auto h-auto items-center justify-center"
            >
              <div className="relative">
                {/* Category Image */}
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-64 object-cover object-center transition-transform duration-300 group-hover:scale-110"
                />
                {/* Overlay with Text */}
                <div className="absolute inset-0 bg-slate-900 bg-opacity-50 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-100">
                  <h3 className="text-white text-4xl font-semibold">{category.name}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
