const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars')
const { engine } = require('express-handlebars');

const logger = require('./middleware/logger');

const app = express();

// INIT MIDDLEWARE
app.use(logger);


// BODY PARSER MIDDLEWARE
app.engine('.handlebars', exphbs.engine({ extname: '.handlebars', defaultLayout: "main"}));
app.set('view engine', 'handlebars');

// HOMEPAGE ROUTE
app.get('/', function (req, res) {
    res.render('index');
});

app.use(express.static(path.join(__dirname, "public")))

app.use('/api/members', require('./routes/api/members'))

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log(`Fuckit, the server is running on port: ${PORT}`));