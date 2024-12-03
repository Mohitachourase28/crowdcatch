/* eslint-disable no-unused-vars */
import React from 'react';

const MachineLearningPage = () => {
  return (
    <div className="px-20 py-12 mt-20">
      <section className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Machine Learning</h1>
        <p className="text-lg text-gray-600 mb-6">
          Discover how machines learn and make intelligent decisions.
        </p>
        <button className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600">
          Join Group
        </button>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Why Machine Learning?</h2>
        <p className="text-gray-600 mb-4">
          Machine Learning powers predictive systems and intelligent applications.
        </p>
        <button className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600">
          Discover Machine Learning
        </button>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6">Machine Learning Topics</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="p-4 bg-gray-100 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Supervised Learning</h3>
            <p className="text-gray-600">
              Learn regression and classification algorithms.
            </p>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Unsupervised Learning</h3>
            <p className="text-gray-600">
              Discover clustering and dimensionality reduction techniques.
            </p>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Deep Learning</h3>
            <p className="text-gray-600">
              Neural networks for image, speech, and text processing.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MachineLearningPage;
