import TrekListAPI from "./TrekListAPI";

const RecommendAPI = async ({ userName }) => {
  const accessToken = localStorage.getItem("accessToken");

  const url = new URL(process.env.REACT_APP_BACKEND_URL + "preferences");
  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };

  const response = await (await fetch(url, options)).json();

  const list01 = await TrekListAPI({
    stateParam: response.state,
  });

  const list02 = await TrekListAPI({
    seasonParam: response.season,
  });

  const list03 = await TrekListAPI({
    difficultyParam: response.difficulty,
  });

  list01.push(...list02, ...list03);

  return list01;
};

export default RecommendAPI;
