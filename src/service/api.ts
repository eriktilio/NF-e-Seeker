import axios from "axios";

const api = axios.create({
  baseURL: process.env.VITE_API_BASE_URL,
  timeout: 60000, // Tempo máximo de espera por uma resposta (em milissegundos)
});

export default api;
