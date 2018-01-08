const mongoose = require('mongoose');
const passportLocalMongoose = require("passport-local-mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  googleId: String,
  facebookId:String,
  username : String,
  password : String
});


UserSchema.plugin(passportLocalMongoose);

mongoose.model('Users', UserSchema);
