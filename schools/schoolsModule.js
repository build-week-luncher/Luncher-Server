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

function update(id, changes) {
  return db ('schools').where('id', id).update(changes);
}