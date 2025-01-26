import axios, { AxiosResponse,AxiosInstance } from "axios";

const apiKeySecret = "";
const apiClient1: AxiosInstance = axios.create({
  baseURL: `http://localhost:3000/api`,
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
    params: {
        client_id: apiKeySecret,
    },
});
export const apiClient: AxiosInstance = axios.create({
  baseURL: `http://localhost:3000/api`,
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});

// Dodaj interceptor, aby automatycznie dodawać token do nagłówków
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // Pobierz token z localStorage

    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // Dodaj token do nagłówków
      console.warn("Token found in localStorage");
    } else {
      console.warn("No token found in localStorage");
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export interface Contact {
  _id: string | "";
  name: string | "";
  email: string | "";
  phone: string | "";
  favorite: boolean | false;
}