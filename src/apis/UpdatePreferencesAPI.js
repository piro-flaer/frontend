const UpdatePreferencesAPI = async ({
  userName,
  state,
  season,
  difficulty,
}) => {
  const url = new URL(process.env.REACT_APP_BACKEND_URL + "preferences");

  const response = await fetch(url, {
    method: "put",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      userName: userName,
      state: state,
      season: season,
      difficulty: difficulty,
    }),
  });

  const statusCode = response.status;

  return statusCode;
};

export default UpdatePreferencesAPI;
