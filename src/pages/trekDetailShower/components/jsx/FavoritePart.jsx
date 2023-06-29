import React, { useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "../css/FavoritePart.css";

const FavoritePart = () => {
  const [favoriteSelected, setFavoriteSelected] = useState(false);

  const [toolTipString, setToolTipString] = useState(
    favoriteSelected ? "Remove From Favorites" : "Add To Favorites"
  );

  const addFunc = () => {
    setFavoriteSelected(!favoriteSelected);
    setToolTipString("Remove From Favorites");
  };

  const removeFunc = () => {
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
