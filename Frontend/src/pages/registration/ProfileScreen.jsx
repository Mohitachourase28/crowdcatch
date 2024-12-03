import { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../context/AuthProvider.jsx'; // Adjust path as necessary

const ProfileScreen = () => {
  const [profile, setProfile] = useState({});
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true); // Added loading state
  const [authUser, , logout] = useAuth(); // Access auth user and logout function from context

  useEffect(() => {
    const fetchProfile = async () => {
      setLoading(true); // Start loading
      const token = localStorage.getItem('token');

      if (!token) {
        setError('No token found, please log in.');
        setLoading(false); // Stop loading
        return;
      }

      try {
        const { data } = await axios.get('/api/users/profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProfile(data);
      } catch (error) {
        setError('Failed to fetch profile. Unauthorized.');
        if (error.response?.status === 401) {
          logout(); // Logout if unauthorized
        }
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchProfile();
  }, [authUser, logout]); // Re-fetch profile if authUser changes

  if (loading) {
    return <p>Loading...</p>; // Display loading message
  }

  return (
    <div>
      <h2>User Profile</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {profile && (
        <div>
          <p>Name: {profile.name}</p>
          <p>Email: {profile.email}</p>
          {/* Add any additional profile information you want to display */}
        </div>
      )}
    </div>
  );
};

export default ProfileScreen;
