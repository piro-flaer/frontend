const UpdatePreferencesAPI = async ({ state, season, difficulty }) => {
  const accessToken = localStorage.getItem("accessToken");

  const url = new URL(process.env.REACT_APP_BACKEND_URL + "preferences");
  const options = {
    method: "put",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      state: state,
      season: season,
      difficulty: difficulty,
    }),
  };

  const response = await fetch(url, options);

  const statusCode = response.status;

  return statusCode;
};

export default UpdatePreferencesAPI;
