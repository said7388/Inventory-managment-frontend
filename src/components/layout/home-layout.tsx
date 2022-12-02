import * as React from "react";
import Header from "../container/header";
import Sidebar from "../container/sidebar";

const HomeLayout: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      <div className='flex'>
        <Sidebar />
        <div className=' p4-1  md:w-[75%] xl:w-[80%] flex justify-center mt-16'>
          <div className='w-full'>{children}</div>
        </div>
      </div>
    </>
  );
};

export default HomeLayout;
