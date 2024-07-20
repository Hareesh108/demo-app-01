import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { LoadingButton } from "@mui/lab";

type ConfirmDialogProps = {
  isLoading?: boolean;
  open: boolean;
  handleClose: () => void;
  handleSubmit: () => void;
  dialogTitle: string;
  dialogDescription: string;
  disabled?: boolean;
};

const Transition = React.forwardRef(
  (
    props: TransitionProps & {
      children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>
  ) => <Slide direction="up" ref={ref} {...props} />
);

function ConfirmDialog({
  open,
  handleClose,
  handleSubmit,
  isLoading,
  dialogTitle,
  dialogDescription,
  disabled,
}: ConfirmDialogProps) {
  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle fontWeight="bold" fontSize={20}>
          {dialogTitle}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {dialogDescription}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <LoadingButton
            loading={isLoading}
            variant="contained"
            onClick={handleSubmit}
          >
            Continue
          </LoadingButton>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ConfirmDialog;
