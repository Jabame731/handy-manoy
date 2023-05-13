export interface Service {
  id: string;
  s_name: string;
  s_price: string;
  note: string;
}

export interface ServiceUserInput {
  s_name?: string;
  s_type?: string;
  s_price?: number;
  note: string;
}

export interface ServiceState {
  service: Service[];
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
}

export interface AuthState {
  auth: {
    user: {
      token: string;
    };
  };
}
