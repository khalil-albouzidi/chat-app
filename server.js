const express = require("express");

const app = express();

const PORT = 3000;

//serve the frontend
app.use(express.static("public"));

//Start the server
app.listen(PORT, ()=>{
    console.log(`Server runing at http://localhost:${PORT}`);
})