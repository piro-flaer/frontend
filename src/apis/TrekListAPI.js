const TrekListAPI = async ({ stateParam, seasonParam, difficultyParam }) => {
  const url = new URL(process.env.REACT_APP_BACKEND_URL + "trekList");

  if (stateParam) {
    url.searchParams.append("state", stateParam);
  }
  if (seasonParam) {
    url.searchParams.append("season", seasonParam);
  }
  if (difficultyParam) {
    url.searchParams.append("difficulty", difficultyParam);
  }

  const response = await (await fetch(url)).json();

  return response;
};

export default TrekListAPI;
