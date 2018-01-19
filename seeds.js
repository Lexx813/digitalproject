const mongoose = require("mongoose");
const Blog = require("./models/Blog");
const Comment = require("./models/comments");

var data = [
  {
    name: "sumya ung",
    title:"who knows",
image : "https://images.unsplash.com/photo-1495112398151-7eedd7c2e7e8?auto=format&fit=crop&w=889&q=80",
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem" +
        " Ipsum has been the industry's standard dummy text ever since the 1500s, when an" +
        " unknown printer took a galley of type and scrambled it to make a type specimen " +
        "book. It has survived not only five centuries, but also the leap into electronic" +
        " typesetting, remaining essentially unchanged. It was popularised in the 1960s w" +
        "ith the release of Letraset sheets containing Lorem Ipsum passages, and more rec" +
        "ently with desktop publishing software like Aldus PageMaker including versions o" +
        "f Lorem Ipsum."
  }, {
    name: "Canyon Floor",
    image: "https://images.unsplash.com/photo-1473042904451-00171c69419d?auto=format&fit=crop&w=775&q=80",
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem" +
        " Ipsum has been the industry's standard dummy text ever since the 1500s, when an" +
        " unknown printer took a galley of type and scrambled it to make a type specimen " +
        "book. It has survived not only five centuries, but also the leap into electronic" +
        " typesetting, remaining essentially unchanged. It was popularised in the 1960s w" +
        "ith the release of Letraset sheets containing Lorem Ipsum passages, and more rec" +
        "ently with desktop publishing software like Aldus PageMaker including versions o" +
        "f Lorem Ipsum."
  }
]

function seedDB() {
  //Remove all campgrounds
  Blog
    .remove({}, function (err) {
      if (err) {
        console.log(err);
      }
      console.log("removed blogs!");
      //add a few campgrounds
      data.forEach(function (seed) {
        Blog
          .create(seed, function (err, blog) {
            if (err) {
              console.log(err)
            } else {
              console.log("added a blog");
              //create a comment
              Comment.create({
                text: "This place is great, but I wish there was internet",
                author: "Homer"
              }, function (err, comment) {
                if (err) {
                  console.log(err);
                } else {
                  blog
                    .comments
                    .push(comment);
                  blog.save();
                  console.log("Created new comment");
                }
              });
            }
          });
      });
    });
  //add a few comments
}

module.exports = seedDB;