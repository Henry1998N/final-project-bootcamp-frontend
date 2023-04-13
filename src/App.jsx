import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import constants from "./constants/constants";
import axios from "axios";

import "./App.css";

function App() {
  const [houses, setHouses] = useState([]);
  const [count, setCount] = useState(0);
  useEffect(() => {
    // const server = axios.create({
    //   baseURL: import.meta.env.VITE_SERVER_URI
    //     ? import.meta.env.VITE_SERVER_URI
    //     : constants.DEFAULT_SERVER,
    // });
    // server
    //   .get(import.meta.env.VITE_SERVER_URI)
    //   .then((houses) => {
    //     console.log("hi");
    //   })
    //   .catch((err) => {
    //     console.log("buye");
    //   });
    axios
      .get(import.meta.env.VITE_SERVER_URI)
      .then((houses) => {
        setHouses(houses.data);
      })
      .catch((err) => console.log(err));
  }, [count]);

  return (
    <div className="App">
      <div>
        {houses.map((house) => (
          <div key={house._id}>
            {house.name} - {house._id}
          </div>
        ))}
      </div>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
