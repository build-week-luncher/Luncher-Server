exports.up = function(knex, Promise) {
  return knex.schema.createTable("donors", tbl => {
    tbl.increments(); //primary key(id)

    tbl
      .string("username", 256)
      .notNullable()
      .unique();

    tbl.string("password", 256).notNullable();

    tbl.string("firstName", 256);

    tbl.string("lastName", 256);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("donors");
};
