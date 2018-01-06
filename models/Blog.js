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
//    title:"Test blog",
//    image: "https://images.unsplash.com/photo-1473042904451-00171c69419d?auto=format&fit=crop&w=775&q=80",
//    body:"HELLO THIS IS A B LOG POST"
//  });