import { useEffect, useRef, useState } from "react";
import { getActivities } from "../../api/api";
import { Activity } from "../../api/types";

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
    <div>
      <h1>Hei</h1>
      {activities &&
        activities.map((activity) => {
          return <li key={activity.id}>{activity.name}</li>;
        })}
    </div>
  );
};
