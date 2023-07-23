const GetUserDetailsAPI = async () => {
  const accessToken = localStorage.getItem("accessToken");

  const url = new URL(process.env.REACT_APP_BACKEND_URL + "profile");
  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };

  const response = await (await fetch(url, options)).json();

  return response;
};

export default GetUserDetailsAPI;
