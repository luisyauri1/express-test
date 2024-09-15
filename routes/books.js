const express = require("express");
const Book = require("../models/book.js");

const router = express.Router();

router.get("/", async (req, res) => {
  const listBook = await Book.findAll();
  return res.status(200).json({ message: "exitoso", data: listBook });
});

router.post("/", async (req, res) => {
  const dataBook = req.body;
  const data = await Book.create(dataBook);
  return res.status(201).json({ message: "exitoso", data: data });
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const data = await Book.findByPk(id);
  return res.status(201).json({ message: "exitoso", data });
});

router.get("/title/:title", async (req, res) => {
  const dataTitle = req.params.title;
  const data = await Book.findOne({ where: { title: dataTitle } });
  return res.status(201).json({ message: "exitoso", data });
});

router.get("/query/test", async (req, res) => {
  const { title, author } = req.query;
  let data = null;
  if (title && title.length > 0) {
    data = await Book.findOne({ where: { title } });
  } else if (author && author.length > 0) {
    data = await Book.findOne({ where: { author } });
  } else {
    data = null;
  }
  return res.status(201).json({ message: "exitoso", data });
});

router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  await Book.update(body, { where: { id } });
  return res.status(201).json({ message: "exitoso" });
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  await Book.destroy({ where: { id } });
  return res.status(201).json({ message: "exitoso" });
});

module.exports = router;
