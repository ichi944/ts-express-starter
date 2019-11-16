import express from "express";
import dotenv from "dotenv";
import fs from "fs";

if (fs.existsSync(".env")) {
  dotenv.config();
} else {
  console.log("NOTE: .env does not exists.");
}

const app = express();

app.get("/", (req, res) => res.send("Hello! World!!"));

app.listen(3000, () =>
  console.log(`The Server gets started at port ${process.env["PORT"]}`)
);

export default app;
