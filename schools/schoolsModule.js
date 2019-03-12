const db = require("../data/dbConfig.js");

module.exports = {
  find,
  findById
};

function find() {
  return db("schools");
}

function findById(id) {
  return db("schools").where({ id: Number(id) });
}
