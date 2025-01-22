import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import foodImage from '../../assets/food.jpg';
import backgroundImage from '../../assets/image.png';

const Header = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <header
      className="min-h-screen bg-cover bg-center bg-no-repeat border-b rounded-b-3xl mb-2"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="bg-gradient-to-b from-white/70 to-white/90 min-h-screen flex items-center">
        <main className="max-w-screen w-full mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center pt-20 md:pt-24 lg:pt-0"
          >
            {/* Text Content */}
            <div className="space-y-6 md:space-y-4">
              <motion.h1
                variants={itemVariants}
                className="pt-0 md:pt-10 lg:pt-32 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[8rem] font-bold tracking-tight bg-gradient-to-b from-purple-500 via-purple-600 to-orange-500 bg-clip-text text-transparent pb-4"
              >
                BiteBuddy
              </motion.h1>
              <motion.p 
                variants={itemVariants} 
                className="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl leading-relaxed"
              >
                Welcome to <span className="font-semibold text-purple-600">BiteBuddy</span>, your go-to destination for
                flavorful, healthy meals. Discover a wide range of options that cater to your taste buds and nourish
                your body.
              </motion.p>
              <motion.div variants={itemVariants} className="pt-4">
                <Link
                  to="/restaurants"
                  className="inline-block px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base text-white bg-purple-600 hover:bg-purple-700 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
                >
                  Explore Restaurants
                </Link>
              </motion.div>
            </div>

            {/* Image Content */}
            <motion.div 
              variants={itemVariants} 
              className="relative mt-8 lg:mt-0 order-first lg:order-last"
            >
              <img
                src={foodImage}
                alt="Artisanal food presentation"
                className="rounded-3xl w-full h-auto shadow-2xl object-cover transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-3xl"></div>
            </motion.div>
          </motion.div>
        </main>
      </div>
    </header>
  );
};

export default Header;