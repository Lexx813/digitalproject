
// var Comment = require("../models/comments");

// // all the middleare goes here
// var middlewareObj = {};

// middlewareObj.checkBlogOwnership = function (req, res, next) {
//   if (req.isAuthenticated()) {
//     Blog
//       .findById(req.params.id, function (err, foundBlog) {
//         if (err) {
//           res.redirect("back");
//         } else {
//           // does user own the blog?
//           if (foundBlog.author.id.equals(req.user._id)) {
//             next();
//           } else {
//             res.redirect("back");
//           }
//         }
//       });
//   } else {
//     res.redirect("back");
//   }
// }

// middlewareObj.checkCommentOwnership = function (req, res, next) {
//   if (req.isAuthenticated()) {
//     Comment
//       .findById(req.params.comment_id, function (err, foundComment) {
//         if (err) {
//           res.redirect("back");
//         } else {
//           // does user own the comment?
//           if (foundComment.author.id.equals(req.user._id)) {
//             next();
//           } else {
//             res.redirect("back");
//           }
//         }
//       });
//   } else {
//     res.redirect("back");
//   }
// }

// middlewareObj.isLoggedIn = function (req, res, next) {
//   if (req.isAuthenticated()) {
//     return next();
//   }
//   req.flash("error", "Pease login first");
//   res.redirect("/login");
// }

// module.exports = middlewareObj;