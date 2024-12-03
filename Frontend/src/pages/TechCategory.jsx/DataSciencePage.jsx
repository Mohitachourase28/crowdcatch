/* eslint-disable no-unused-vars */
import React from 'react';

const DataSciencePage = () => {
  return (
    <div className="px-20 py-12 mt-20">
      <section className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Data Science</h1>
        <p className="text-lg text-gray-600 mb-6">
          Uncover insights and make data-driven decisions with Data Science.
        </p>
        <button className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600">
          Join Group
        </button>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Why Data Science?</h2>
        <p className="text-gray-600 mb-4">
          Data Science helps businesses analyze, interpret, and predict trends effectively.
        </p>
        <button className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600">
          Discover Data Science
        </button>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6">Data Science Topics</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="p-4 bg-gray-100 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Data Visualization</h3>
            <p className="text-gray-600">
              Use tools like Tableau and Power BI to visualize data.
            </p>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Big Data Analytics</h3>
            <p className="text-gray-600">
              Analyze large-scale data sets with Hadoop and Spark.
            </p>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Predictive Modeling</h3>
            <p className="text-gray-600">
              Build models to predict future trends and outcomes.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DataSciencePage;
