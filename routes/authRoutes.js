const mongoose = require('mongoose');
const User = require('../models/User');
const { auth } = require('../middlewares/auth');






module.exports = app => {
//JWT//

  app.get("/api/auth", auth, (req, res) => {
    res.json({
      isAuth: true,
      id: req.user._id,
      email: req.user.email,
      name: req.user.name,
      lastname: req.user.lastname
    });
  });


app.post("/api/register", (req, res) => {
  const user = new User(req.body);

  user.save((err, doc) => {
    if (err) return res.json({ success: false });
    res.status(200).json({
      success: true,
      user: doc
    });
  });
});

app.post("/api/login", (req, res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    if (!user)
      return res.json({
        isAuth: false,
        message: "Auth failed, email not found"
      });

    user.comparePassword(req.body.password, (err, isMatch) => {
      if (!isMatch)
        return res.json({
          isAuth: false,
          message: "Wrong password"
        });

      user.generateToken((err, user) => {
        if (err) return res.status(400).send(err);
        res.cookie("auth", user.token).json({
          isAuth: true,
          id: user._id,
          email: user.email
        });
      });
    });
  });
});

//LOGOUT//
app.get('/api/logout',auth, (req,res) => {
   req.user.deleteToken(req.token, (err, user) => {
     if(err) return res.status(400).send(err);
     res.sendStatus(200);
   })
});



app.get("/api/users", (req, res) => {
  User.find({}, (err, users) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(users);
  });
});

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });


};