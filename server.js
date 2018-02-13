const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require("cookie-parser");
const bodyParser =  require('body-parser');
const keys = require('./config/keys');
const methodOverride = require("method-override");
const morgan  = require('morgan');

// MODELS //
require('./models/Blog'); 
require('./models/Survey');
require('./models/User');


//SEEDING THE DATABASE //
const seedDB = require('./seeds');
seedDB();
 

// MONGOOSE SETUP //
mongoose.set('debug', true);
mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI);



const app = express();
app.use(bodyParser.json());
app.use(cookieParser());


app.use(morgan('combined'));


// ROUTES //
require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);
require('./routes/surveryRoutes')(app);
require('./routes/blogRoutes')(app);



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
 



//SERVER SETUP//

const PORT = process.env.PORT || 3001;
app.listen(PORT);
console.log(`SERVER STARTED AT PORT ${PORT}`);