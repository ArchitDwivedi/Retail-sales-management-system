import axios from "axios";

const apiClient = axios.create({
  baseURL:"https://retail-sales-management-system-rouge.vercel.app/api",   // backend base URL
});

export default apiClient;
