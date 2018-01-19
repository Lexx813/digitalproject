const passport = require('passport');
const mongoose = require('mongoose');
const User = mongoose.model('Users');

module.exports = app => {
  //LOCAL STRATEGY ROUTES

  // SHOW REGISTER
  app.get('/register', (req, res) => {
    res.send('register');
  })
  //HANDLE SIGN UP LOGIC
  app.post('/api/register', (req, res) => {
    const newUser = new User({
      username: req.body.username
    })
    User.register(newUser, req.body.password, (err, user) => {
      if (err) {
        console.log(err);
        return res.send('register')
      }
      passport.authenticate('local')(req, res, () => {
        res.redirect('/');
      })
    })
  });

  //SHOW LOGIN FORM
  app
    .get("/api/login", function (req, res) {
      res.send("login");
    });

  //handling login logic
  app.post("/api/login", passport.authenticate("local", {
    successRedirect: "/blogs",
    failureRedirect: "/login"
  }), function (req, res) {});

  // logout route
  app.get("/api/logout", function (req, res) {
    req.logout();

    res.redirect("/");
  });








  //GOOGLE 
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      res.redirect('/dashboard');
    }
  );

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};