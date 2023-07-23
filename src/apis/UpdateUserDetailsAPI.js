const UpdateUserDetailsAPI = async ({
  id,
  firstName,
  lastName,
  email,
  userName,
  password,
  profile,
}) => {
  const accessToken = localStorage.getItem("accessToken");

  const url = new URL(process.env.REACT_APP_BACKEND_URL + "profile");
  const options = {
    method: "put",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      id: id,
      firstName: firstName,
      lastName: lastName,
      email: email,
      userName: userName,
      password: password,
      profile: profile,
    }),
  };

  const response = await fetch(url, options);

  const message = await response.json();
  const statusCode = await response.status;

  return { message, statusCode };
};

export default UpdateUserDetailsAPI;
