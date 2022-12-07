export interface RegistrationFormInputs {
  email: string;
  employeeID: number;
  mobileNumber: number;
  fullName: string;
  username: string;
  password: string;
  confirm: string;
  department: string;
}

export interface CreateUserBody {
  email: string;
  employeeID: number;
  mobileNumber: number;
  fullName: string;
  username: string;
  password: string;
  department: {
    id: string;
  };
}

export interface UserSignInBody {
  identifier: string;
  password: string;
}

export interface LoginUiPops {
  register: any;
  errors: any;
  handleSubmit: Function;
  handleOnSubmit: Function;
}

export interface RegistrationUiPops {
  register: any;
  errors: any;
  handleSubmit: any;
  handleOnSubmit: any;
  departments: any;
}

export interface ProfilePayload {
  email: string;
  id: number;
  username: string;
}

export interface AuthState {
  profile: {} | null;
  token: string;
}
