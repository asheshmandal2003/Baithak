import express from "express";
import dotenv from "dotenv";

const app = express();
if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

app.get("/", (req, res) => {
  res.send("HII");
});

const PORT = process.env.PORT || 3000;

app.listen(process.env.PORT, console.log(`Listening on port ${PORT}`));
