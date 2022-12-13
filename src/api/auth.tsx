export async function updateToken(
  setAccessToken: React.Dispatch<React.SetStateAction<string>>
): Promise<void | Response> {
  const clientId = import.meta.env.VITE_CLIENT_ID;
  const clientSecret = import.meta.env.VITE_CLIENT_SECRET;
  const refreshToken = import.meta.env.VITE_REFRESH_TOKEN;

  var formdata = new FormData();
  formdata.append("client_id", clientId);
  formdata.append("client_secret", clientSecret);
  formdata.append("refresh_token", refreshToken);
  formdata.append("grant_type", "refresh_token");

  const response = await fetch("https://www.strava.com/api/v3/oauth/token", {
    method: "POST",
    body: formdata,
  })
    .then((res) => res.json())
    .then((data) => {
      setAccessToken(data.access_token);
    });

  return response;
}
