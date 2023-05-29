export interface registerProps {
  username: string;
  emailAddress: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  middleName: string;
  lastName: string;
  address: string;
  birthDate: string;
  phoneNumber: string;
  telephoneNumber: string;
  image: string;
}


export interface ServiceProps {
  service: {
   s_name: string,
   s_type: string,
   note: string,
   status: string,
   s_price: string
  }
 }