/* eslint-disable no-unused-vars */
import React from 'react';

const CyberSecurityPage = () => {
  return (
    <div className="px-20 py-12 mt-20">
      <section className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Cyber Security</h1>
        <p className="text-lg text-gray-600 mb-6">
          Protect data and systems with cutting-edge security measures.
        </p>
        <button className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600">
          Join Group
        </button>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Why Cyber Security?</h2>
        <p className="text-gray-600 mb-4">
          Cybersecurity safeguards sensitive information and ensures business continuity.
        </p>
        <button className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600">
          Discover Cyber Security
        </button>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6">Cyber Security Topics</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="p-4 bg-gray-100 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Ethical Hacking</h3>
            <p className="text-gray-600">
              Learn techniques to identify and fix vulnerabilities.
            </p>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Threat Analysis</h3>
            <p className="text-gray-600">
              Study attack patterns and mitigation strategies.
            </p>
          </div>
          {/* Add other topic cards */}
        </div>
      </section>
    </div>
  );
};

export default CyberSecurityPage;
