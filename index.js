const express = require("express");
const app = express();
const cors = require("cors");

const PORT = 8080;
const events = [
  {
    userId: 1,
    place: "Wormholes Allow Information to Escape Black Holes",
    name: "Check out this recent discovery about workholes",
    date: "2020-06-26T17:58:57.776Z",
    id: 1,
  },
  {
    userId: 1,
    place: "Wormholes Allow Information to Escape Black Holes 2",
    name: "Check out this recent discovery about workholes 2",
    date: "2020-06-26T17:58:57.776Z",
    id: 2,
  },
  {
    userId: 1,
    place: "Wormholes Allow Information to Escape Black Holes",
    name: "Check out this recent discovery about workholes",
    date: "2020-06-26T17:58:57.776Z",
    id: 3,
  },
];
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>Express app (server)</h1>");
});
app.get("/events", (req, res) => {
  res.send(events);
});
app.post("/form", (req, res) => {
  console.log(req.body);
  const { value } = req.body;
  res.send("success with value:" + value);
});
app.post("/event/:id", (req, res) => {
  const { id } = req.params;
  res.send(events.find((event) => event.id === parseInt(id)).name);
});
app.get("/pie", (req, res) => {
  randArr = [
    parseInt(Math.random() * 100),
    parseInt(Math.random() * 100),
    parseInt(Math.random() * 100),
    parseInt(Math.random() * 100),
    parseInt(Math.random() * 100),
    parseInt(Math.random() * 100),
  ];

  res.send(randArr);
});

app.listen(PORT, console.log("server is running on port #:", PORT));
