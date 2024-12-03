/* eslint-disable no-unused-vars */
import React from 'react';

const BlockchainPage = () => {
  return (
    <div className="px-20 py-12 mt-20">
      <section className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Blockchain</h1>
        <p className="text-lg text-gray-600 mb-6">
          Explore how blockchain is revolutionizing security, transparency, and decentralization.
        </p>
        <button className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600">
          Join Group
        </button>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Why Blockchain?</h2>
        <p className="text-gray-600 mb-4">
          Blockchain offers secure and transparent systems for finance, supply chain, and decentralized applications.
        </p>
        <button className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600">
          Discover Blockchain
        </button>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6">Blockchain Topics</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="p-4 bg-gray-100 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Cryptocurrencies</h3>
            <p className="text-gray-600">Bitcoin, Ethereum, and decentralized currencies.</p>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Smart Contracts</h3>
            <p className="text-gray-600">
              Automate agreements with secure and tamper-proof contracts.
            </p>
          </div>
          {/* Add other topic cards */}
        </div>
      </section>
    </div>
  );
};

export default BlockchainPage;
