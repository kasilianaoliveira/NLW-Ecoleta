//importar a dependencia
const sqlite = require("sqlite3").verbose()


//iniciar o objeto q ira fazer operaçoes
const db = new sqlite.Database("./src/database/database.db")
module.exports = db
