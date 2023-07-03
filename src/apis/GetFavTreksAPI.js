const GetFavTreksAPI = async ({ userName }) => {
  const url = new URL(
    process.env.REACT_APP_BACKEND_URL + "favorite?userName=" + userName
  );

  const response = await (await fetch(url)).json();

  return response;
};

export default GetFavTreksAPI;
