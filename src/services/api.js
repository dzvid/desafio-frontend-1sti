import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.weatherbit.io/v2.0',
});

// Add a request interceptor to set appid query param to the API calls
// its a workaround while waiting for axios PR to be aproved
// that allows to set default params in axios.create()
api.interceptors.request.use(config => {
  config.params = config.params || {};
  config.params.key = '5f862d251b8e44d7a73aad53eac7d48a';
  config.params.lang = 'pt';
  config.params.units = 'M';

  return config;
});

export default api;
