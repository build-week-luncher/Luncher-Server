const db = require("../data/dbConfig.js");

module.exports = {
  find,
  findById,
  insert
};

function find() {
  return db("schools");
}

function findById(id) {
  return db("schools").where({ id: Number(id) });
}

async function insert(game) {
  const [id] = await db("schools").insert(game);

  return db("schools")
    .where({ id })
    .first();
}
