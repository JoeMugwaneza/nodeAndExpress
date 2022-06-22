const express = require('express');
const app = express();
const path = require('path');
const logger = require('./middleware/logger')


// INIT MIDDLEWARE
app.use(logger);

app.use(express.static(path.join(__dirname, "public")))

app.use('/api/members', require('./routes/api/members'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log(`Fuckit, the server is running on port: ${PORT}`));