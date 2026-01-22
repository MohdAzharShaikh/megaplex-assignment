import axios from 'axios';

// Create an axios instance using the environment variable
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

// Request Interceptor: Automatically attach the token to every request
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

// Response Interceptor: Handle global errors like session expiry 
api.interceptors.response.use(
  (response) => response,
  (error) => {
    //If API says unauthorized, clear storage and kick to login
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('tokenTimestamp');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Updated export functions using the 'api' instance
export const loginUser = async (username) => {
  const response = await api.get('/users');
  const user = response.data.find(u => u.username === username || u.email === username);
  
  if (user) {
    return { data: { token: 'dummy-token-123', user } };
  } else {
    throw new Error('User not found');
  }
};

export const fetchUsers = () => api.get('/users');

export default api;