export interface User {
  username: string;
  first_name: string;
  token: string;
}

export interface UserState {
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  user?: User | null;
}

export interface LoginUserInput {
  email: string;
  password: string;
}

export interface RegisterUserInput {
  username: string;
  email: string;
  password: string;
  first_name: string;
  middle_name: string;
  last_name: string;
  birth_date: string;
  address: string;
  phone_number: string;
  telephone_number: string;
}

export interface logoutUser {
  user?: User | null;
}
