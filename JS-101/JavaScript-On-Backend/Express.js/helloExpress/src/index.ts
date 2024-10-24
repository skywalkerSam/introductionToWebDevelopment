import express from "express";

// const express = require("express");
const app = express();
const port: number = 8080;

app.get("/", (req: any, res: any) => {
  res.json("Welcome to the Express Server API...");
});

app.listen(port, () => {
  console.log(`\nServer helloExpress is listening on http://localhost:${port}`);
});
