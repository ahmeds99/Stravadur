import { useState } from "react";
import { getAthlete } from "../api/api";
import { updateToken } from "../api/auth";
import { Athlete } from "../api/types";

export function Test() {
  const clientId = import.meta.env.VITE_CLIENT_ID;
  const authCode = import.meta.env.VITE_AUTHORIZATION_CODE;
  const apiAccessToken = import.meta.env.VITE_ACCESS_TOKEN;

  const [accessToken, setAccessToken] = useState("");
  const [athlete, setAthlete] = useState<Athlete>();

  const authorizeUrl = `http://www.strava.com/oauth/authorize?client_id=${clientId}&response_type=code&redirect_uri=http://localhost/exchange_token&approval_prompt=force&scope=read,profile:read_all`;
  // updateToken(setAccessToken);

  const athleteRes = getAthlete(apiAccessToken, setAthlete);
  console.log(athleteRes);

  return (
    <div>
      <h1>test</h1>
      <a href={authorizeUrl}>Trykk på meg</a>
      <h2>{authCode}</h2>
      {accessToken && <h2>{accessToken}</h2>}
      {athlete && <h2>{athlete.username}</h2>}
    </div>
  );
}
