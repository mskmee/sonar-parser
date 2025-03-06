import { config } from "../config.ts";
import axios from "axios";

axios.defaults.baseURL = config.BASE_URL;
axios.defaults.headers.common.Authorization = `Bearer ${config.TOKEN}`;

const requestInstance = axios.create({
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
  },
  validateStatus(status) {
    return status >= 200 && status < 300;
  },
});

export { requestInstance };
