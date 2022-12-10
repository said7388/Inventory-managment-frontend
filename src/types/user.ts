export interface RegistrationFormInputs {
  email: string;
  employeeID: number;
  mobileNumber: number;
  fullName: string;
  username: string;
  password: string;
  confirm: string;
  department: string;
  role: string;
}

export interface CreateUserBody {
  email: string;
  employeeID: number;
  mobileNumber: number;
  fullName: string;
  username: string;
  password: string;
  department: string;
  role: string;
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
  roles: any;
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

export interface UserData {
  id: number;
  fullName: string;

  username: string;

  employeeID: string;

  email: string;

  mobileNumber: string;

  department: {
    id: number;
    name: string;
  };
  role: {
    name: string;
  };
  createdAt: Date;
}

export interface DepartmentListUser {
  id: number;
  attributes: {
    fullName: string;

    username: string;

    employeeID: string;

    email: string;

    mobile_number: string;

    department: {
      data: {
        attributes: {
          name: string;
        };
      };
    };
    role: {
      data: {
        attributes: {
          name: string;
        };
      };
    };
    createdAt: Date;
  };
}
