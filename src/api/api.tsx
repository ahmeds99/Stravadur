import { Athlete } from "./types";

export async function getActivities(accessToken: string) {
  const response = await fetch(
    "https://www.strava.com/api/v3/athlete/activities",
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  return await response.json();
}

export async function getAthlete(accessToken: string): Promise<Athlete | null> {
  const response = await fetch("https://www.strava.com/api/v3/athlete", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) return null;
  return mapAthlete(await response.json());
}

const mapAthlete = (data: any): Athlete => {
  return {
    id: data.id,
    username: data.username,
    firstname: data.firstname,
    lastname: data.lastname,
    city: data.city,
    country: data.country,
    createdAt: data.created_at,
  };
};
