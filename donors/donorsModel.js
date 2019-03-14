const db = require("../data/dbConfig");

module.exports = {
  add,
  find,
  findBy,
  findById
};

function find() {
  return db("donors").select("id", "username", "password");
}

function findBy(filter) {
  return db("donors").where(filter);
}

async function add(donor) {
  const [id] = await db("donors").insert(donor);

  return findById(id);
}

function findById(id) {
  return db("donors")
    .where({ id })
    .first();
}
