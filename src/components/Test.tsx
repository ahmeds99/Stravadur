export function Test() {
  const client_id = import.meta.env.VITE_CLIENT_ID;

  const authorizeUrl = `http://www.strava.com/oauth/authorize?client_id=${client_id}&response_type=code&redirect_uri=http://localhost/exchange_token&approval_prompt=force&scope=read`;

  return (
    <div>
      <h1>test</h1>
      <a href={authorizeUrl}>Trykk på meg</a>
    </div>
  );
}
