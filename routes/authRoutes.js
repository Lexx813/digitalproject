const passport = require('passport');
const mongoose = require('mongoose');
const User = mongoose.model('Users');

module.exports = app => {
  //LOCAL STRATEGY ROUTES

  // SHOW REGISTER
  app.get('/register',(req,res) =>{
    res.send('register');
  })
  //HANDLE SIGN UP LOGIC
  app.post('/api/register', (req,res) => {
    const newUser = new User({username: req.body.username})
    User.register(newUser, req.body.password,(err, user) =>{
      if(err){
        console.log(err);
       return res.send('register')
      }
      passport.authenticate('local')(req,res, () =>{
        res.redirect('/');
      })
    })
  });

  //SHOW LOGIN FORM


  
  //FACEBOOK 

    // =====================================
    // FACEBOOK ROUTES =====================
    // =====================================
    // route for facebook authentication and login
    // app.get('/auth/facebook', passport.authenticate('facebook', { 
    //   scope : ['public_profile', 'email']
    // }));

    // // handle the callback after facebook has authenticated the user
    // app.get('/auth/facebook/callback',
    //     passport.authenticate('facebook', {
    //         successRedirect : '/profile',
    //         failureRedirect : '/'
    //     }));

    // // route for logging out
    // app.get('/logout', function(req, res) {
    //     req.logout();
    //     res.redirect('/');
    // });


  
  
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
