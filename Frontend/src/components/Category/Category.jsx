/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Category = ({ icon, label }) => {
  const navigate = useNavigate();

  // Define the navigation path based on label
  const handleCategoryClick = () => {
    const path = `/${label.toLowerCase().replace(/ /g, '-')}`;
    navigate(path);
  };

  return (
    <div
      onClick={handleCategoryClick}
      className="ml-8 category-card bg-gray-50 rounded-lg p-6 shadow-md hover:scale-105 transition-transform cursor-pointer flex flex-col items-center justify-center"
    >
      <img src={icon} alt={label} className="w-22 h-22 mx-auto mb-4" />
      <p className="text-lg font-semibold text-gray-700 text-center">{label}</p>
    </div>
  );
};

export default Category;
