import React, { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Link } from "react-router-dom";
import GetUserDetailsAPI from "../../../../apis/GetUserDetailsAPI";

const ProfileIcon = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [ProfileImg, setProfileImg] = useState(null);
  const userName = localStorage.getItem("userName");

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    !document.querySelector(".headerClass").classList.contains("day") &&
      (() => {
        document
          .querySelector(".MuiPaper-root.MuiMenu-paper")
          ?.classList.add("day");
        document
          .querySelector(
            ".MuiDivider-root.MuiDivider-fullWidth.css-9mgopn-MuiDivider-root"
          )
          ?.classList.add("day");
        Array.from(
          document.querySelectorAll(
            ".MuiSvgIcon-root.MuiSvgIcon-fontSizeSmall.css-ptiqhd-MuiSvgIcon-root"
          )
        ).map((element) => element.classList.add("day"));
      })();
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const GenerateProfileImg = async () => {
    const imgSrc = await GetUserDetailsAPI({ userName });
    setProfileImg(imgSrc.profile);
  };

  GenerateProfileImg();

  return (
    <>
      <Tooltip title="Account Settings">
        <Avatar
          style={{ cursor: "pointer" }}
          onClick={handleClick}
          sx={{ width: 32, height: 32 }}
          src={ProfileImg}
        />
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        style={{ marginTop: "10px" }}
      >
        <MenuItem onClick={handleClose}>
          <Link
            to="/my-profile"
            style={{
              textDecoration: "none",
              backgroundColor: "transparent",
              color: "inherit",
            }}
          >
            <ListItemIcon>
              <Avatar
                sx={{
                  width: 25,
                  height: 25,
                }}
                src={ProfileImg}
              />
            </ListItemIcon>
            Profile
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link
            to="/my-favorites"
            style={{
              textDecoration: "none",
              backgroundColor: "transparent",
              color: "inherit",
            }}
          >
            <ListItemIcon>
              <FavoriteBorderIcon fontSize="small" />
            </ListItemIcon>
            My Favorites
          </Link>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <Link
            to="/my-preferences"
            style={{
              textDecoration: "none",
              backgroundColor: "transparent",
              color: "inherit",
            }}
          >
            <ListItemIcon>
              <Settings fontSize="small" />
            </ListItemIcon>
            My Preferences
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
};

export default ProfileIcon;
