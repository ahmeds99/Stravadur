import "./styles/App.css";
import { useEffect, useState } from "react";
import { updateToken } from "./api/auth";
import { Athlete } from "./api/types";
import { getAthlete } from "./api/api";
import { Activites } from "./pages/activities/Activities";

function App() {
  const [accessToken, setAccessToken] = useState("");
  const [athlete, setAthlete] = useState<Athlete | null>(null);

  useEffect(() => {
    updateToken().then((token) => {
      if (token) setAccessToken(token);
    });
  }, []);

  useEffect(() => {
    if (accessToken)
      getAthlete(accessToken).then((athlete) => setAthlete(athlete));
  }, [accessToken]);

  return (
    <div className="App">
      {athlete && (
        <div>
          <h1>Innlogget bruker: {athlete.firstname}</h1>
          <h2>Aktiviteter:</h2>
        </div>
      )}
      {accessToken && <Activites accessToken={accessToken} />}
    </div>
  );
}

export default App;
