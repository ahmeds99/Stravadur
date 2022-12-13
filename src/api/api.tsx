import { Athlete } from "./types";

export async function getAthlete(
  accessToken: string,
  setAthlete: (state: Athlete) => void
) {
  console.log(accessToken);

  const response = await fetch("https://www.strava.com/api/v3/athlete", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      return data as Athlete;
    });

  //   console.log(response);

  //   setAthlete(response);

  //   return response
}
