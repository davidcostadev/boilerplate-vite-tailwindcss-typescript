import axios from 'axios';

if (!import.meta.env.VITE_API_URL) {
  throw new Error('VITE_API_URL is not set');
}

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, // 10 seconds
});

apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Response interceptor for handling common errors
apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle common errors (401, 403, etc.)
    if (error.response) {
      // Handle specific status codes if needed
      if (error.response.status === 401) {
        // Handle unauthorized (e.g., redirect to login)
        console.error('Unauthorized access');
        // You could dispatch a logout action or redirect here
      }
    }
    return Promise.reject(error);
  },
);

export default apiClient;
