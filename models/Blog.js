// MONGOOSE/MODEL CONFIG
const mongoose = require('mongoose');
const {Schema} = mongoose;

var blogSchema = new Schema({
  googleId:'String',
  title: String,
  image: String,
  body: String,
  created: {
    type: Date,
    default: Date.now
  }

});

 module.exports = mongoose.model('Blog', blogSchema);

 
// const Blog = mongoose.model('Blog', blogSchema);

//  Blog.create({
//    googleId:'String',
//    title:"Test blog 3",
//    image: "https://images.unsplash.com/photo-1469521669194-babb45599def?auto=format&fit=crop&w=751&q=80",
//    body:"HELLO THIS IS A BLOG POST TEST 3"
//  });