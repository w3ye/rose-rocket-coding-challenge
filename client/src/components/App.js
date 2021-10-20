import { useState, useEffect } from "react";
import axios from "axios";
import "./App.scss";
import DriverColumnList from "./DriverColumnList";

function App() {
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    axios
      .get("/api/drivers")
      .then((result) => {
        setDrivers(result.data);
      })
      .catch((err) => {
        return err;
      });
  }, []);

  return (
    <div className="App">
      <DriverColumnList drivers={drivers} />
    </div>
  );
}

export default App;
