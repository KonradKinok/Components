import axios, { AxiosResponse,AxiosInstance } from "axios";

const apiKeySecret = "";
const apiClient1: AxiosInstance = axios.create({
  baseURL: `http://localhost:3000/api`,
  timeout: 1000,
  headers: { 'Content-Type': 'application/json' },
    params: {
        client_id: apiKeySecret,
    },
});
export const apiClient: AxiosInstance = axios.create({
  baseURL: `http://localhost:3000/api`,
  timeout: 1000,
  headers: { 'Content-Type': 'application/json' }
});

apiClient.interceptors.request.use((config) => {
    const fullUrl = `${config.baseURL}${config.url}`;
    console.log("Pełna ścieżka URL:", fullUrl);
    return config;
});

export interface Contact {
  _id: string | "";
  name: string | "";
  email: string | "";
  phone: string | "";
  favorite: boolean | false;
}