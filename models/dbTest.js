const mysql = require("mysql2/promise");

// Configuração dos bancos de dados para desenvolvimento e testes
const config = {
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "admin",
  database: process.env.NODE_ENV === "test" ? "smartlettuce_test" : "smartlettuce",
};

// Cria uma pool de conexões com base no ambiente
const db = mysql.createPool(config);

module.exports = db;
