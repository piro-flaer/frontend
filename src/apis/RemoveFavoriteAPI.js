const RemoveFavoriteAPI = async ({ userName, trekName }) => {
  const url = new URL(process.env.REACT_APP_BACKEND_URL + "favorite/remove");

  const response = await fetch(url, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      userName: userName,
      favoriteItem: trekName,
    }),
  });

  const statusCode = await response.status;

  return statusCode;
};

export default RemoveFavoriteAPI;
