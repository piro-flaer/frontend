import React, { useState, useEffect } from "react";

const TrekListAPI = async ({ stateParam, seasonParam, difficultyParam }) => {
  const [data, setData] = useState();

  const url = new URL("http://localhost:3500/trekList");

  if (stateParam) {
    url.searchParams.append("state", stateParam);
  }
  if (seasonParam) {
    url.searchParams.append("season", seasonParam);
  }
  if (difficultyParam) {
    url.searchParams.append("difficulty", difficultyParam);
  }

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        setData(result);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return data;
};

export default TrekListAPI;
