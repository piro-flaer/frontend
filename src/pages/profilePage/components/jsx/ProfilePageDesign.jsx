import React, { useState } from "react";
import Avatar from "react-avatar-edit";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import "../css/ProfilePageDesign.css";
import GetUserDetailsAPI from "../../../../apis/GetUserDetailsAPI";
import FormValidation from "../../../loginSignupPage/components/js/FormValidation";
import UpdateUserDetailsAPI from "../../../../apis/UpdateUserDetailsAPI";

const ProfilePageDesign = () => {
  const [disable, setDisable] = useState(true);
  const [dialogBox, setDialogBox] = useState(false);
  const [profileImg, setProfileImg] = useState(null);
  const [storeImg, setStoreImg] = useState(null);
  const [UserID, setUserID] = useState(null);

  const avatarOnCrop = (view) => {
    setProfileImg(view);
  };

  const avatarOnClose = () => {
    setProfileImg(null);
  };

  const dialogButtonClicked = () => {
    setStoreImg(profileImg);
    setDialogBox(false);
    setDisable(false);
  };

  const userName = localStorage.getItem("userName");

  const GenerateProfile = async () => {
    const userProfile = await GetUserDetailsAPI({ userName });
    setStoreImg(userProfile.profile);
    setUserID(userProfile._id);
    document.querySelectorAll("input")[0].placeholder = userProfile.firstName;
    document.querySelectorAll("input")[1].placeholder = userProfile.lastName;
    document.querySelectorAll("input")[2].placeholder = userProfile.email;
    document.querySelectorAll("input")[3].placeholder = userProfile.userName;
  };

  GenerateProfile();

  const profileUpdateButton = () => {
    console.log("hey");
    var firstName = document.querySelectorAll("input")[0].value;
    if (firstName) {
      const formValResult = FormValidation({
        param: "name",
        paramValue: firstName,
      });
      if (formValResult.result) {
        alert(formValResult.message);
        return;
      }
    } else {
      firstName = document.querySelectorAll("input")[0].placeholder;
    }

    var lastName = document.querySelectorAll("input")[1].value;
    if (lastName) {
      const formValResult = FormValidation({
        param: "name",
        paramValue: lastName,
      });
      if (formValResult.result) {
        alert(formValResult.message);
        return;
      }
    } else {
      lastName = document.querySelectorAll("input")[1].placeholder;
    }

    var email = document.querySelectorAll("input")[2].value;
    if (email) {
      const formValResult = FormValidation({
        param: "email",
        paramValue: email,
      });
      if (formValResult.result) {
        alert(formValResult.message);
        return;
      }
    } else {
      email = document.querySelectorAll("input")[2].placeholder;
    }

    var userName = document.querySelectorAll("input")[3].value;
    if (userName) {
      const formValResult = FormValidation({
        param: "userName",
        paramValue: userName,
      });
      if (formValResult.result) {
        alert(formValResult.message);
        return;
      }
    } else {
      userName = document.querySelectorAll("input")[3].placeholder;
    }

    const password = document.querySelectorAll("input")[4].value;
    if (password) {
      const formValResult = FormValidation({
        param: "password",
        paramValue: password,
      });
      if (formValResult.result) {
        alert(formValResult.message);
        return;
      }
    }

    const apiResponse = UpdateUserDetailsAPI({
      id: UserID,
      firstName,
      lastName,
      email,
      userName,
      password,
      profile: storeImg,
    });
    if (apiResponse.statusCode === 409) {
      alert(apiResponse.message);
    } else if (apiResponse.statusCode === 400) {
      alert("Something Went Wrong! Please Try Again");
    } else {
      alert("Details Updated Successfully!");
      setDisable(true);
    }
    console.log(apiResponse);
  };

  return (
    <>
      <div className="sectionProfileHolder">
        <div className="formHolderBG signupPage profilePage">
          <div
            className="profilePhoto"
            onClick={() => {
              setDialogBox(true);
            }}
            style={{ cursor: "grab" }}
          >
            <div>
              <img id="signupProfile" src={storeImg} />
              <p>
                Change
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
                <h2>
                  <span id="span01">First Name:</span>
                  <span id="span02">
                    <DriveFileRenameOutlineIcon
                      onClick={() => {
                        document
                          .querySelectorAll(".inputHolder input")[0]
                          .focus();
                      }}
                    />
                  </span>
                </h2>
                <div className="inputHolder">
                  <input
                    onChange={() => {
                      setDisable(false);
                    }}
                    type="text"
                    required
                  />
                  <div className="palceholderBG"></div>
                </div>
              </div>
              <div>
                <h2>
                  <span id="span01">Last Name:</span>
                  <span id="span02">
                    <DriveFileRenameOutlineIcon
                      onClick={() => {
                        document
                          .querySelectorAll(".inputHolder input")[1]
                          .focus();
                      }}
                    />
                  </span>
                </h2>
                <div className="inputHolder">
                  <input
                    onChange={() => {
                      setDisable(false);
                    }}
                    type="text"
                    required
                  />
                  <div className="palceholderBG"></div>
                </div>
              </div>
            </div>
            <div className="formLevels">
              <div>
                <h2>
                  <span id="span01">E-Mail:</span>
                  <span id="span02">
                    <DriveFileRenameOutlineIcon
                      onClick={() => {
                        document
                          .querySelectorAll(".inputHolder input")[2]
                          .focus();
                      }}
                    />
                  </span>
                </h2>
                <div className="inputHolder">
                  <input
                    onChange={() => {
                      setDisable(false);
                    }}
                    type="email"
                    required
                  />
                  <div className="palceholderBG"></div>
                </div>
              </div>
              <div>
                <h2>
                  <span id="span01">Username:</span>
                  <span id="span02">
                    <DriveFileRenameOutlineIcon
                      onClick={() => {
                        document
                          .querySelectorAll(".inputHolder input")[3]
                          .focus();
                      }}
                    />
                  </span>
                </h2>
                <div className="inputHolder">
                  <input
                    onChange={() => {
                      setDisable(false);
                    }}
                    type="text"
                    required
                  />
                  <div className="palceholderBG"></div>
                </div>
              </div>
            </div>
            <div className="formLevels">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <h2>
                  <span id="span01">New Password:</span>
                  <span id="span02">
                    <DriveFileRenameOutlineIcon
                      onClick={() => {
                        document
                          .querySelectorAll(".inputHolder input")[4]
                          .focus();
                      }}
                    />
                  </span>
                </h2>
                <div className="inputHolder">
                  <input
                    onChange={() => {
                      setDisable(false);
                    }}
                    type="password"
                    required
                  />
                  <div className="palceholderBG"></div>
                </div>
              </div>
            </div>
            <Button
              style={{
                cursor: "pointer",
                color: "black",
              }}
              className="logInPageButton profilePageButton"
              type="submit"
              onClick={profileUpdateButton}
              variant="contained"
              disabled={disable}
            >
              Update
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePageDesign;
