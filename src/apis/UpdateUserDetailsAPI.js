const UpdateUserDetailsAPI = async ({
  id,
  firstName,
  lastName,
  email,
  userName,
  password,
  profile,
}) => {
  const url = new URL(process.env.REACT_APP_BACKEND_URL + "profile");

  const response = await fetch(url, {
    method: "put",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      id: id,
      firstName: firstName,
      lastName: lastName,
      email: email,
      userName: userName,
      password: password,
      profile: profile,
    }),
  });

  const message = await response.json();
  const statusCode = await response.status;

  return { message, statusCode };
};

export default UpdateUserDetailsAPI;