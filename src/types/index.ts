import { InputHTMLAttributes } from "react";

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

export interface SidebarUiPops {
  handleLogout: () => void;
}

export interface CreateCategoryPops {
  register?: any;
  errors?: any;
  handleSubmit: Function;
  createCategory: Function;
}

export interface CreateDepartmentPops {
  register?: any;
  errors?: any;
  handleSubmit: Function;
  createDepartmentFunction: Function;
}

export interface UpdateCategoryPops {
  closeModal: Function;
  currentCategory: any;
}

export interface UpdateDepartmentPops {
  closeModal: Function;
  currentDepartment: any;
}

export interface UpdateCategoryUIPops {
  register?: any;
  errors?: any;
  handleSubmit: Function;
  updateCategoryFunction: Function;
}

export interface UpdateDepartmentUIPops {
  register?: any;
  errors?: any;
  handleSubmit: Function;
  updateDepartmentFunction: Function;
}

export interface CreateCategoryBody {
  name: string;
}

export interface CreateDepartmtnBody {
  name: string;
}

export interface UpdateCategoryBody {
  id: number;
  body: {
    name: string;
  };
}

export interface UpdateDepartmentBody {
  id: number;
  body: {
    name: string;
  };
}

export interface ModalPops {
  children?: React.ReactNode;
  isOpen?: boolean;
  title?: string;
  closeModal?: () => void;
}
