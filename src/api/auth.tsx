export async function updateToken(): Promise<null | string> {
  const clientId = import.meta.env.VITE_CLIENT_ID;
  const clientSecret = import.meta.env.VITE_CLIENT_SECRET;
  const refreshToken = import.meta.env.VITE_REFRESH_TOKEN;

  let formdata = new FormData();
  formdata.append("client_id", clientId);
  formdata.append("client_secret", clientSecret);
  formdata.append("refresh_token", refreshToken);
  formdata.append("grant_type", "refresh_token");

  const response = await fetch("https://www.strava.com/api/v3/oauth/token", {
    method: "POST",
    body: formdata,
  });
  if (!response.ok) return null;

  const data = await response.json();
  return data.access_token;
}
