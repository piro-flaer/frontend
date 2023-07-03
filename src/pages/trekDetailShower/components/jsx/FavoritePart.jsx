import React, { useState, useEffect } from "react";
import Tooltip from "@mui/material/Tooltip";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "../css/FavoritePart.css";
import AddFavoriteAPI from "../../../../apis/AddFavoriteAPI";
import RemoveFavoriteAPI from "../../../../apis/RemoveFavoriteAPI";

const FavoritePart = ({ trekName, isFavorite }) => {
  const [favoriteSelected, setFavoriteSelected] = useState(isFavorite);
  useEffect(() => {
    setFavoriteSelected(isFavorite);
  }, [isFavorite]);
  const userName = localStorage.getItem("userName");

  const [toolTipString, setToolTipString] = useState(
    favoriteSelected ? "Remove From Favorites" : "Add To Favorites"
  );

  const addFunc = async () => {
    const apiResponse = await AddFavoriteAPI({ userName, trekName });
    if (apiResponse === 400) {
      alert("Something Went Wrong! Please Try Again");
      return;
    }
    setFavoriteSelected(!favoriteSelected);
    setToolTipString("Remove From Favorites");
  };

  const removeFunc = async () => {
    const apiResponse = await RemoveFavoriteAPI({ userName, trekName });
    if (apiResponse === 400) {
      alert("Something Went Wrong! Please Try Again");
      return;
    }
    setFavoriteSelected(!favoriteSelected);
    setToolTipString("Add To Favorites");
  };

  const props = {
    position: "absolute",
    top: "0",
    right: "0",
    mt: 10,
    mr: 10,
    cursor: "pointer",
  };

  return (
    <Tooltip title={toolTipString}>
      {favoriteSelected ? (
        <FavoriteIcon
          fontSize="large"
          sx={{ ...props, color: "red" }}
          className="showFavIcon"
          onClick={removeFunc}
        />
      ) : (
        <FavoriteBorderIcon
          fontSize="large"
          sx={props}
          className="showFavIcon"
          onClick={addFunc}
        />
      )}
    </Tooltip>
  );
};

export default FavoritePart;
