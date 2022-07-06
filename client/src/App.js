import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import PieChart from "./PieChart";

function App() {
  const [value, setValue] = useState("");
  const [events, setEvents] = useState([]);
  const [taskName, setTaskName] = useState("");
  const [randSet, setRandSet] = useState([]);
  const [countries, setCountries] = useState([
    "ישראל",
    "אטיופיה",
    "צרפת",
    "סנגל",
    "קרואטיה",
    "אנגליה",
    "ארה״ב",
  ]);

  const handleSubmit = async () => {
    const { data } = await axios.post("http://localhost:8080/form", {
      value,
      name: "A",
      age: 44,
    });
    console.log(data);
  };
  const handleSubmit2 = async () => {
    const { data } = await axios.post("http://localhost:8080/event/" + value);
    setTaskName(data);
    console.log(data);
  };

  const handlePieData = async () => {
    const { data } = await axios.get("http://localhost:8080/pie");
    setRandSet(data);
    console.log(data);
  };

  useEffect(() => {
    const getEvents = async () => {
      if (sessionStorage.getItem("events")) {
        console.log("if");
        setEvents(JSON.parse(sessionStorage.getItem("events")));
        console.log(events);
      } else {
        console.log("else");
        const { data } = await axios.get("http://localhost:8080/events");
        console.log(data);
        sessionStorage.setItem("events", JSON.stringify(data));
      }
    };
    getEvents();
  }, []);

  return (
    <div className="App">
      <h1>React-App</h1>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={handleSubmit}>submit</button>
      <button onClick={handleSubmit2}>search event</button>
      <p>{taskName}</p>
      <MarkEmailReadIcon />
      <ArrowCircleLeftIcon />
      <button onClick={handlePieData}>generate data</button>
      {randSet.length > 0 ? (
        <PieChart randSet={randSet} countries={countries} />
      ) : null}
    </div>
  );
}

export default App;
