import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  const tokenTimestamp = localStorage.getItem('tokenTimestamp');
  
  const EXPIRY_LIMIT = Number(import.meta.env.VITE_SESSION_EXPIRY_MS) || 3600000; 

  if (!token || !tokenTimestamp) {
    return <Navigate to="/login" replace />; 
  }

  const isExpired = Date.now() - parseInt(tokenTimestamp) > EXPIRY_LIMIT;

  if (isExpired) {
    localStorage.removeItem('token'); 
    localStorage.removeItem('tokenTimestamp');
    return <Navigate to="/login" replace />; 
  }
  
  return children;
};

export default ProtectedRoute;