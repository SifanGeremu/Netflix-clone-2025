import axios from "axios";

const ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNGFjMzY5MTFhNjc0ZjBkODg3YTQyNjZiMmRiZjA4MSIsIm5iZiI6MTczNjc5MjkyMy43OTgsInN1YiI6IjY3ODU1YjViYzVkMmU5NmUyNjdiYmQxZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-iHupCqh1aZZSaAmJyp5JwSedpK9uimiFlDHGKgFQyw"; // Replace with your v4 token

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization: `Bearer ${ACCESS_TOKEN}`, // Correct authentication method
    "Content-Type": "application/json",
  },
});

// Function to fetch movies
export const fetchMovies = async (endpoint) => {
  try {
    const response = await axiosInstance.get(endpoint);
    return response.data;
  } catch (error) {
    console.error(
      "Error fetching data:",
      error.response?.data || error.message
    );
    return null;
  }
};

export default axiosInstance;
