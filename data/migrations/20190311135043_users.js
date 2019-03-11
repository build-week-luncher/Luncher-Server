exports.up = function(knex, Promise) {
  return knex.schema.createTable("users", tbl => {
    tbl.increments(); // primary key(id)

    tbl
      .string("username", 256)
      .notNullable() // required
      .unique(); // must be unique

    tbl.string("password", 256).notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("users");
};
