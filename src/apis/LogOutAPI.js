const LogOutAPI = async () => {
  const url = new URL(process.env.REACT_APP_BACKEND_URL + "auth/logout");

  await fetch(url, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
  });
};

export default LogOutAPI;
