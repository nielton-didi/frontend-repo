import axios from "axios";

const API_BASE_URL = "https://your-backend-api-url.com"; // Replace with your backend URL

// Axios instance for authenticated requests
const apiClient = axios.create({
  baseURL: API_BASE_URL,
});

// Function to set the bearer token
export const setAuthToken = (token: string | null) => {
  if (token) {
    apiClient.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete apiClient.defaults.headers.common["Authorization"];
  }
};

// Fetch user data
export const fetchUserData = async () => {
  const response = await apiClient.get("/user");
  return response.data;
};

// Update user data
export const updateUserData = async (userData: Record<string, any>) => {
  const response = await apiClient.put("/user", userData);
  return response.data;
};
