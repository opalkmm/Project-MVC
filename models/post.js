//model for the user of Buddle

// TODO - Figure out how to get comments to hold an array of strings
module.exports = function(sequelize, DataTypes) {
    var Post = sequelize.define("Post", {
      author: DataTypes.STRING,
      description:DataTypes.STRING,
      content: DataTypes.STRING,
      created: DataTypes.DATE,
      comments: DataTypes.STRING,
      group: DataTypes.STRING
    });
    return Post;
  };
  