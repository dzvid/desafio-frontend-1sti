import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.weatherbit.io/v2.0',
});

// Add a request interceptor to set appid query param to the API calls
// its a workaround while waiting for axios PR to be aproved
// that allows to set default params in axios.create()
api.interceptors.request.use(config => {
  config.params = config.params || {};
  config.params.key = 'c3f2386af8424b19a51d8f67ca2b92f7';
  config.params.lang = 'pt';
  config.params.units = 'M';

  return config;
});

export default api;
