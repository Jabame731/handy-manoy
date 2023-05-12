import axios, { AxiosError, AxiosResponse } from 'axios';
import { toast } from 'react-toastify';
import { APP_BASE_URL } from '../utilities/constant';

axios.defaults.baseURL = APP_BASE_URL;

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

axios.interceptors.request.use((config) => {
  const user = localStorage.getItem('user');
  const token = !!user ? JSON.parse(user).token : ' ';

  if (token) config.headers!.Authorization = `Bearer ${token}`;

  return config;
});

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError) => {
    const { data, status } = error.response as AxiosResponse;

    switch (status) {
      case 400:
        if (data.error) {
          const modalStateErrors = [];

          for (const key in data.errors) {
            if (data.errors[key]) {
              modalStateErrors.push(data.errors[key]);
            }
          }

          throw modalStateErrors.flat();
        }
        break;

      case 401:
        toast.error('Unauthorized');
        break;

      case 403:
        toast.error('Forbidden');
        break;
      case 404:
        toast.error('Not Found');
        break;
      case 500:
        toast.error('Server Error');
        break;
    }
    return Promise.reject(error);
  }
);

export const request = {
  get: <T>(url: string) => axios.get<T>(url).then(responseBody),
  post: <T>(url: string, body: {}) =>
    axios.post<T>(url, body).then(responseBody),
  put: <T>(url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
  delete: <T>(url: string) => axios.delete<T>(url).then(responseBody),
};
