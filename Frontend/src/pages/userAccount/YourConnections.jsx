/* eslint-disable no-unused-vars */
// src/pages/YourConnections.js
import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const YourConnections = () => {
  // Mock Data for Groups
  const groups = [
    {
      id: 1,
      name: "Tech Enthusiasts",
      members: 120,
      description: "A group for tech lovers.",
    },
    {
      id: 2,
      name: "Web Developers",
      members: 85,
      description: "All things web development.",
    },
    {
      id: 3,
      name: "AI & ML Innovators",
      members: 150,
      description: "Discuss AI and machine learning.",
    },
    {
      id: 4,
      name: "UI/UX Designers",
      members: 60,
      description: "Design tips and tricks.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="min-h-screen bg-gray-100 flex flex-col mt-20 lg:mt-25" >
        {/* Sidebar */}
        <div
          style={{
            width: "250px",
            padding: "20px",
          }}
        >
          <a
            href="/"
            style={{
              textDecoration: "none",
              display: "block",
              marginBottom: "30px",
            }}
          >
            &lt; Back to home page
          </a>
          <div
            style={{
              fontWeight: "bold",
              color: "#007bff",
              padding: "10px 20px",
            }}
          >
            Your Connections
          </div>
        </div>

        {/* Main Content */}
        <div style={{ flex: 1, padding: "40px" }}>
          <h2>Your Groups</h2>
          {groups.length > 0 ? (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "20px",
                marginTop: "20px",
              }}
            >
              {groups.map((group) => (
                <div
                  key={group.id}
                  style={{
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    padding: "20px",
                    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <h3 style={{ margin: "0 0 10px" }}>{group.name}</h3>
                  <p style={{ margin: "0 0 10px", color: "#666" }}>
                    {group.description}
                  </p>
                  <p style={{ margin: "0", fontWeight: "bold" }}>
                    {group.members} Members
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p style={{ marginTop: "20px", color: "#666" }}>
              You are not connected to any groups.
              <a
                href="#"
                style={{
                  textDecoration: "none",
                  color: "#007bff",
                  fontWeight: "bold",
                }}
              >
                Explore groups to join.
              </a>
            </p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default YourConnections;
