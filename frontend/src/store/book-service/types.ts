export interface Service {
  id: string;
  s_name: string;
  s_price: string;
  s_type: string;
  note: string;
  status: string
}

export interface ServiceUserInput {
  s_name?: string;
  s_type?: string;
  s_price?: number;
  note?: string;
}

export interface ServiceState {
  services: Service[];
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
