const express = require('express');
const app = express();
const path = require('path');
const exphbs = require('express-handlebars');
const logger = require('./middleware/logger');


// INIT MIDDLEWARE
app.use(logger);

// HANDLEBARS MIDDLEWARE
var hbs = exphbs.create({ /* config */ });
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// BODY PARSER MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// HOMEPAGE ROUTE
app.get('/', (req, res) => res.render('./index'));

app.use(express.static(path.join(__dirname, "public")))

app.use('/api/members', require('./routes/api/members'))

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log(`Fuckit, the server is running on port: ${PORT}`));