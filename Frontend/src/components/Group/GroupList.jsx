/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const GroupList = () => {
  // Mock data of groups
  const groups = [
    { id: 1, groupName: 'Tech Enthusiasts', description: 'A group for tech lovers', location: 'Online', members: 50, status: 'Public' },
    { id: 2, groupName: 'Art & Design', description: 'A group for creative minds', location: 'New York', members: 30, status: 'Private' },
  ];

  return (
    <div className="group-list-container">
      <h2>Groups</h2>
      <ul>
        {groups.map((group) => (
          <li key={group.id}>
            <Link to={{ pathname: `/group/${group.id}`, state: { group } }}>
              {group.groupName}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GroupList;
