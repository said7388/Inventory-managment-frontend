import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  useMediaQuery,
  useTheme,
} from "@mui/material";

interface DialogPops {
  open: any;
  handleClose: any;
  handleSuccess: any;
  message: string;
  buttonTitle: string;
}

const DailogBox: React.FC<DialogPops> = ({
  open,
  handleClose,
  handleSuccess,
  message,
  buttonTitle,
}) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Dialog fullScreen={fullScreen} open={open} onClose={handleClose}>
      <DialogContent>
        <DialogContentText>{message}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleClose} color='primary'>
          Cancel
        </Button>
        <Button onClick={handleSuccess} color='error' autoFocus>
          {buttonTitle}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DailogBox;
