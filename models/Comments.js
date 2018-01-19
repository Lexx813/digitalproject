const mongoose = require('mongoose');
const {Schema} = mongoose;

var commentSchema = new Schema({

text : String,
author : {
  id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  username: String
}
});

module.exports = mongoose
.model("Comment", commentSchema);