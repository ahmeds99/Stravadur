export interface Athlete {
  id: number;
  username: string;
  firstname: string;
  lastname: string;
  city?: any;
  country?: any;
  createdAt: Date;
}

export interface Map {
  id: string;
  summaryPolyline: string;
  resourceState: number;
}

export interface Activity {
  name: string;
  distance: number;
  movingTime: number;
  elapsedTime: number;
  totalElevationGain: number;
  type: string;
  sportType: string;
  workoutType: number;
  id: any;
  startDate: Date;
  startDateLocal: Date;
  locationCity?: any;
  locationState?: any;
  locationCountry?: any;
  achievementCount: number;
  kudosCount: number;
  commentCount: number;
  athleteCount: number;
  photoCount: number;
  map: Map;
  manual: boolean;
  private: boolean;
  visibility: string;
  flagged: boolean;
  averageSpeed: number;
  maxSpeed: number;
  prCount: number;
  totalPhotoCount: number;
}
