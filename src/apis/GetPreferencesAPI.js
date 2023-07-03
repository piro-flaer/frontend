const GetPreferencesAPI = async ({ userName }) => {
  const url = new URL(
    process.env.REACT_APP_BACKEND_URL + "preferences?userName=" + userName
  );
  const response = await (await fetch(url)).json();
  console.log("hey", response);

  return response;
};

export default GetPreferencesAPI;
