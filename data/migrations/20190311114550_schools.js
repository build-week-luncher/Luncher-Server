exports.up = function(knex, Promise) {
  return knex.schema.createTable("schools", tbl => {
    tbl.increments(); // primary key(id)

    tbl
      .string("schoolName", 256)
      .notNullable() // required
      .unique(); // must be unique

    tbl.text("details");

    tbl.integer("needAmount").notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("schools");
};
