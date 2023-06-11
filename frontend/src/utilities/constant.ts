//App
export const APP_BASE_URL = "http://localhost:8800/api";
export const APP_NAME = "Handy Manoy";

//API's
export const LOGIN_API = "/login";
export const REGISTER_API = "/register";

export const CREATE_SERVICE_API = "/createService";
export const UPDATE_SERVICE_API = (id: string) => `/service/${id}`;
export const GET_SERVICES_BY_USER = "/getService";

export const EDIT_USER = (id: string) => `/updateUser/${id}`;
export const DELETE_USER = (id: string) => `/delete/${id}`;
