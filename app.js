const express = require("express");
const path = require('path');

const app = express();

app.get("/",(req, res)=>{
    res.sendFile(path.resolve(__dirname, "./nav-app/index.html"))
});

app.use(express.static("./express"));

app.listen(5000,()=>{
    console.log('Server is listening on port: 5000 ....');
})