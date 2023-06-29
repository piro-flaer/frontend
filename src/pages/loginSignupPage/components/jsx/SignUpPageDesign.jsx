import React, { useState } from "react";
import "../css/LogInPageDesign.css";
import "../css/SignUpPageDesign.css";
import "../css/SignUpPageDesignMedia.css";
import Avatar from "react-avatar-edit";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import SignUpAPI from "../../../../apis/SignUpAPI";
import AlertBox from "./AlertBox";

const SignUpPageDesign = () => {
  const [dialogBox, setDialogBox] = useState(false);
  const [profileImg, setProfileImg] = useState(null);
  const [storeImg, setStoreImg] = useState(null);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const avatarOnCrop = (view) => {
    setProfileImg(view);
  };

  const avatarOnClose = () => {
    setProfileImg(null);
  };

  const dialogButtonClicked = () => {
    setStoreImg(profileImg);
    setDialogBox(false);
  };

  const handleSignUpClick = () => {
    const profileImg = document.querySelectorAll("input")[0].value;
    if (!profileImg) {
      setOpen(true);
      setMessage("Profile Pic");
    } else {
      const firstName = document.querySelectorAll("input")[1].value;
      if (!firstName) {
        setOpen(true);
        setMessage("First Name");
      } else {
        const lastName = document.querySelectorAll("input")[2].value;
        if (!lastName) {
          setOpen(true);
          setMessage("Last Name");
        } else {
          const userName = document.querySelectorAll("input")[3].value;
          if (!userName) {
            setOpen(true);
            setMessage("User Name");
          } else {
            const email = document.querySelectorAll("input")[4].value;
            if (!userName) {
              setOpen(true);
              setMessage("User Name");
            } else {
              // const password = document.querySelectorAll("input")[5].value;
              // if (!password) {
              // setOpen(true);
              // setMessage("Password");
              // } else {
              // console.log(firstName, lastName, userName, email, password);
              console.log(firstName, lastName, userName, email);
              // }
            }
          }
        }
      }
    }
  };

  return (
    <>
      <div className="formHolderBG signupPage">
        <div
          className="profilePhoto"
          onClick={() => {
            setDialogBox(true);
          }}
          style={{ cursor: "grab" }}
        >
          <div>
            <img
              id="signupProfile"
              src={storeImg ? storeImg : "images/profile04.png"}
            />
            <p>
              {storeImg ? "Change" : "Upload"}
              <br />
              Profile
              <br />
              Photo
            </p>
          </div>
        </div>

        <Dialog
          open={dialogBox}
          onClose={() => {
            setDialogBox(false);
          }}
        >
          {profileImg && (
            <DialogTitle className="showInDialog">Crop:</DialogTitle>
          )}
          <Avatar
            width={window.innerWidth > 767 ? 500 : window.innerWidth / 1.5}
            height={500}
            onClose={avatarOnClose}
            onCrop={avatarOnCrop}
            style={{
              backgroundColor: "red",
            }}
          />
          {profileImg && (
            <Button
              className="showInDialog"
              variant="contained"
              onClick={dialogButtonClicked}
              style={{ width: "100px", margin: "25px auto", inset: "0" }}
            >
              Upload
            </Button>
          )}
        </Dialog>

        <div className="logInForm">
          <div className="formLevels">
            <div>
              <h2>First Name:</h2>
              <div className="inputHolder">
                <input type="text" required />
                <div className="palceholderBG"></div>
              </div>
            </div>
            <div>
              <h2>Last Name:</h2>
              <div className="inputHolder">
                <input type="text" required />
                <div className="palceholderBG"></div>
              </div>
            </div>
          </div>
          <div className="formLevels">
            <div>
              <h2>E-Mail:</h2>
              <div className="inputHolder">
                <input type="email" required />
                <div className="palceholderBG"></div>
              </div>
            </div>
            <div>
              <h2>Username:</h2>
              <div className="inputHolder">
                <input type="text" required />
                <div className="palceholderBG"></div>
              </div>
            </div>
          </div>
          <div className="formLevels">
            <div>
              <h2>Password:</h2>
              <div className="inputHolder">
                <input type="password" required />
                <div className="palceholderBG"></div>
              </div>
            </div>
          </div>
          <button
            className="logInPageButton"
            type="submit"
            onClick={handleSignUpClick}
          >
            Sign Up
          </button>
        </div>
        <div className="belowForm">
          <p>Already Have one?</p>
          <Link to={"/login"}>
            <button className="logInPageButton">Log In</button>
          </Link>
        </div>
      </div>
      <AlertBox open={open} setOpen={setOpen} message={message} />
    </>
  );
};

export default SignUpPageDesign;
