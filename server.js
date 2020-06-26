const express = require('express');
const methodOverride = require('method-override');
const app = express();
const PORT = 3000;
const db = require('./db');
const sessionController = require('./controller/sessionController.js')

// app.use('/sessions', sessionController);
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
// app.use(session({
//     secret: "applesauce",
//     resave: false,
//     saveUninitialized: false,
// }));

app.set('view engine', 'ejs');

db.connect();

require('./routes')(app);

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));