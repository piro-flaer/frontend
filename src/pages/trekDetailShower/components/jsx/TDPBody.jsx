import React, { useEffect, useState } from "react";
import FavoritePart from "./FavoritePart";
import "../css/TDPBody.css";
import TerrainIcon from "@mui/icons-material/Terrain";
import MapIcon from "@mui/icons-material/Map";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import GetFavTreksAPI from "../../../../apis/GetFavTreksAPI";

const TDPBody = ({
  trekName,
  trekState,
  trekSeason,
  trekDifficulty,
  trekDescription,
}) => {
  const userName = localStorage.getItem("userName");
  const [favoriteSelected, setFavoriteSelected] = useState(false);

  const generateResponse = async () => {
    const apiResponse = await GetFavTreksAPI({ userName });
    apiResponse.forEach((trek) => {
      trek.name === trekName && setFavoriteSelected(true);
    });
  };

  useEffect(() => {
    generateResponse();
  }, []);

  return (
    <>
      <div className="formHolderBG tdpBody">
        <div className="tdpTrekName">
          {trekName}
          <FavoritePart trekName={trekName} isFavorite={favoriteSelected} />
        </div>
        <div className="tdpDetailsHolder">
          <div className="tdpDetail">
            <MapIcon /> State:&nbsp;&nbsp;
            <span style={{ color: "white" }}>{trekState}</span>
          </div>
          <div className="tdpDetail">
            <WbSunnyIcon /> Season:&nbsp;&nbsp;
            <span style={{ color: "white" }}>{trekSeason}</span>
          </div>
          <div className="tdpDetail">
            <TerrainIcon /> Difficulty:&nbsp;&nbsp;
            <span style={{ color: "white" }}>{trekDifficulty}</span>
          </div>
        </div>
        <div className="tdpDescription">{trekDescription}</div>
      </div>
    </>
  );
};

export default TDPBody;
