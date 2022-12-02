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
  register: any;
  name: string;
  title: string;
  errors: any;
  placeholder: string | undefined;
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
