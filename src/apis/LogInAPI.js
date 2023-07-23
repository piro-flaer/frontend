const LogInAPI = async ({ userName, password }) => {
  const url = new URL(process.env.REACT_APP_BACKEND_URL + "auth");

  const response = await fetch(url, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      userName: userName,
      password: password,
    }),
    credentials: "include",
  });

  const result = await response.json();
  const statusCode = await response.status;

  return { ...result, statusCode };
};

export default LogInAPI;
