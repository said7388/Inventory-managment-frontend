import { InputPops } from "../../../types";

const Input: React.FC<InputPops> = (props) => {
  const {
    register,
    name,
    title,
    errors,
    placeholder = "",
    type = "text",
    ...rest
  } = props;

  return (
    <div className='w-full mt-2 mb-1  relative flex flex-col items-start justify-center'>
      <label
        className='text-left py-1 text-sm font-medium uppercase'
        htmlFor={name}>
        {title}
      </label>
      <input
        className='border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 text-base focus:border-blue-500 block w-full px-2.5 py-1.5 '
        placeholder={placeholder}
        aria-invalid={errors[name] ? "true" : "false"}
        type={type}
        {...register(name)}
        {...rest}
      />
    </div>
  );
};

export default Input;
