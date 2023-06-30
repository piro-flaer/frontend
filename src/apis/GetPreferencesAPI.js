const GetPreferencesAPI = async ({ userName }) => {
  const url = new URL(
    process.env.BACKEND_URL + "preferences?userName=" + userName
  );

  const response = await (await fetch(url)).json();

  return response;
};

export default GetPreferencesAPI;
