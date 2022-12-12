import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <h1>HALLO</h1>
      <h2>{import.meta.env.VITE_CLIENT_ID}</h2>
    </div>
  );
}

export default App;
