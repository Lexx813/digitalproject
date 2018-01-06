const mongoose = require('mongoose');
const Blog = require('../models/Blog');
const requireLogin = require('../middlewares/requireLogin');



module.exports = app =>{

//---->>> POST BOOKS <<<-----

app.post("/api/blogs",  (req, res) => {
  var blog = req.body;
  Blog.create(blog, function (err, blogs) {
    if (err) {
      throw err;
    }
    res.json(blogs);
  });
});
//----->>>> GET BOOKS <<<---------
app.get("/api/blogs",  (req, res) => {
  Blog
    .find(function (err, blogs) {
      if (err) {
        throw err;
      }
      res.json(blogs);
    });
});
//---->>> DELETE BOOKS <<<------
app.delete("/api/blogs/:_id", function (req, res) {
  var query = {
    _id: req.params._id
  };
  Blog.remove(query, function (err, blogs) {
    if (err) {
      console.log("# API DELETE BLOGS");
    }
    res.json(blogs);
  });
});
//---->>> UPDATE BOOKS <<<------
app.put("/api/blogs/:_id", function (req, res) {
  var blog = req.body;
  var query = req.params._id;
  // if the field doesn't exist $set will set a new field
  var update = {
    $set: {
      title: blog.title,
      body: blog.body,
      image: blog.image,
  
    }
  };
  // When true returns the updated document
  var options = {
    new: true
  };
  Blog.findOneAndUpdate(query, update, options, function (err, blogs) {
    if (err) {
      console.log("# API DELETE BLOGS");
    }
    res.json(blogs);
  });
});
// -->>> GET BOOKS IMAGES API <<<---
app.get("/images", function (req, res) {
  const imgFolder = __dirname + "/client/src/img/";
  // REQUIRE FILE SYSTEM
  const fs = require("fs");
  //READ ALL FILES IN THE DIRECTORY
  fs.readdir(imgFolder, function (err, files) {
    if (err) {
      return console.error(err);
    }
    //CREATE AN EMPTY ARRAY
    const filesArr = [];
    // ITERATE ALL IMAGES IN THE DIRECTORY AND ADD TO THE THE ARRAY
    files.forEach(function (file) {
      filesArr.push({
        name: file
      });
    });
    // SEND THE JSON RESPONSE WITH THE ARRAY
    res.json(filesArr);
  });
});

}