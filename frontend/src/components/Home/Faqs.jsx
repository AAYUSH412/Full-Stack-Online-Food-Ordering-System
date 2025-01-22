import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { faqs } from '../../assets/assets';

const FAQsSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-8 sm:py-10 md:py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 px-2">
            Got Questions? We Have Answers
          </h2>
          <p className="text-base sm:text-lg text-gray-700 mt-2 px-2">
            Find quick answers to our most frequently asked questions.
          </p>
        </div>

        {/* FAQ Accordions */}
        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full text-left px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center focus:outline-none gap-4"
              >
                <span className="text-base sm:text-lg font-medium text-gray-900">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 sm:w-6 sm:h-6 text-purple-600 transform flex-shrink-0 ${
                    openIndex === index ? "rotate-180" : ""
                  } transition-transform duration-300`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
              <div
                className={`px-4 sm:px-6 pb-3 sm:pb-4 ${
                  openIndex === index ? "block" : "hidden"
                }`}
              >
                <p className="text-sm sm:text-base text-gray-700">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-8 sm:mt-10">
          <Link
            to="/contact"
            className="inline-block px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition duration-300"
          >
            Still Have Questions? Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FAQsSection;