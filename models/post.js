//model for the user of Buddle
var mongoose = require("mongoose");

var Schema = mongoose.Schema;

//create new UserSchema object
var PostSchema = new Schema({
  author: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  created: {
    type: Date,
    required: true
  },
  comments: {
    type: String,
    required: false
  },
  group: {
    type: String,
    required: true
  }
});

// This creates our model from the above schema, using mongoose's model method
var Post = mongoose.model("Post", PostSchema);

// Export the Article model
module.exports = Post;

// TODO - Figure out how to get comments to hold an array of strings
// module.exports = function (sequelize, DataTypes) {
//   var Post = sequelize.define(
//     "Post",
//     {
//       author: DataTypes.STRING,
//       description: DataTypes.STRING,
//       content: DataTypes.STRING,
//       created: DataTypes.DATE,
//       comments: DataTypes.STRING,
//       group: DataTypes.STRING,
//     },
//     { timestamps: false }
//   );

//   Post.sync().then(() => {
//     Post.create({
//       author: "Ricardo",
//       description: "description",
//       content: "photo url",
//       created: new Date(),
//       comments: "comments",
//       group: "toys",
//     });
//   });

//   return Post;
// };
