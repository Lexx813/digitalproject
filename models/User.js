const mongoose = require('mongoose');
const passportLocalMongoose = require("passport-local-mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
 local            : {
        email        : String,
        password     : String,
    },
    facebook         : {
        id           : String,
        token        : String,
        email        : String,
        name         : String
    },

    googleId: String
});


UserSchema.plugin(passportLocalMongoose);

mongoose.model('Users', UserSchema);
