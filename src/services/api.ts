import 'axios-retry';

import axios from 'axios';

const API_URL = 'https://api.openweathermap.org/data';

export const axiosInstance = axios.create({
  baseURL: API_URL,
  'axios-retry': {
    retries: 3,
    retryDelay: retryCount => retryCount * 1000,
  },
});
