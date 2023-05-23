import axios from 'axios';
import {
  APP_BASE_URL,
  EDIT_USER,
  LOGIN_API,
  REGISTER_API,
} from '../../utilities/constant';
import { EditUserInput, LoginUserInput, RegisterUserInput } from './types';

const registerUser = async (userData: RegisterUserInput) => {
  const response = await axios.post(APP_BASE_URL + REGISTER_API, userData);
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response.data;
};

const loginUser = async (userData: LoginUserInput) => {
  const response = await axios.post(APP_BASE_URL + LOGIN_API, userData);
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response.data;
};

const logoutUser = () => {
  localStorage.removeItem('user');
};

//crud user
const editUser = async (
  userId: string,
  userData: EditUserInput,
  token: string
) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.put(
    APP_BASE_URL + EDIT_USER(userId),
    userData,
    config
  );

  return response.data;
};

const authService = {
  registerUser,
  logoutUser,
  loginUser,
  editUser,
};

export default authService;
