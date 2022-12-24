import { Activity, Athlete } from "./types";

export async function getActivities(
  accessToken: string
): Promise<Activity[] | null> {
  const params = new URLSearchParams({ per_page: "200" });
  const response = await fetch(
    "https://www.strava.com/api/v3/athlete/activities?" + params,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  if (!response.ok) return null;
  return response.ok ? mapActivities(await response.json()) : null;
}

const mapActivities = (data: any): Activity[] => {
  return data.map((activity: any) => ({
    name: activity.name,
    distance: activity.distance,
    movingTime: activity.moving_time,
    elapsedTime: activity.elapsed_time,
    totalElevationGain: activity.total_elevation_gain,
    type: activity.type,
    sportType: activity.sport_type,
    workoutType: activity.workout_type,
    id: activity.id,
    startDate: activity.start_date,
    startDateLocal: activity.start_date_local,
    locationCity: activity.location_city,
    locationState: activity.location_state,
    locationCountry: activity.location_country,
    achievementCount: activity.achievement_count,
    kudosCount: activity.kudos_count,
    commentCount: activity.comment_count,
    athleteCount: activity.athlete_count,
    photoCount: activity.photo_count,
    map: activity.map,
    manual: activity.manual,
    private: activity.private,
    visibility: activity.visibility,
    flagged: activity.flagged,
    averageSpeed: activity.average_speed,
    maxSpeed: activity.max_speed,
    prCount: activity.pr_count,
    totalPhotoCount: activity.total_photo_count,
  }));
};

export async function getAthlete(accessToken: string): Promise<Athlete | null> {
  const response = await fetch("https://www.strava.com/api/v3/athlete", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  // If res.ok, return the mapped (JSON -> Athlete) athlete, else null
  return response.ok ? mapAthlete(await response.json()) : null;
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
