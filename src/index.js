// const express = require("express");
import express from "express";
import morgan from "morgan";


import configViewEngine from "./configs/viewEngine";
import initWebRoute from "./router/web";
import initAPIRoute from "./router/api";
// import connection from "../configs/connectDB";


require("dotenv").config();

const app = express();
const port = process.env.PORT || 8080;


app.use((req, res, next) => {
  console.log(">>> run into my middleware");
  console.log(req.method);
  next();
})

app.use(morgan("combined"));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Setup viewEngine
configViewEngine(app);

// init web route 
initWebRoute(app);

// init api route
initAPIRoute(app);

// handle 404 not found
app.use((req, res) => {
  return res.render("404.ejs");
});



app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`);
});

