import { Star } from 'lucide-react';
import { testimonials } from '../../assets/assets';

const Testimonials = () => {
  return (
    <section className="py-8 sm:py-10 md:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 text-center mb-6 sm:mb-8 md:mb-12">
          What Our Customers Say
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.name} 
              className="bg-white rounded-lg shadow-lg p-6 sm:p-8 md:p-12 transform transition duration-300 hover:shadow-xl"
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                />
                <div className="ml-3 sm:ml-4">
                  <h3 className="font-semibold text-sm sm:text-base">
                    {testimonial.name}
                  </h3>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star 
                        key={i} 
                        className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400 fill-current" 
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {testimonial.comment}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;