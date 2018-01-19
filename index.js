const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser =  require('body-parser');
const keys = require('./config/keys');
const methodOverride = require("method-override");
const expressSanitizer = require("express-sanitizer");
require('./models/Blog');
require('./models/comments');
require('./models/User'); 
require('./models/Survey');
require('./services/passport');

const seedDB = require('./seeds');
seedDB();
 
mongoose.set('debug', true);
mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI);

const app = express();
app.use(expressSanitizer());
app.use(methodOverride("_method"));


app.use(bodyParser.json());
app.use(
    cookieSession({
      maxAge: 30 * 24 * 60 *60 *1000,
      keys: [keys.cookieKey]
    })
  );
  //PASPORT CONFIG
app.use(require("express-session")({
    secret: "Alex rules this stuff!",
    resave: false,
    saveUninitialized: false
}));

  app.use(passport.initialize());
  app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);
require('./routes/surveryRoutes')(app);
require('./routes/apiRoute')(app);
require('./routes/blogRoutes')(app);
// require('./routes/commentRoutes')(app);


if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets
  // like our main.js file, or main.css file!
  app.use(express.static('client/build'));

  // Express will serve up the index.html file
  // if it doesn't recognize the route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}



//this is for server

const PORT = process.env.PORT || 5000;
app.listen(PORT);
console.log('SERVER STARTED');