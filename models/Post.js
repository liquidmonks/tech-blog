// Import the functions you need from the SDKs you need
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// Initialize Product model (Post) by extending off Sequelize's Model class
class Post extends Model {}

Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    underscored: true,
    freezeTableName: true,
    modelName: "post",
  }
);

// Export the Post model
module.exports = Post;
