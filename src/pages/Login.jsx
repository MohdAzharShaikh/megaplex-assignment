import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../services/api';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState('');
  const navigate = useNavigate();


const handleLogin = async (e) => {
  if (e) e.preventDefault();
  setLoading(true);
  setError('');

  try {
  const response = await loginUser(username, password);
    
    // Save token AND current timestamp (in milliseconds)
    localStorage.setItem('token', response.data.token);
    localStorage.setItem('tokenTimestamp', Date.now().toString()); 
    
    navigate('/dashboard');
  } catch (err) {
    // Handle API failure gracefully with messages
    setError('Login failed. Please use valid credentials(eg. Bret) and try again.');
  } finally {
    setLoading(false);
  }
};




  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Welcome Back</h2>
        <form onSubmit={handleLogin}>
          <input type="text" placeholder="Username" value={username} 
            onChange={(e) => setUsername(e.target.value)} required />
          <input type="password" placeholder="Password" value={password} 
            onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit" disabled={loading}>
            {loading ? 'Authenticating...' : 'Login'}
          </button>
        </form>
        {error && (
          <div className="error-box">
            <p>{error}</p>
            <button className="retry-btn" onClick={handleLogin}>Retry</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;