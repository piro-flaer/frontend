import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const DialogBox = ({ open, setOpen }) => {
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
          <p>Please Log-In or Sign-Up First!</p>
        </DialogContent>
        <DialogActions sx={{ backgroundColor: "lightblue", padding: "25px" }}>
          <Link to={"/signup"}>
            <Button variant="outlined">Sign Up</Button>
          </Link>
          <Link to={"/login"}>
            <Button variant="contained">Log In</Button>
          </Link>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DialogBox;
