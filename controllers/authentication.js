const Admin = require("../models/Admin");

exports.signup = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
    return res
      .status(422)
      .send({ error: "You must provide email and password" });
  }
  //see if user exist
  Admin.findOne({ email: email }, (err, existingAdmin) => {
    if (err) {
      return next(err);
    }

    // if a user does exist, return an error
    if (existingAdmin) {
      return res.status(422).send({ error: "Email is in use" });
    }
    //if a user with emal does not exist , create and save user record
    const admin = new Admin({
      email: email,
      password: password
    });

    admin.save(err => {
      if (err) {
        return next(err);
      }
      // respond to request inidicating the user was created
      res.json({ success: true });
    });
  });
};
