import axios from 'axios';
import { ServiceUserInput } from './types';
import {
  APP_BASE_URL,
  GET_SERVICES_BY_USER,
  UPDATE_SERVICE_API,
} from '../../utilities/constant';
import { CREATE_SERVICE_API } from '../../utilities/constant';

//book a service
const createService = async (serviceData: ServiceUserInput, token: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(
    APP_BASE_URL + CREATE_SERVICE_API,
    serviceData,
    config
  );

  return response.data;
};

//update service
const updateService = async (
  serviceId: string,
  token: string,
  serviceData: ServiceUserInput
) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.put(
    APP_BASE_URL + UPDATE_SERVICE_API(serviceId),
    serviceData,
    config
  );

  return response.data;
};

const getServicesByUser = async (token: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(APP_BASE_URL + GET_SERVICES_BY_USER, config);

  return response.data;
};

const bookService = {
  createService,
  updateService,
  getServicesByUser,
};

export default bookService;
