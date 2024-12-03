/* eslint-disable no-unused-vars */
import React from 'react';

const CloudPage = () => {
  return (
    <div className="px-20 py-12 mt-20">
      <section className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Cloud Computing</h1>
        <p className="text-lg text-gray-600 mb-6">
          Learn how cloud computing enables scalable and flexible solutions.
        </p>
        <button className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600">
          Join Group
        </button>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Why Cloud?</h2>
        <p className="text-gray-600 mb-4">
          Cloud technology provides cost-effective, scalable, and secure solutions for businesses.
        </p>
        <button className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600">
          Discover Cloud
        </button>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6">Cloud Topics</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="p-4 bg-gray-100 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Public Cloud</h3>
            <p className="text-gray-600">
              Platforms like AWS, Azure, and Google Cloud.
            </p>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Hybrid Cloud</h3>
            <p className="text-gray-600">
              Combining private and public cloud for optimized performance.
            </p>
          </div>
          {/* Add other topic cards */}
        </div>
      </section>
    </div>
  );
};

export default CloudPage;
