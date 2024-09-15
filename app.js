const express = require("express");
const sequelize = require("./config/db.js");
const routerBook = require("./routes/books.js");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  return res.status(200).json({ name: "saludo" });
});

app.use("/books", routerBook);

async function conexionBD() {
  try {
    await sequelize.sync();
    console.log("Se sincronizó la BD");
    app.listen(3000, () => {
      console.log("http://localhost:3000");
    });
  } catch (e) {
    console.log("Error", e);
  }
}

conexionBD();

// sequelize
//   .sync()
//   .then(() => {
//     console.log("Se conecto nuevamente");
//     app.listen(3000, () => {
//       console.log("http://localhost:3000");
//     });
//   })
//   .catch((e) => {
//     console.log("Error", e);
//   });
