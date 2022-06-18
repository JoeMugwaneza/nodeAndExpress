const express = require("express");
const path = require('path');
const app = express();

app.use(express.static('./express'));

// MOVE EVERYTHING IN ONE FOLDER FOR EXPRESS TO LOAD THEM ALTOGETHER
// app.get('/', (req, res)=>{
//     res.sendFile(path.resolve(__dirname, "./nav-app/index.html"));
// })

app.all('*',(req, res) =>{
    res.status(404).send("Resource not Found")
})

app.listen(5000, ()=>{
    console.log("Serer is listening on port: 5000 ....");
})