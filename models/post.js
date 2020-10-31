//model for the user of Buddle

module.exports = function(sequelize, DataTypes) {
    var Post = sequelize.define("Post", {
      author: DataTypes.STRING,
      description:DataTypes.STRING,
      content: DataTypes.STRING,
      created: DataTypes.DATE,
      comments: DataTypes.ARRAY(DataTypes.STRING)
    });
    return Post;
  };
  