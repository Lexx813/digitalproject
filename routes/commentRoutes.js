// const express = require("express");
// const Blog = require("../models/Blog");
// const Comment = require("../models/comments");
// const middleware = require("../middlewares");



// module.exports = app => {
// app.get("/api/comments", (req, res) => {
//   Comment
//     .find(function (err, comments) {
//       if (err) {
//         throw err;
//       }
//       res.json(comments);
//     });
// });
// //Comments New
// app
//   .get("/api/new", middleware.isLoggedIn, function (req, res) {
//     // find campground by id
//     console.log(req.params.id);
//     Blog.findById(req.params.id, function (err, blog) {
//       if (err) {
//         console.log(err);
//       } else {
//         res.render("comments/new", {blog: blog});
//       }
//     })
//   });

// //Comments Create
// app.post("/api/comments",  function (req, res) {
//   //lookup blog using ID
//   Blog
//     .findById(req.params.id, function (err, blog) {
//       if (err) {
//         console.log(err);
//         res.redirect("/blogs");
//       } else {
//         Comment
//           .create(req.body.comment, function (err, comment) {
//             if (err) {
//               console.log(err);
//             } else {
//               //add username and id to comment
//               comment.author.id = req.user._id;
//               comment.author.username = req.user.username;

//               //save comment
//               comment.save();
//               blog
//                 .comments
//                 .push(comment);
//               blog.save();
//               console.log(comment);
//               res.redirect('/blogs/' + blog._id);
//             }
//           });
//       }
//     });
// });
// //COMMENT EDIT ROUTE
// app.get("/api/:comment_id/edit", middleware.checkCommentOwnership, function (req, res) {
//   Comment
//     .findById(req.params.comment_id, function (err, foundComment) {
//       if (err) {
//         res.redirect("back");
//       } else {
//         res.render("comments/edit", {
//           campground_id: req.params.id,
//           comment: foundComment
//         });
//       }
//     });
// });
// // COMMENT UPDATE
// app.put("/api/:comment_id", middleware.checkCommentOwnership, function (req, res) {
//   Comment
//     .findByIdAndUpdate(req.params.comment_id, req.body.comment, function (err, updatedComment) {
//       if (err) {
//         res.redirect("back");
//       } else {
//         res.redirect("/blogs/" + req.params.id);
//       }
//     });
// });

// //COMMENTS DESTROY ROUTES
// app.delete("/api/:comment_id", middleware.checkCommentOwnership, function (req, res) {
//   // find by id and remove
//   Comment
//     .findByIdAndRemove(req.params.comment_id, function (err) {
//       if (err) {
//         res.redirect("back");
//       } else {
//         res.redirect("/blogs/" + req.params.id)
//       }
//     });
// });
// };


