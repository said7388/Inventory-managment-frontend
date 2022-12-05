import { InputHTMLAttributes } from "react";

export interface CounterState {
  value: number;
  status: "idle" | "loading" | "failed";
}

export interface RegistrationFormInputs {
  email: string;
  employeeID: number;
  mobileNumber: number;
  fullName: string;
  username: string;
  password: string;
  confirm: string;
}

export interface CreateUserBody {
  email: string;
  employeeID: number;
  mobileNumber: number;
  fullName: string;
  username: string;
  password: string;
}

export interface InputPops extends InputHTMLAttributes<HTMLInputElement> {
  register?: any;
  name: string;
  title?: string;
  errors?: any;
  placeholder?: string | undefined;
  type?: string | undefined;
}

export interface ButtonProps {
  [x: string]: any;
  title: any;
  size?: string | undefined;
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
}

export interface SidebarUiPops {
  handleLogout: () => void;
}

export interface CreateCategoryPops {
  register?: any;
  errors?: any;
  handleSubmit: Function;
  createCategory: Function;
}

export interface UpdateCategoryPops {
  register?: any;
  errors?: any;
  handleSubmit: Function;
  updateCategoryFunction: Function;
}

export interface CreateCategoryBody {
  data: {
    name: string;
  };
}

export interface UpdateCategoryBody {
  id: number;
  body: {
    data: {
      name: string;
    };
  };
}

export interface ModalPops {
  children?: React.ReactNode;
  isOpen?: boolean;
  title?: string;
  closeModal?: () => void;
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
