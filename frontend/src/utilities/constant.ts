//App
export const APP_BASE_URL = 'http://localhost:8800/api';
export const APP_NAME = 'Handy Manoy';

//API's
export const LOGIN_API = '/login';
export const REGISTER_API = '/register';

export const CREATE_SERVICE_API = '/createService';
export const UPDATE_SERVICE_API = (id: string) => `/service/${id}`;
