/* eslint-disable no-unused-vars */
import React from 'react';

const IoTPage = () => {
  return (
    <div className="px-20 py-12 mt-20">
      <section className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Internet of Things (IoT)</h1>
        <p className="text-lg text-gray-600 mb-6">
          Connect and control devices with IoT technology.
        </p>
        <button className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600">
          Join Group
        </button>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Why IoT?</h2>
        <p className="text-gray-600 mb-4">
          IoT connects devices, making smart homes, cities, and industries possible.
        </p>
        <button className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600">
          Discover IoT
        </button>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6">IoT Topics</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="p-4 bg-gray-100 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Smart Homes</h3>
            <p className="text-gray-600">
              Control lighting, security, and appliances remotely.
            </p>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Industrial IoT</h3>
            <p className="text-gray-600">
              Optimize production and reduce downtime with IoT.
            </p>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Wearable Tech</h3>
            <p className="text-gray-600">
              Track fitness and health with IoT-powered devices.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IoTPage;
