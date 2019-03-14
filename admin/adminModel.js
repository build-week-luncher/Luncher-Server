const db = require("../data/dbConfig.js");

module.exports = {
  find,
  findById,
  insert,
  update,
  remove
};

function find() {
  return db("schools");
}

function findById(id) {
  return db("schools").where({ id: Number(id) });
}

async function insert(school) {
  const [id] = await db("schools").insert(school);

  return db("schools")
    .where({ id })
    .first();
}

function update(id, changes) {
  return db("schools")
    .where("id", id)
    .update(changes);
}

function remove(id) {
  return db("schools")
    .where("id", Number(id))
    .del();
}
