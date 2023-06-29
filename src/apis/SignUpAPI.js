const SignUpAPI = async ({ userName, password }) => {
  const url = new URL("http://localhost:3500/auth");

  const response = await fetch(url, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      userName: userName,
      password: password,
    }),
  });

  const result = await response.json();
  console.log(result);

  return result;
};

export default SignUpAPI;
