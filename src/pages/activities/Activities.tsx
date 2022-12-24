import { useEffect, useState } from "react";
import { getActivities } from "../../api/api";
import { Activity } from "../../api/types";
import ActivityComponent from "../../components/Activity";
import "../../styles/Activity.css";

interface ActivitesProps {
  accessToken: string;
}

export const Activites = (props: ActivitesProps) => {
  const [activities, setActivities] = useState<Activity[] | null>(null);

  useEffect(() => {
    getActivities(props.accessToken).then((data) => {
      console.log("UTFØRER KALLET", data);

      setActivities(data);
    });
  }, []);

  return (
    <div className="activity-container">
      {activities &&
        activities.map((activity) => {
          return <ActivityComponent key={activity.id} activity={activity} />;
        })}
    </div>
  );
};
