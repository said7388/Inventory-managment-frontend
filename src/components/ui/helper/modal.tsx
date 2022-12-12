import { Backdrop, Box, Modal } from "@mui/material";
import React from "react";
import { RxCross2 } from "react-icons/rx";
import { ModalPops } from "../../../types";

const ModalBox: React.FC<ModalPops> = ({
  children,
  isOpen = false,
  title,
  closeModal,
  width = 400,
}) => {
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: width,
    overflow: "auto",
    maxHeight: "70%",
    bgcolor: "background.paper",
    borderRadius: "5px",
    boxShadow: 24,
  };

  return (
    <Modal
      aria-labelledby='transition-modal-title'
      aria-describedby='transition-modal-description'
      open={isOpen}
      onClose={closeModal}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}>
      <Box>
        <Box sx={style}>
          <Box
            sx={{
              padding: 2,
              borderBottom: "1px solid #E8EAF6",
            }}>
            <h3 className='text-2xl bold'>{title}</h3>
          </Box>
          <button
            type='button'
            onClick={closeModal}
            className=' absolute top-5 right-2  bg-gray-100 text-red-500 rounded-full text-sm p-1.5 ml-auto inline-flex items-center'
            data-modal-toggle='defaultModal'>
            <RxCross2 className='w-5 h-5' />
          </button>
          <Box sx={{ padding: 2 }}>{children}</Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default ModalBox;
