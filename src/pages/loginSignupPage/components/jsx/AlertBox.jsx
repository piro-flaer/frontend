import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import CloseIcon from "@mui/icons-material/Close";

const AlertBox = ({ open, setOpen, message }) => {
  return (
    <>
      <Dialog
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        fullWidth={true}
      >
        <DialogTitle
          sx={{ backgroundColor: "lightblue", paddingBottom: "20px" }}
        >
          <CloseIcon
            onClick={() => {
              setOpen(false);
            }}
            sx={{
              cursor: "pointer",
              position: "absolute",
              right: "0",
              marginRight: "15px",
              borderRadius: "50%",
              "&:hover": {
                background: "lightgray",
              },
            }}
          />
        </DialogTitle>
        <DialogContent
          sx={{
            backgroundColor: "lightblue",
            padding: "50px",
            fontSize: "25px",
          }}
        >
          <p>{message}</p>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AlertBox;
