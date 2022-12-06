import { RxCross2 } from "react-icons/rx";
import { ModalPops } from "../../../types";

const Modal: React.FC<ModalPops> = ({
  children,
  isOpen = false,
  title,
  closeModal,
}) => {
  return (
    <>
      {isOpen ? (
        <div
          id='defaultModal'
          aria-hidden='true'
          className='fixed bg-gray-600 inset-0 z-50 flex justify-center items-center bg-opacity-[0.8] h-screen w-screen'>
          <div className=' w-full  h-[70%] max-w-2xl'>
            <div className=' h-full scrollbar-hide overflow-y-auto border bg-white rounded-lg shadow dark:bg-gray-700'>
              <div className='flex  items-start justify-between p-4 border-b rounded-t dark:border-gray-600'>
                <h3 className='text-2xl bold text-gray-900 dark:text-white'>
                  {title}
                </h3>
                <button
                  type='button'
                  onClick={closeModal}
                  className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white'
                  data-modal-toggle='defaultModal'>
                  <RxCross2 className='w-5 h-5' />
                </button>
              </div>
              <div className='px-6 space-y-5'>{children}</div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
