import axios from 'axios';

const api = axios.create({
  baseURL: 'http://api.openweathermap.org/data/2.5',
});

// Add a request interceptor to set appid query param to the API calls
// its a workaround while waiting for axios PR to be aproved
// that allows to set default params in axios.create()
api.interceptors.request.use(config => {
  config.params = config.params || {};
  config.params.appid = '3f8b8ec5b63a67bd58ffe2d4029b1323';
  config.params.lang = 'pt_br';
  config.params.units = 'metric';

  return config;
});

export default api;
