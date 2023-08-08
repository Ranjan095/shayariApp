/** @format */

let express = require("express");
const { shayariRoute } = require("./Routes/shayariRoute");
require("dotenv").config();
let cors = require("cors");
const { jodesRoute } = require("./Routes/jokesRoute");
const { storyRoute } = require("./Routes/storyRoute");
let app = express();
app.use(cors());
app.use(express.json());

app.use("/shayari", shayariRoute);
app.use("/joke", jodesRoute);
app.use("/story", storyRoute);
app.listen(process.env.PORT, async () => {
  console.log(`port is running at ${process.env.PORT}`);
});
