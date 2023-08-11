// const express = require("express");
import express from "express";
import configViewEngine from "./configs/viewEngine";
import initWebRoute from "./router/web";
// import connection from "../configs/connectDB";


require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

// Setup viewEngine
configViewEngine(app);

// init web route 
initWebRoute(app);

app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`);
});

