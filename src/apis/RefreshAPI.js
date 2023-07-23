const RefreshAPI = async () => {
  const url = new URL(process.env.REACT_APP_BACKEND_URL + "auth/refresh");

  const response = await fetch(url, {
    method: "GET",
    credentials: "include",
  });

  const accessToken = await response.json();

  if (accessToken.accessToken) {
    localStorage.setItem("accessToken", accessToken.accessToken);
  }

  return response.status;
};

export default RefreshAPI;
