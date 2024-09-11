import express from "express";
import bodyParser from "body-parser";

// create application
const app = express();
// set port
const port = 3000;

// set the ./public directory as the static directory
app.use(express.static("public"));

// to support JSON-encoded bodies
app.use(bodyParser.json());

// API Hello World for testing
app.get("/api", (req, res) => {
    res.send("Hello World from the API!");
});  

// starts the server listening on the specified port
app.listen(port, ()=>{
    console.log(`Homework 2 listening on port ${port}`);
});

