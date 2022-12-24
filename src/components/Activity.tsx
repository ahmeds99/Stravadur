import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Activity as ActivityType } from "../api/types";
import {
  faL,
  faBicycle as bike,
  faPersonRunning as running,
  faThumbsUp as thumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/Activity.css";

interface ActivityProps {
  activity: ActivityType;
}

const meterToKm = (meters: number): number => {
  return Math.round((meters / 1000 + Number.EPSILON) * 100) / 100;
};

const Activity = (props: ActivityProps) => {
  const activity = props.activity;
  const typeIcon = activity.type === "Ride" ? bike : running;
  return (
    <div className="activity">
      <div>
        <p style={{ fontWeight: "bold", marginRight: "20px" }}>
          {activity.name} <FontAwesomeIcon icon={typeIcon} />
        </p>
      </div>
      <p>Distance - {meterToKm(activity.distance)} km</p>
      <p>Time - {activity.elapsedTime}</p>
      <p>
        {activity.kudosCount} <FontAwesomeIcon icon={thumbsUp} />
      </p>
    </div>
  );
};

export default Activity;
