/* eslint-disable no-unused-vars */
import React from 'react';
import Footer from '../../components/Footer/Footer';

const AIPage = () => {
  return (
    <div>
    <div className="px-20 py-12 mt-20">
      {/* Hero Section */}
      <section className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Artificial Intelligence (AI)</h1>
        <p className="text-lg text-gray-600 mb-6">
          Explore the transformative potential of AI in various industries and its functional areas.
        </p>
        <button className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600">
          Join Group
        </button>
      </section>

      {/* Details Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Why AI?</h2>
        <p className="text-gray-600 mb-4">
          AI is transforming industries like healthcare, finance, retail, and more. Its applications range from data analysis to automation, enhancing productivity and innovation.
        </p>
        <button className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600">
          Discover AI
        </button>
      </section>

      {/* Topics Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">AI Topics</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="p-4 bg-gray-100 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Applications</h3>
            <p className="text-gray-600">
              AI is used in healthcare, business, finance, agriculture, and more.
            </p>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">AI in retail
            </h3>
            <p className="text-gray-600">
            AI can be used for dynamic pricing, electronic shelf labels, and generative AI.             </p>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Functional Areas</h3>
            <p className="text-gray-600">
              Includes machine learning, NLP, computer vision, and generative AI.
            </p>
          </div>
          {/* Add other topic cards */}
        </div>
      </section>
    </div>
    <Footer/>
    </div>
  );
};

export default AIPage;
