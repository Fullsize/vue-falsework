import axios from 'axios';
const instance = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' }
});
// 请求处理
instance.interceptors.request.use(
  requestConfig => {
    return {
      ...requestConfig,
      params: {
        ...requestConfig.params,

      }
    };
  },
  error => Promise.reject(error)
);
// 返回处理
instance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    Promise.reject(error);
  }
);
export default instance;