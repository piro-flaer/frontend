import TrekListAPI from "./TrekListAPI";
import { useState } from "react";

const TrekReturn = ({ stateParam, seasonParam, difficultyParam }) => {
  const [data, setData] = useState();

  TrekListAPI({
    stateParam: stateParam,
    seasonParam: seasonParam,
    difficultyParam: difficultyParam,
  }).then(async (result) => {
    setData(result);
  });

  return data?.sort(() => Math.random() - 0.5);
};

export default TrekReturn;
