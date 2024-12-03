/* eslint-disable no-unused-vars */
import React from 'react';
import Category from '../Category/Category';

import aiIcon from '../../assets/ai.png';
import blockchainIcon from '../../assets/blockchain.png';
import cloudIcon from '../../assets/cloud.png';
import cyber_secIcon from '../../assets/cyber-sec.png';
import data_scienceIcon from '../../assets/data-science.png';
import devopsIcon from '../../assets/devops.png';
import mlIcon from '../../assets/ml.png';
import iotIcon from '../../assets/iot.png';

const categories = [
  { icon: aiIcon, label: 'AI' },
  { icon: blockchainIcon, label: 'Blockchain' },
  { icon: cloudIcon, label: 'Cloud' },
  { icon: cyber_secIcon, label: 'Cyber Security' },
  { icon: data_scienceIcon, label: 'Data Science' },
  { icon: devopsIcon, label: 'DevOps' },
  { icon: mlIcon, label: 'Machine Learning' },
  { icon: iotIcon, label: 'IoT'},
];

const ExploreCategories = () => {
  return (
    <div className="py-12 px-20"> {/* Consistent padding */}
      <h2 className="text-2xl font-bold text-start ml-12 mb-8">Explore top categories</h2> {/* Consistent margins */}
      
      {/* Categories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8 gap-4 px-6"> {/* Adjusted grid gap */}
        {categories.map((category, index) => (
          <Category key={index} icon={category.icon} label={category.label} />
        ))}
      </div>
    </div>
  );
};

export default ExploreCategories;