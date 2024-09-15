const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.js");

const Book = sequelize.define("Book", {
  title: {
    type: DataTypes.STRING,
  },
  author: {
    type: DataTypes.STRING,
  },
  publishedDate: {
    type: DataTypes.DATE,
  },
});

module.exports = Book;
