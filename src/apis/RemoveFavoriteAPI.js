const RemoveFavoriteAPI = async ({ trekName }) => {
  const accessToken = localStorage.getItem("accessToken");

  const url = new URL(process.env.REACT_APP_BACKEND_URL + "favorite/remove");
  const options = {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      favoriteItem: trekName,
    }),
  };

  const response = await fetch(url, options);

  const statusCode = await response.status;

  return statusCode;
};

export default RemoveFavoriteAPI;
