const SetPreferencesAPI = async ({ state, season, difficulty }) => {
  const accessToken = localStorage.getItem("accessToken");

  const url = new URL(process.env.REACT_APP_BACKEND_URL + "preferences");
  const options = {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      state: state,
      season: season,
      difficulty: difficulty,
    }),
  };

  const response = await fetch(url, options);

  const statusCode = await response.status;

  return statusCode;
};

export default SetPreferencesAPI;
