import express from "express";
// create application
const app = express();
// set port
const port = 3000;

// set the ./public directory as the static directory
app.use(express.static("public"));

// starts the server listening on the specified port
app.listen(port, ()=>{
    console.log(`Homework 2 listening on port ${port}`);
});

