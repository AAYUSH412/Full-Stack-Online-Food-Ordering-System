import React from 'react';
import { Link } from 'react-router-dom';

const caseStudies = [
  {
    id: 1,
    title: "E-Commerce Transformation",
    achievements: "Increased sales by 30% through a seamless user experience.",
    thumbnail: "https://via.placeholder.com/400x250",
    link: "/case-studies/ecommerce-transformation",
  },
  {
    id: 2,
    title: "Enterprise Automation",
    achievements: "Reduced operational costs by 25% with automated workflows.",
    thumbnail: "https://via.placeholder.com/400x250",
    link: "/case-studies/enterprise-automation",
  },
  {
    id: 3,
    title: "Retail Expansion Strategy",
    achievements: "Achieved 50% growth in revenue with a data-driven approach.",
    thumbnail: "https://via.placeholder.com/400x250",
    link: "/case-studies/retail-expansion",
  },
  {
    id: 4,
    title: "Healthcare Tech Innovation",
    achievements: "Streamlined patient care with a 20% efficiency boost.",
    thumbnail: "https://via.placeholder.com/400x250",
    link: "/case-studies/healthcare-tech",
  },
];

const CaseStudies = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Our Success Stories</h2>
          <p className="text-lg text-gray-700 mt-2">
            Discover how we've helped businesses achieve remarkable results.
          </p>
        </div>

        {/* Horizontal Scrolling Container for Small Screens */}
        <div className="overflow-x-auto">
          <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {caseStudies.map((caseStudy) => (
              <div
                key={caseStudy.id}
                className="min-w-[300px] md:min-w-0 bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={caseStudy.thumbnail}
                    alt={caseStudy.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900">{caseStudy.title}</h3>
                  <p className="text-gray-700 mt-2 text-sm">{caseStudy.achievements}</p>
                  <Link
                    to={caseStudy.link}
                    className="mt-4 inline-block text-purple-600 font-semibold hover:underline"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
