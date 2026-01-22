import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchUsers } from '../services/api';

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true); // Show loader
  const [error, setError] = useState(null);
  const navigate = useNavigate();

const loadData = async () => {
  setLoading(true);
  setError(null);
  try {
    const response = await fetchUsers();
    setUsers(response.data); 
  } catch (err) {
    setError('Failed to load users. Please check your connection.');
  } finally {
    setLoading(false);
  }
};

  useEffect(() => { loadData(); }, []);

  const handleLogout = () => {
    // Clear token and redirect
    localStorage.removeItem('token');
    navigate('/login');
  };

if (loading) {
  return (
    <div style={{ padding: '20px', background: '#f0f2f5', minHeight: '100vh' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 style={{ height: '30px', width: '200px', background: '#e0e0e0', borderRadius: '4px' }}></h2>
      </div>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', 
        gap: '20px', 
        marginTop: '20px' 
      }}>
        {[1, 2, 3, 4, 5, 6].map(i => (
          <div key={i} className="auth-card skeleton" style={{ padding: '20px' }}>
            <div className="skeleton-avatar"></div>
            <div className="skeleton-text"></div>
            <div className="skeleton-text" style={{ width: '50%' }}></div>
          </div>
        ))}
      </div>
    </div>
  );
}

  return (
<div className="dashboard-layout">
    <nav className="navbar">
      <div className="nav-content">
        <div className="logo-section">
          <div className="logo-icon">👤</div>
          <h2>User Dashboard</h2>
        </div>
        <div className="user-actions">
          <button onClick={handleLogout} className="logout-btn">
            Logout
          </button>
        </div>
      </div>
    </nav>

      {error ? (
        <div className="error-box">
          <p>{error}</p>
          <button className="retry-btn" onClick={loadData}>Retry</button>
        </div>
      ) : (
       <div className="dashboard-content grid-container">
  {users && users.length > 0 ? (
    users.map(user => (
        <div key={user.id} className="user-profile-card">
          <div className="avatar-wrapper">
            <img src={`https://i.pravatar.cc/150?u=${user.id}`} alt={user.name} />
          </div>
          <h4>{user.name}</h4>
          <p className="user-email">{user.email}</p>
          <p className="user-company">{user.company?.name || 'Freelancer'}</p>
        </div>
    ))
  ) : (
    <p>No users found.</p>
  )}
</div>
      )}
    </div>
  );
};

export default Dashboard;