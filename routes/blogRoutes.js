const mongoose = require('mongoose');
const Blog = require('../models/Blog');
const requireLogin = require('../middlewares/requireLogin');



module.exports = app => {

  //---->>> POST BLOGS <<<-----

  //CREATE - add new Blog to DB
  app
    .post("/api/blog", function (req, res) {
      var blog = req.body;
      Blog.create(blog, function (err, blogs) {
        if (err) {
          throw err;
        }
        res.json(blogs);
      });
    });



  //----->>>> GET BLOG <<<---------
  app.get('/api/blog/:_id', (req, res) => {
    Blog.findById(req.params._id,(err, foundBlog) =>{
      if(err){
        console.log(err);
      }else{
        console.log(foundBlog);
        res.json(foundBlog)
      }
    })
  });
  //----->>>> GET BLOGS <<<---------
  app.get("/api/blog", (req, res) => {
    Blog
      .find(function (err, blogs) {
        if (err) {
          throw err;
        }
        res.json(blogs);
      });
  });

//---->>> EDIT BLOGS <<<------
app.get('/blogs/:_id/edit', (req,res) => {
  Blog.findById(req.params.id, (err, blogs) => {
    if(err){
      res.redirect('/blogs');
    } else {
      res.json(blogs)
    }
  })
})


  //---->>> UPDATE BLOGS <<<------
app.put("/api/blog/:_id", function (req, res) {
  var blog = req.body;
  var query = req.params._id;
  // if the field doesn't exist $set will set a new field
  var update = {
    $set: {
      name: blog.name,
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
      console.log("# API DELETE Blogs");
    }
    res.json(blogs);
  });
});



  // DESTROY blog ROUTE
  app
    .delete("/api/blog/:_id", function (req, res) {
      Blog
        .findByIdAndRemove(req.params._id, function (err) {
          if (err) {
            res.send("CANT DELETE");
          } else {
            res.send("DELETED")
          }
        });

    });

  // -->>> GET BLOGS IMAGES API <<<---
  // app.get("/images", function (req, res) {
  //   const imgFolder = __dirname + "/client/src/img/";
  //   // REQUIRE FILE SYSTEM
  //   const fs = require("fs");
  //   //READ ALL FILES IN THE DIRECTORY
  //   fs.readdir(imgFolder, function (err, files) {
  //     if (err) {
  //       return console.error(err);
  //     }
  //     //CREATE AN EMPTY ARRAY
  //     const filesArr = [];
  //     // ITERATE ALL IMAGES IN THE DIRECTORY AND ADD TO THE THE ARRAY
  //     files.forEach(function (file) {
  //       filesArr.push({
  //         name: file
  //       });
  //     });
  //     // SEND THE JSON RESPONSE WITH THE ARRAY
  //     res.json(filesArr);
  //   });
  // });

}