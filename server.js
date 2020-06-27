const express = require('express');
const session = require('express-session');
const methodOverride = require('method-override');
const app = express();
const port = process.env.PORT || 3000;
const db = require('./db');
// const sessionController = require('./controller/sessionController.js')

//middleware
app.use(session({
    secret: process.env.SECRET || "applesauce",
    resave: false,
    saveUninitialized: false,
}));

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.set('view engine', 'ejs');

db.connect();

require('./routes')(app);

app.listen(port, () => console.log(`Server started at port ${port}`));