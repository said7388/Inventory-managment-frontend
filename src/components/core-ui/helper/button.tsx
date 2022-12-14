import { ButtonProps } from "../../../types";

const Button = ({ title, size = "sm", ...rest }: ButtonProps) => {
  if (size === "lg") {
    return (
      <button
        className='w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'
        {...rest}>
        {title}
      </button>
    );
  }

  return (
    <button
      className='focus:outline-none text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-900'
      {...rest}>
      {title}
    </button>
  );
};

export default Button;
