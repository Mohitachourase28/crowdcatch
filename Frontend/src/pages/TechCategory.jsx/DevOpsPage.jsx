/* eslint-disable no-unused-vars */
import React from 'react';

const DevOpsPage = () => {
  return (
    <div className="px-20 py-12 mt-20">
      <section className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">DevOps</h1>
        <p className="text-lg text-gray-600 mb-6">
          Learn how DevOps bridges development and operations for seamless delivery.
        </p>
        <button className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600">
          Join Group
        </button>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Why DevOps?</h2>
        <p className="text-gray-600 mb-4">
          DevOps fosters collaboration, automation, and faster delivery cycles.
        </p>
        <button className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600">
          Discover DevOps
        </button>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6">DevOps Topics</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="p-4 bg-gray-100 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Continuous Integration</h3>
            <p className="text-gray-600">
              Tools like Jenkins and GitLab for automated code integration.
            </p>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Infrastructure as Code</h3>
            <p className="text-gray-600">
              Automate infrastructure with Terraform and Ansible.
            </p>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Monitoring and Logging</h3>
            <p className="text-gray-600">
              Tools like Prometheus and ELK Stack for system monitoring.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DevOpsPage;
