import axios from "axios";

export const api = axios.create({
  baseURL: "https://library-backend-production-b9cf.up.railway.app/",
});
