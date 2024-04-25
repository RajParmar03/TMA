const express = require('express');
require('dotenv').config();


const app = express();


const PORT = process.env.PORT || 8080;


app.get("/" , (req , res) => {
    res.status(200).send("Welcome to Task-Management-App");
})

app.listen(PORT , () => {
    console.log(`server is listening on ${PORT}`);
})