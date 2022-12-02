import { LoginUiPops } from "../../types";
import Button from "./helper/button";
import Input from "./helper/input";
import Logo from "./helper/logo";

const LoginUI = ({
  register,
  errors,
  handleSubmit,
  handleOnSubmit,
}: LoginUiPops) => {
  return (
    <section className='bg-white dark:bg-gray-900'>
      <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
        <div className='flex justify-center items-center mb-5'>
          <Logo />
        </div>
        <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
          <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
            <h1 className='text-xl uppercase font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
              Login here
            </h1>
            <form onSubmit={handleSubmit(handleOnSubmit)}>
              <Input
                title='Email'
                name='email'
                type='email'
                register={register}
                errors={errors}
                placeholder='example@email.com'
              />

              <p role='alert' className='text-red-500'>
                {errors["email"]?.message}
              </p>

              <Input
                title='Password'
                type='password'
                name='password'
                register={register}
                errors={errors}
                placeholder='••••••••'
              />

              <p role='alert' className='text-red-500'>
                {errors["password"]?.message}
              </p>

              <div className='my-8'>
                <Button size='lg' title='Login' />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginUI;
