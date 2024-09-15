const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "gestion-usuarios-luis",
  "admin",
  "iFsCswuZApgqAluTNRDg",
  {
    host: "database-2.c7ususcgad5s.us-east-1.rds.amazonaws.com",
    dialect: "mysql",
    logging: false,
  }
);

async function generarConexion() {
  try {
    await sequelize.authenticate();
    console.log("Se conecto a la BD");
  } catch (e) {
    console.log("No se pudo conectar a la BD", e);
  }
}

generarConexion();

// sequelize
//   .authenticate()
//   .then(() => {
//     console.log("Se conecto a la BD");
//   })
//   .catch((e) => {
//     console.log("No se pudo conectar a la BD", e);
//   });

module.exports = sequelize;
