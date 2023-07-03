const GetUserDetailsAPI = async ({ userName }) => {
  const url = new URL(
    process.env.REACT_APP_BACKEND_URL + "profile?userName=" + userName
  );

  const response = await (await fetch(url)).json();

  return response;
};

export default GetUserDetailsAPI;
