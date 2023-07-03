import TrekListAPI from "./TrekListAPI";

const RecommendAPI = async ({ userName }) => {
  const url = new URL(
    process.env.REACT_APP_BACKEND_URL + "preferences?userName=" + userName
  );

  const response = await (await fetch(url)).json();

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
