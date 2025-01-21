import { Link } from 'react-router-dom';
import { blogs } from '../../assets/assets';


const BlogSection = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Latest Articles</h2>
          <p className="text-lg text-gray-700 mt-2">
            Explore our insights, tips, and guides to enhance your lifestyle.
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogs.map((blog) => (
            <div key={blog.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative">
                <img
                  src={blog.thumbnail}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">{blog.title}</h3>
                <p className="text-gray-700 mt-2 text-sm">
                  {blog.description}
                </p>
                <Link
                  to={blog.link}
                  className="mt-4 inline-block text-purple-600 font-semibold hover:underline"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Blogs Button */}
        <div className="text-center mt-10">
          <Link
            to="/blogs"
            className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition duration-300"
          >
            View All Blogs
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
