require("dotenv").config({path: `${process.cwd()}/.env`})

const express = require("express");
const port = process.env.APP_PORT 

const app = express();

app.listen(port, () => {
    console.log("server is up and running", port)
})

app.get("/health", (request,response) => {
    response.status(200).json({
        status:"success",
        message:"The api is running"
    })
})